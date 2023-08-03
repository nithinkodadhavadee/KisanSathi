import { Home } from ".";

export default {
  title: "Components/Home",
  component: Home,
  argTypes: {
    property1: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    text: "Home",
  },
};
