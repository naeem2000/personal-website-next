import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';
import { UseShowNav } from '@/app/components/utils/functions';

const meta = {
	title: 'Buttons',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
	args: {
		variant: 'button',
		label: 'Button',
	},
};

export const NavButton: Story = {
	args: {
		variant: 'nav-button',
		label: 'Button',
		color: 'var(--blue)',
	},
};

export const LinkButton: Story = {
	args: {
		variant: 'link',
		label: 'Button',
	},
};

export const IconButton: Story = {
	args: {
		variant: 'icon',
		label: 'Button',
	},
};

export const ToggleButton: Story = {
	args: {
		variant: 'toggle',
		label: 'Button',
	},
};
