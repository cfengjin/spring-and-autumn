import * as React from "react";
import {
  stratify,
} from "d3";
import useAllArticles from "../hooks/useAllArticles";
import RadialTidyTree from "../components/RadialTidyTree";

const IndexPage = () => {
  const allArticles = useAllArticles();

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

  return (
    <RadialTidyTree data={hierarchy} articles={allArticles} />
  )
}

export default IndexPage
