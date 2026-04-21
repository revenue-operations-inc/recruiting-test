import type { HTMLAttributes, LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { typo } from "./classes";

export { typo };

export function SiteTitle({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn(typo.siteTitle, className)} {...rest}>
      {children}
    </h1>
  );
}

export function Heading1({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn(typo.heading1, className)} {...rest}>
      {children}
    </h1>
  );
}

export function Heading2({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn(typo.heading2, className)} {...rest}>
      {children}
    </h2>
  );
}

export function Heading3({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn(typo.heading3, className)} {...rest}>
      {children}
    </h3>
  );
}

export function Body({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn(typo.body, className)} {...rest}>
      {children}
    </p>
  );
}

export function BodySmall({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn(typo.bodySmall, className)} {...rest}>
      {children}
    </p>
  );
}

export function Caption({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn(typo.caption, className)} {...rest}>
      {children}
    </p>
  );
}

export function FieldLabel({
  className,
  children,
  ...rest
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={cn(typo.label, className)} {...rest}>
      {children}
    </label>
  );
}
