import { readFile } from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx/mdx-components";

export type MdxDir = "work" | "research";

/** Reads content/<dir>/<slug>.mdx and returns the rendered body. */
export async function renderMdx(dir: MdxDir, slug: string) {
  const file = path.join(process.cwd(), "content", dir, `${slug}.mdx`);
  const source = await readFile(file, "utf8");
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
  });
  return content;
}
