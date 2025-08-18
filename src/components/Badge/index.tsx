import clsx, { ClassValue } from "clsx";
import { HTMLProps } from "react";

export type BadgeVariant =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export type BadgeSize = "xs" | "sm" | "md" | "lg" | "xl";

export type BadgeBorderType = "outline" | "dash" | "none";

export interface BadgeProps
  extends Omit<HTMLProps<HTMLSpanElement>, "className" | "size"> {
  className?: ClassValue;
  variant?: BadgeVariant;
  size?: BadgeSize;
  borderType?: BadgeBorderType;
  soft?: boolean;
  children: React.ReactNode;
}

const getBadgeClasses = ({
  variant,
  size = "md",
  borderType = "none",
  soft = false,
}: {
  variant?: BadgeVariant;
  size?: BadgeSize;
  borderType?: BadgeBorderType;
  soft?: boolean;
}) => {
  const baseClasses = "ui:badge";

  const sizeClasses = {
    xs: "ui:badge-xs",
    sm: "ui:badge-sm",
    md: "ui:badge-md",
    lg: "ui:badge-lg",
    xl: "ui:badge-xl",
  };

  const variantClasses = variant
    ? {
        neutral: "ui:badge-neutral",
        primary: "ui:badge-primary",
        secondary: "ui:badge-secondary",
        accent: "ui:badge-accent",
        info: "ui:badge-info",
        success: "ui:badge-success",
        warning: "ui:badge-warning",
        error: "ui:badge-error",
      }[variant]
    : "";

  const borderClasses = {
    outline: "ui:badge-outline",
    dash: "ui:badge-dash",
    none: "",
  };

  const softClass = soft ? "ui:badge-soft" : "";

  return clsx(
    baseClasses,
    sizeClasses[size],
    variantClasses,
    borderClasses[borderType],
    softClass
  );
};

const Badge = ({
  className,
  variant,
  size = "sm",
  borderType = "none",
  soft = false,
  children,
  ...props
}: BadgeProps) => (
  <span
    className={clsx(
      getBadgeClasses({ variant, size, borderType, soft }),
      className
    )}
    {...props}
  >
    {children}
  </span>
);

export default Badge;
