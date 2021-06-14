import * as React from "react"
import "katex/dist/katex.min.css"

const Article = (props) => {
  return (
    <article>
      <h1>
        {props.article.frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: props.article.html }} />
    </article>
  )
}

export default Article
