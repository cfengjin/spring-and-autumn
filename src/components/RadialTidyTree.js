import React, { useRef, useState, useEffect } from 'react'
import { select, tree, linkRadial, zoom } from 'd3'
import useWindowSize from "../hooks/useWindowSize"
import Article from "./Article"

const RadialTidyTree = props => {
  const NODE_RADIUS = 4
  const NODE_PADDING = 12
  const BRANCH_SEPARATION_FACTOR = 2
  const TEXT_STROKE_WIDTH = 1
  const TEXT_BACKGROUND_STROKE_WIDTH = 6
  const SEED_PADDING = 180

  const [width, height] = useWindowSize()
  const viewBox = [SEED_PADDING - width, -height / 2, width, height]

  const articles = props.articles
  const seedArticle = articles[articles.length - 1]

  // Render seed article by default.
  const [selectedArticleHandle, setSelectedArticleHandle] = useState({ title: seedArticle.frontmatter.title, tag: "" })
  let selectedArticle = seedArticle

  // Find the article if the seed article wasn't selected.
  if (selectedArticleHandle.tag) {
    selectedArticle = articles.find(a => (a.frontmatter.title === selectedArticleHandle.title) && a.frontmatter.tags.includes(selectedArticleHandle.tag))
  }

  // Initialize radial tidy tree dimensions from data.
  const seed = tree()
    .size([-Math.PI, Math.min(width, height) * 0.75])
    .separation((a, b) => ((a.parent === b.parent) ? 1 : BRANCH_SEPARATION_FACTOR) / a.depth)
    (props.data)

  // Holds onto the DOM elements.
  const svgRef = useRef()
  const groupRef = useRef()
  const branchesRef = useRef()
  const nodesRef = useRef()
  const labelsRef = useRef()

  useEffect(() => {
    const svg = select(svgRef.current)
    const group = select(groupRef.current)
    const branches = select(branchesRef.current)
    const nodes = select(nodesRef.current)
    const labels = select(labelsRef.current)

    svg
      .attr("viewBox", viewBox)
      .style("cursor", "move")

    svg.call(zoom()
      .on("zoom", event => group.attr("transform", event.transform)))
      .on("dblclick.zoom", null)

    branches
      .selectAll("path")
      .data(seed.links())
      .join("path")
        .attr("d", linkRadial()
            .angle(d => d.x)
            .radius(d => d.y))
        .attr("fill", "none")
        .attr("stroke", "black")

    nodes
      .selectAll("circle")
      .data(seed.descendants())
      .join("circle")
        .attr("transform", d => `
          rotate(${d.x * 180 / Math.PI - 90})
          translate(${d.y}, 0)
        `)
        .attr("fill", d => d.children ? "#555" : "#999")
        .attr("r", NODE_RADIUS) 

    labels
      .selectAll("text")
      .data(seed.descendants())
      .join("text")
        .text(d => d.data.title)
        .attr("transform", d => `
          rotate(${d.x * 180 / Math.PI - 90}) 
          translate(${d.y},0) 
          rotate(${d.x >= Math.PI ? 0 : 180})
        `)
        .attr("dy", "0.31em")
        .attr("x", d => (d.x < Math.PI) === !d.children ? -NODE_PADDING : NODE_PADDING)
        .attr("text-anchor", d => (d.x < Math.PI) === !d.children ? "end" : "start")
        .attr("stroke", "black")
        .attr("stroke-width", TEXT_STROKE_WIDTH)
      .clone(true).lower()
        .attr("stroke", "white")
        .attr("stroke-width", TEXT_BACKGROUND_STROKE_WIDTH)
        .on("click", (event, d) => {
          event.stopPropagation()
          setSelectedArticleHandle({ title: d.data.title, tag: d.data.tag })
        })
        .style("cursor", "pointer")
  })

  return (
    <main>
      <div className="container">
        <Article article={selectedArticle} />
      </div>
      <svg ref={svgRef}>
        <g ref={groupRef}>
          <g ref={branchesRef} />
          <g ref={nodesRef} />
          <g ref={labelsRef} />
        </g>
      </svg>
    </main>
  )
}

export default RadialTidyTree