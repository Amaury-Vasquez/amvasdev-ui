import clsx, { ClassValue } from "clsx";
import { format, Locale } from "date-fns";
import { enUS } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { ReactNode, useRef, useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import { useOnClickOutside } from "../../hooks";
import ErrorLabel from "../ErrorLabel";

export type DateInputSize = "sm" | "md" | "lg";

export interface DateInputProps
  extends Omit<CalendarProps, "onChange" | "className"> {
  selectedDate?: Date;
  setSelectedDate: (date: Date) => void;
  label?: string;
  required?: boolean;
  className?: ClassValue;
  placeholder?: string;
  dateLocale?: Locale;
  size?: DateInputSize;
  calendarIcon?: ReactNode;
  showCalendarIcon?: boolean;
  errorMessage?: string;
  matchInputWidth?: boolean;
  calendarClassName?: ClassValue;
}

const DateInput = ({
  selectedDate,
  setSelectedDate,
  label,
  required,
  className,
  placeholder,
  dateLocale = enUS,
  size = "md",
  calendarIcon = <CalendarIcon size="16" />,
  showCalendarIcon = true,
  errorMessage,
  matchInputWidth = true,
  calendarClassName,
  ...props
}: DateInputProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleCalendar = () => setIsCalendarOpen((prev) => !prev);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  useOnClickOutside(ref, () => {
    if (isCalendarOpen) {
      setIsCalendarOpen(false);
    }
  });

  return (
    <div className="ui:relative ui:w-full" ref={ref}>
      <button
        className={clsx(
          "ui:flex ui:flex-col ui:bg-transparent ui:w-full",
          className
        )}
        onClick={toggleCalendar}
        type="button"
      >
        {label ? (
          <span className="ui:text-sm ui:label ui:w-fit">
            {label}
            {required ? <span className="ui:text-error ui:ml-1">*</span> : null}
          </span>
        ) : null}
        <span
          className={clsx(
            "ui:text-sm ui:w-full ui:flex ui:justify-between ui:items-center ui:safari-only:max-lg:text-base",
            "ui:border ui:border-opacity-20 ui:border-base-content ui:rounded-field ui:bg-base-100 ui:capitalize",
            {
              "ui:h-10 ui:px-3": size === "sm",
              "ui:h-12 ui:px-4": size === "md",
              "ui:h-14 ui:px-6 ui:text-lg": size === "lg",
            },
            {
              "ui:text-base-content/50": !selectedDate && placeholder,
            },
            size === "lg"
              ? "ui:safari-only:text-lg"
              : "ui:safari-only:max-lg:text-base"
          )}
        >
          {selectedDate
            ? format(selectedDate, "dd/MMMM/yyyy", { locale: dateLocale })
            : placeholder}
          {showCalendarIcon ? calendarIcon : null}
        </span>
        {errorMessage ? (
          <ErrorLabel text={errorMessage} className="ui:pt-1 ui:pl-1" />
        ) : null}
      </button>
      {isCalendarOpen ? (
        <Calendar
          className={clsx(
            "ui:absolute ui:w-80 ui:z-30",
            {
              "ui:max-w-full!": matchInputWidth,
            },
            calendarClassName
          )}
          value={selectedDate}
          // @ts-expect-error onChange type error
          onChange={handleDateChange}
          {...props}
        />
      ) : null}
    </div>
  );
};

export default DateInput;
