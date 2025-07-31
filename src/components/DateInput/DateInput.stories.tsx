import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import DateInput from "./index";

const meta: Meta<typeof DateInput> = {
  title: "Components/DateInput",
  component: DateInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    showCalendarIcon: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
    matchInputWidth: {
      control: { type: "boolean" },
    },
    showOutsideDays: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const DateInputWrapper = (args: any) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    args.selectedDate
  );

  return (
    <DateInput
      {...args}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  );
};

export const Default: Story = {
  render: DateInputWrapper,
  args: {
    placeholder: "Select a date",
    label: "Date",
  },
};

export const WithLabel: Story = {
  render: DateInputWrapper,
  args: {
    placeholder: "Select a date",
    label: "Birth Date",
  },
};

export const Required: Story = {
  render: DateInputWrapper,
  args: {
    placeholder: "Select a date",
    label: "Date",
    required: true,
  },
};

export const WithError: Story = {
  render: DateInputWrapper,
  args: {
    placeholder: "Select a date",
    label: "Date",
    errorMessage: "This field is required",
  },
};

export const Small: Story = {
  render: DateInputWrapper,
  args: {
    placeholder: "Select a date",
    label: "Date",
    size: "sm",
  },
};

export const Large: Story = {
  render: DateInputWrapper,
  args: {
    placeholder: "Select a date",
    label: "Date",
    size: "lg",
  },
};

export const WithoutIcon: Story = {
  render: DateInputWrapper,
  args: {
    placeholder: "Select a date",
    label: "Date",
    showCalendarIcon: false,
  },
};

export const WithMinMaxDates: Story = {
  render: DateInputWrapper,
  args: {
    placeholder: "Select a date",
    label: "Date",
    fromDate: new Date(2024, 0, 1), // January 1, 2024
    toDate: new Date(2024, 11, 31), // December 31, 2024
  },
};

export const WithDisabledDates: Story = {
  render: DateInputWrapper,
  args: {
    placeholder: "Select a date",
    label: "Date",
    disabled: [
      new Date(2024, 11, 25), // Christmas
      new Date(2024, 0, 1),   // New Year
    ],
  },
};