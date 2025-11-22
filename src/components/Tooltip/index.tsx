import clsx from "clsx";
import { ReactNode } from "react";

export type TooltipPosition = "top" | "left" | "right" | "down";

export interface TooltipProps {
  content: ReactNode;
  className?: string;
  position?: TooltipPosition;
}

const CONTAINER_POSITION_CLASSES: Record<TooltipPosition, string> = {
  top: "ui:bottom-[calc(100%+0.5rem)] ui:left-1/2 ui:right-1/2 ui:-translate-x-1/2",
  down: "ui:top-[calc(100%+0.5rem)] ui:left-1/2 ui:right-1/2 ui:-translate-x-1/2",
  left: "ui:right-[calc(100%+0.5rem)] ui:top-1/2 ui:-translate-y-1/2",
  right: "ui:left-[calc(100%+0.5rem)] ui:top-1/2 ui:-translate-y-1/2",
};

const CHEVRON_POSITION_CLASSES: Record<TooltipPosition, string> = {
  top: "ui:-bottom-1 ui:left-1/2 ui:-translate-x-1/2",
  down: "ui:-top-1 ui:left-1/2 ui:-translate-x-1/2",
  left: "ui:-right-1 ui:top-1/2 ui:-translate-y-1/2",
  right: "ui:-left-1 ui:top-1/2 ui:-translate-y-1/2",
};

const Tooltip = ({ content, className, position = "top" }: TooltipProps) => (
  <span className={clsx("ui:absolute ui:w-fit", CONTAINER_POSITION_CLASSES[position], className)}>
    <span
      className={clsx(
        "ui:bg-base-200 ui:rounded-lg ui:truncate ui:py-2 ui:px-3 ui:w-fit ui:shadow-sm ui:h-fit",
        "ui:items-center ui:justify-center ui:flex ui:relative"
      )}
    >
      {typeof content === "string" ? (
        <span className="ui:text-sm ui:flex">{content}</span>
      ) : (
        content
      )}
    </span>
    <span className={clsx("ui:absolute ui:z-50 ui:h-2 ui:w-2 ui:flex", CHEVRON_POSITION_CLASSES[position])}>
      <span className="ui:bg-base-200 ui:h-full ui:w-full ui:flex ui:rotate-45" />
    </span>
  </span>
);

export default Tooltip;
