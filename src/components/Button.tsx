import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
};

export default function Button({ href, children, variant = "primary", className = "" }: Props) {
  const base =
    "btn group inline-flex items-center gap-3 rounded-full px-5 py-3 text-[0.95rem] font-medium";
  const styles = {
    primary: "bg-ink text-paper hover:bg-blue",
    ghost: "border border-line text-ink hover:border-ink",
    light: "bg-paper text-ink hover:bg-white",
  }[variant];
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block h-1.5 w-1.5 rounded-full bg-coral transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}
