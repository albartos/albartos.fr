import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from "react-markdown";

function BlogPostTemplate(props) {
  const { slug, data, content } = props
  console.log(data)
  return (
    <>
      <h1>{data.title}</h1>
      <ReactMarkdown escapeHtml={true} source={content} />
    </>
  )
}

export async function getStaticPaths() {

  const indexData = (await import(`../../content/index.yaml`)).default;
  const paths = indexData.blogs.map(blog => ({
    params: { slug: blog }
  }))
  console.log(paths)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  // Import our .md file using the `slug` from the URL
  const markdown = (await import(`../../content/blog/${slug}.md`)).default

  // Parse .md data through `matter`
  const markdownData = matter(markdown)

  // Pass data to our component props
  return {
    props: {
      slug,
      data: markdownData.data,
      content: markdownData.content
    }
  }
}

export default BlogPostTemplate
