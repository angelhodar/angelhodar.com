import BlogLayout from "@/components/BlogLayout";
import MDXComponents from "@/components/MDXComponents";
import { useHydrate } from "next-mdx/client";
import { getMdxNode, getMdxPaths } from "next-mdx/server";

export default function Blog({ post }) {
  const content = useHydrate(post, {
    components: MDXComponents,
  });
  return <BlogLayout frontMatter={post.frontMatter}>{content}</BlogLayout>;
}

export async function getStaticPaths() {
  return { paths: await getMdxPaths("article"), fallback: false };
}

export async function getStaticProps(context) {
  const post = await getMdxNode("article", context);
  if (!post) return { notFound: true };
  return { props: { post } };
}
