import React, { useRef, useState, useEffect} from "react"
import {
  interpolateMagma,
  pack,
  scaleSequential,
  select,
  stratify,
  zoom,
} from "d3"
import useAllArticles from "../hooks/useAllArticles"
import useWindowSize from "../hooks/useWindowSize"
import Article from "./Article"

const Map = () => {
  // Hold onto these DOM elements.
  const svgRef = useRef()
  const groupRef = useRef()

  const [width, height] = useWindowSize()
   
  // Query data.
  const allArticles = useAllArticles()
  const rootArticle = allArticles[allArticles.length - 1]

  // Render root article by default.
  const [selectedArticleHandle, setSelectedArticleHandle] = useState({ title: rootArticle.frontmatter.title, tag: "" })
  let selectedArticle = rootArticle

  // Find the article if the root article wasn't selected.
  if (selectedArticleHandle.tag) {
    selectedArticle = allArticles.find(a => a.frontmatter.title === selectedArticleHandle.title && a.frontmatter.tags.includes(selectedArticleHandle.tag))
  }
  
  // Collect titles and tags from all articles.
  let list = []
  allArticles.forEach(a => {
    if (!a.frontmatter.tags) {
      list.push({ title: a.frontmatter.title, tag: "", sentenceCount: a.wordCount.sentences || 0 })
    } else {
      a.frontmatter.tags.forEach(t => list.push({ title: a.frontmatter.title, tag: t, sentenceCount: a.wordCount.sentences || 0 }))
    }
  })

  // Convert list of titles and tags into hierarchical object.
  const hierarchy = stratify()
    .id(d => d.title)
    .parentId(d => d.tag)
    (list)
    .sum(d => d.sentenceCount ? d.sentenceCount : 1)
    .sort((a, b) => b.value - a.value)

  const padding = 12

  // Initialize circle pack dimensions from the hierarchy.
  const root = pack()
    .size([width, height])
    .padding(padding)
    (hierarchy)

  // Set color scheme
  const color = scaleSequential([root.height + 2 / root.height, 0], interpolateMagma)

  useEffect(() => {
    const svg = select(svgRef.current)
    const g = select(groupRef.current)

    svg
      .style("background", color(root.height))
      .style("cursor", "pointer")
      .on("click", () => setSelectedArticleHandle({ title: rootArticle.frontmatter.title, tag: "" }))

    const nodes = g
      .selectAll("g")
      .data(root.descendants().slice(1))
      .join("g")
      .attr("transform", d => `translate(${d.x},${d.y})`)
      .on("click", (event, d) => {
        event.stopPropagation()
        setSelectedArticleHandle({ title: d.data.title, tag: d.data.tag })
      })
    
    nodes
      .selectAll("circle")
      .data(d => d.descendants().slice(0, 1))
      .join("circle")
      .attr("r", d => d.r)
      .attr("stroke", d => (d.data.title === selectedArticleHandle.title && d.data.tag === selectedArticleHandle.tag) ? "white" : "unset")
      .attr("stroke-width", padding / 2 - 1)
      .attr("fill", d => color(d.height))

    nodes
      .selectAll("title")
      .data(d => d.descendants().slice(0, 1))
      .join("title")
      .text(d => d.data.title)

    const leaves = nodes.filter(d => !d.children)

    leaves
      .selectAll("text")
      .data(d => d.descendants().slice(0, 1))
      .join("text")
      .attr("text-anchor", "middle")
      .attr("font-size", d => d.r / 6)
      .text(d => d.data.title)

    svg.call(zoom()
      .on("zoom", event => g.attr("transform", event.transform)))
      .on("dblclick.zoom", null)
  })

  return (
    <main>
      <div className="container">
        <Article article={selectedArticle} />
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} ref={svgRef}>
        <g ref={groupRef} />
      </svg>
    </main>
  )
}

export default Map
