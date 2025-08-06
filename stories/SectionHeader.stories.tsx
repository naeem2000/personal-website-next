import type { Meta, StoryObj } from '@storybook/react';

import SectionHeader from './SectionHeader';

const meta = {
	component: SectionHeader,
} satisfies Meta<typeof SectionHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		heading: 'Section Header',
		aos: 'fade-up',
	},
};
