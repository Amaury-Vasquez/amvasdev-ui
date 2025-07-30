import clsx from "clsx";
import { ReactNode } from "react";

export interface TooltipProps {
  content: ReactNode;
}

const Tooltip = ({ content }: TooltipProps) => (
  <span className="ui-absolute ui:left-1/2 ui:right-1/2 ui:-translate-x-1/2 ui:bottom-[calc(100%+0.5rem)] ui:w-fit">
    <span
      className={clsx(
        "ui:bg-base-200 ui:rounded-lg ui:truncate ui:py-2 ui:px-3 ui:w-fit ui:shadow-sm ui:h-fit",
        "ui:items-center ui:justify-center ui:flex ui:relative"
      )}
    >
      {typeof content === "string" ? (
        <span className="ui-text-sm ui:flex">{content}</span>
      ) : (
        content
      )}
    </span>
    <span className="ui-absolute ui:z-50 ui:h-2 ui:w-2 ui:flex ui:right-1/2 ui:-bottom-1 ui:left-1/2 ui:-translate-x-1/2">
      <span className="ui-bg-base-200 ui:h-full ui:w-full ui:flex ui:rotate-45" />
    </span>
  </span>
);

export default Tooltip;
