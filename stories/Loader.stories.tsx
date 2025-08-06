import type { Meta, StoryObj } from '@storybook/react';

import Loader from './Loader';

const meta = {
	component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		isStorybook: true,
	},
};
