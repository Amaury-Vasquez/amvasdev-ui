import type { Meta, StoryObj } from "@storybook/react";
import { CalendarProps } from "react-calendar";
import { useToggle } from "usehooks-ts";
import Calendar from ".";
import Button from "../Button";

const meta: Meta = {
  title: "Components/Calendar",
  component: Calendar,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Calendar>;

const CalendarStory = (props: CalendarProps) => {
  // @ts-expect-error value type is not provided by the Calendar component
  const onChange = (value) => console.log(new Date(value));

  const [isCalendarOpen, toggleCalendarOpen] = useToggle();

  return (
    <div className="relative w-fit">
      <Button onClick={() => toggleCalendarOpen()} variant="primary">
        Open calendar
      </Button>
      {isCalendarOpen && (
        <Calendar {...props} className="absolute z-30" onChange={onChange} />
      )}
    </div>
  );
};

export const Default: Story = {
  render: (args) => <CalendarStory {...args} />,
};
