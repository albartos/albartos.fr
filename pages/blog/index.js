import Head from 'next/head'
import matter from 'gray-matter'

export default function Blog(props) {

  const { title, description, blogs } = props;

  return (
    <div>
      <Head>
        <meta name="Description" content={"ALBARTOS blog"}></meta>
        <title>ALBARTOS | blog</title>
      </Head>

        Blog en cours de construction...
    
    </div>
  )
}

export async function getStaticProps() {
  const indexData = (await import(`../../content/index.yaml`)).default;

  // import all blogs markdown modules  
  const blogsMarkdown = await Promise.all(
    indexData.blogs.map(async slug => ({
      slug,
      markdown: (await import(`../../content/blog/${slug}.md`)).default
    }))
  );

  // extract the data header of markdown modules
  const blogsData = blogsMarkdown.map(({ markdown, slug }) => ({ slug, ...matter(markdown).data }));

  return {
    props: {
      blogs: blogsData
    },
  };
}