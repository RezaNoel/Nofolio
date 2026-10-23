import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const BASE =
  "inline-flex w-fit items-center justify-center gap-2 rounded-none font-mono text-[11px] font-bold uppercase tracking-[0.14em] whitespace-nowrap";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-invert-bg text-invert-fg hover:opacity-80 transition-opacity",
  secondary:
    "hover-invert border border-line-strong bg-bg text-ink hover:border-transparent",
  ghost: "text-muted hover:bg-invert-bg hover:text-invert-fg",
};

const SIZES: Record<Size, string> = {
  sm: "px-3 py-1.5",
  md: "px-4 py-2",
  lg: "h-12 px-6",
};

type Shared = {
  variant?: Variant;
  size?: Size;
  href?: string;
  download?: boolean | string;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = Shared &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = Shared &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    href,
    download,
    ...rest
  } = props;
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className);

  if (href) {
    const external = /^(https?:\/\/|mailto:)/.test(href);
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
