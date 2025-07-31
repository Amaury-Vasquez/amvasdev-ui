import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Calendar from "./index";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    showOutsideDays: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const CalendarWrapper = (args: any) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    args.selectedDate
  );

  return (
    <Calendar
      {...args}
      selectedDate={selectedDate}
      onDateChange={setSelectedDate}
    />
  );
};

export const Default: Story = {
  render: CalendarWrapper,
  args: {},
};

export const WithSelectedDate: Story = {
  render: CalendarWrapper,
  args: {
    selectedDate: new Date(),
  },
};

export const WithDisabledDates: Story = {
  render: CalendarWrapper,
  args: {
    disabled: [
      new Date(2024, 11, 25), // Christmas
      new Date(2024, 0, 1),   // New Year
      { from: new Date(2024, 6, 1), to: new Date(2024, 6, 7) }, // Week range
    ],
  },
};

export const WithDateRange: Story = {
  render: CalendarWrapper,
  args: {
    fromDate: new Date(2024, 0, 1),
    toDate: new Date(2024, 11, 31),
  },
};

export const WithoutOutsideDays: Story = {
  render: CalendarWrapper,
  args: {
    showOutsideDays: false,
  },
};

export const CustomStyling: Story = {
  render: CalendarWrapper,
  args: {
    className: "ui:w-96 ui:shadow-xl ui:border-2 ui:border-primary",
  },
};