import Input, { InputProps } from "../../../../components/atoms/Input";
import { Meta } from "@storybook/react";

export default {
	title: "Components/Atoms/Input",
	component: Input,
} as Meta;

const Template = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: "Nama Lengkap",
};
