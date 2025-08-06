import type { Meta, StoryObj } from '@storybook/react';
import NumberLine from './NumberLine';

const meta = {
	component: NumberLine,
} satisfies Meta<typeof NumberLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
