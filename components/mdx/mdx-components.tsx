import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import { Arrow } from "@/components/poster/Arrow";

type Props<T extends keyof React.JSX.IntrinsicElements> =
  ComponentPropsWithoutRef<T>;

export const mdxComponents: MDXComponents = {
  h2: (props: Props<"h2">) => (
    <h2 className="text-h3 md:text-h2 mt-16 mb-4 font-bold" {...props} />
  ),
  h3: (props: Props<"h3">) => (
    <h3 className="text-h3 mt-10 mb-3 font-semibold" {...props} />
  ),
  p: (props: Props<"p">) => <p className="mb-5 max-w-[68ch]" {...props} />,
  ul: (props: Props<"ul">) => (
    <ul className="mb-5 max-w-[68ch] list-disc space-y-2 pl-6" {...props} />
  ),
  ol: (props: Props<"ol">) => (
    <ol className="mb-5 max-w-[68ch] list-decimal space-y-2 pl-6" {...props} />
  ),
  a: ({ href = "", children, ...rest }: Props<"a">) => {
    const external = /^https?:/.test(href);
    return (
      <a
        href={href}
        className="decoration-blue hover:text-blue underline decoration-[1.5px]"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
        {external ? (
          <Arrow kind="external" className="ml-1 inline-block" />
        ) : null}
      </a>
    );
  },
  strong: (props: Props<"strong">) => (
    <strong className="font-semibold" {...props} />
  ),
  blockquote: (props: Props<"blockquote">) => (
    <blockquote
      className="border-ink text-lead my-8 max-w-[60ch] border-y py-4"
      {...props}
    />
  ),
  hr: () => <hr className="border-ink my-12" />,
  table: (props: Props<"table">) => (
    <div className="my-8 overflow-x-auto">
      <table className="tnum w-full border-collapse text-left" {...props} />
    </div>
  ),
  th: (props: Props<"th">) => (
    <th className="label border-ink border-b py-2 pr-6" {...props} />
  ),
  td: (props: Props<"td">) => (
    <td className="border-ink/30 border-b py-2 pr-6 align-top" {...props} />
  ),
  code: (props: Props<"code">) => (
    <code className="bg-blue-tint px-1 py-0.5 text-[0.9em]" {...props} />
  ),
  pre: (props: Props<"pre">) => (
    <pre
      className="border-ink text-meta my-6 overflow-x-auto border p-4"
      {...props}
    />
  ),
};
