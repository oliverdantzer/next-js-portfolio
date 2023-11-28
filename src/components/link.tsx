import {default as NextLink } from "next/link";
import { ReactNode } from "react";

export default function Link(params: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <NextLink
      href={params.href}
      className={`p-2 link-shadow-light dark:link-shadow-dark ${params.className}`}
    >
      {params.children}
    </NextLink>
  );
}
