import ReactCalendar, { CalendarProps } from "react-calendar";

/**
 * Calendar component
 * @param props - Calendar props
 * This is a wrapper around the react-calendar component, using our library custom styles,
 * for more information on the props and usage of the component,
 * please refer to the [react-calendar documentation](https://www.npmjs.com/package/react-calendar)
 */
const Calendar = (props: CalendarProps) => <ReactCalendar {...props} />;

export default Calendar;
