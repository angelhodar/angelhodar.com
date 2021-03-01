import fs from "fs";
import matter from "gray-matter";
import path from "path";
import renderToString from "next-mdx-remote/render-to-string";
import MDXComponents from "@/components/MDXComponents";

const root = process.cwd();

export async function getBlogPaths() {
  return fs.readdirSync(path.join(root, "data", "blog"));
}

export async function getArticlesFrontMatter() {
  const paths = await getBlogPaths();
  const articles = paths.map((articlePath) => {
    const source = fs.readFileSync(path.join(root, "data", "blog", articlePath));
    const { data } = matter(source);
    const { name } = path.parse(articlePath);
    return {slug: name, ...data};
  });
  return articles;
}

export async function getArticleBySlug(slug) {
  const filePath = path.join(root, "data", "blog", `${slug}.mdx`);
  const source = fs.readFileSync(filePath);

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents
  });

  return {
    mdxSource,
    frontMatter: data,
  };
}
