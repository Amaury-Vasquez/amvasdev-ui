import clsx, { ClassValue } from "clsx";
import { format, addMonths, subMonths } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import "react-day-picker/style.css";

export interface CalendarProps {
  className?: ClassValue;
  onDateChange?: (date: Date | undefined) => void;
  selectedDate?: Date;
  disabled?: any;
  fromDate?: Date;
  toDate?: Date;
  showOutsideDays?: boolean;
}

const Calendar = ({
  className,
  onDateChange,
  selectedDate,
  disabled,
  fromDate,
  toDate,
  showOutsideDays = true,
}: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());

  const handlePreviousMonth = () => {
    setCurrentMonth((prev) => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  };

  return (
    <div
      className={clsx(
        "ui:bg-base-100 ui:border ui:border-base-300 ui:shadow-lg ui:rounded-box ui:p-4",
        className
      )}
    >
      {/* Custom Header */}
      <div className="ui:flex ui:justify-between ui:items-center ui:mb-4">
        <button
          className="ui:btn ui:btn-sm ui:btn-ghost ui:h-8 ui:w-8 ui:p-0 ui:opacity-50 hover:ui:opacity-100"
          onClick={handlePreviousMonth}
        >
          <ChevronLeft className="ui:w-4 ui:h-4" />
        </button>

        <div className="ui:text-base ui:font-semibold ui:text-base-content">
          {format(currentMonth, "MMMM yyyy")}
        </div>

        <button
          className="ui:btn ui:btn-sm ui:btn-ghost ui:h-8 ui:w-8 ui:p-0 ui:opacity-50 hover:ui:opacity-100"
          onClick={handleNextMonth}
        >
          <ChevronRight className="ui:w-4 ui:h-4" />
        </button>
      </div>

      {/* Calendar */}
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={onDateChange}
        className={clsx("rdp-custom", className)}
        classNames={{
          months: "ui:flex ui:flex-col",
          month_caption: "ui:hidden",
          caption: "ui:hidden",
          caption_label: "ui:hidden",
          nav: "ui:hidden",
          nav_button: "ui:hidden",
          nav_button_previous: "ui:hidden",
          nav_button_next: "ui:hidden",
          table: "ui:w-full ui:border-collapse",
          head_row: "ui:flex",
          head_cell:
            "ui:text-xs ui:font-medium ui:text-base-content/70 ui:rounded-lg ui:w-8 ui:h-8 ui:flex ui:items-center ui:justify-center",
          row: "ui:flex ui:w-full ui:mt-2",
          cell: "ui:relative ui:p-0 ui:text-center ui:text-sm ui:focus-within:relative ui:focus-within:z-20",
          day: "ui:h-8 ui:w-8 ui:p-0 ui:font-normal ui:border-0 ui:bg-transparent hover:ui:bg-base-200 ui:rounded-lg ui:transition-colors",
          day_selected:
            "ui:bg-primary ui:text-primary-content hover:ui:bg-primary hover:ui:text-primary-content ui:focus:bg-primary ui:focus:text-primary-content",
          day_today: "ui:bg-accent ui:text-accent-content",
          day_outside: "ui:text-base-content/30",
          day_disabled: "ui:text-base-content/30 ui:opacity-50",
          day_range_middle:
            "ui:aria-selected:bg-accent ui:aria-selected:text-accent-content",
          day_hidden: "ui:invisible",
        }}
        disabled={disabled}
        fromDate={fromDate}
        toDate={toDate}
        showOutsideDays={showOutsideDays}
        month={currentMonth}
      />
    </div>
  );
};

export default Calendar;
