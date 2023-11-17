import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Body, Display } from "@/components/ui";

import ErrorWrapper from ".";

const meta = {
  title: "Components/ErrorWrapper",
  component: ErrorWrapper,
  argTypes: {
    children: {
      description: "ErrorWrapper items",
      options: ["Single", "Multiple", "None"],
      control: { type: "radio" },
      mapping: {
        Single: <Display>Display text</Display>,
        Multiple: (
          <>
            <Display>Display text</Display>
            <Body>Body text</Body>
          </>
        ),
        None: null,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    children: "Single",
  },
};

export const Multiple: Story = {
  args: {
    children: "Multiple",
  },
};

export const None: Story = {
  args: {
    children: "None",
  },
};
