import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input } from "components";

export default {
  title: "demo_app/Input",
  component: Input,
};

export const SampleInput: Story<any> = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder15",
  variant: "OutlineIndigo50",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
