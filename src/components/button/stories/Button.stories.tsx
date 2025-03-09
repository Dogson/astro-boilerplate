import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Button, { type ButtonProps } from "../Button.component.tsx";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Click Me",
};
