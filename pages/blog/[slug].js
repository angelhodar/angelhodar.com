import hydrate from "next-mdx-remote/hydrate";
import BlogLayout from "@/components/BlogLayout";
import MDXComponents from "@/components/MDXComponents";
import { getBlogPaths, getArticleBySlug } from "@/lib/mdx";

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

export async function getStaticPaths() {
  const posts = await getBlogPaths();

  const paths = posts.map((p) => {
    return {
      params: { slug: p.replace(/\.mdx/, "") },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = await getArticleBySlug(params.slug);
  return { props: article };
}
