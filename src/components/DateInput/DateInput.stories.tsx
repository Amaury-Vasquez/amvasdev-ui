import type { Meta, StoryObj } from "@storybook/react";
import DateInput, { DateInputProps } from ".";
import { useState } from "react";

const meta: Meta = {
  title: "Components/DateInput",
  component: DateInput,
  args: {
    label: "Date",
    placeholder: "DD/MM/YYYY",
    required: false,
  },
};

export default meta;

type Story = StoryObj<typeof DateInput>;

const DateInputStory = (
  props: Omit<DateInputProps, "selectedDate" | "handleDateChange">
) => {
  const [selectedDate, setSelectedDate] = useState<Date>();

  return (
    <div className="ui-w-full ui-max-w-80">
      <DateInput
        {...props}
        selectedDate={selectedDate}
        handleDateChange={setSelectedDate}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <DateInputStory {...args} />,
};
