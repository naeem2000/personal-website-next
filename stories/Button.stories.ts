import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
	title: 'Buttons',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onClick: fn(), onChange: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
	args: {
		variant: 'button',
		label: 'Button',
		onClick: fn(),
	},
};

export const NavButton: Story = {
	args: {
		variant: 'nav-button',
		label: 'Button',
		onClick: fn(),
	},
};

export const LinkButton: Story = {
	args: {
		variant: 'link',
		label: 'Button',
		onClick: fn(),
	},
};

export const IconButton: Story = {
	args: {
		variant: 'icon',
		label: 'Button',
		onClick: fn(),
	},
};

export const ToggleButton: Story = {
	args: {
		variant: 'toggle',
		label: 'Button',
		onChange: fn(),
	},
};
