import { Fragment } from "react";

/** The company name, in the brand accent colour. */
export function Sieve({ children = "i‑sieve" }: { children?: React.ReactNode }) {
  return <span className="brand">{children}</span>;
}

const SPLIT = /(i[‑-]sieve)/gi;
const IS = /^i[‑-]sieve$/i;

/** Wraps every "i‑sieve" inside a plain string in the brand colour. */
export function Brandify({ children }: { children: string }) {
  const parts = children.split(SPLIT);
  return (
    <>
      {parts.map((p, i) =>
        IS.test(p) ? <span key={i} className="brand">{p}</span> : <Fragment key={i}>{p}</Fragment>,
      )}
    </>
  );
}
