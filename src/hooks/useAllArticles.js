import { useStaticQuery, graphql } from "gatsby"

const useAllArticles = () => {
  // Put root article last.
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query AllArticles {
        allMarkdownRemark(sort: {fields: frontmatter___tags}) {
          nodes {
            frontmatter {
              title
              date
              tags
            }
            html
            wordCount {
              sentences
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.nodes
}

export default useAllArticles