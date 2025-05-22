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
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const buttonClass: string =
	'button text-xl mt-5 desktop:mt-10 bg-blue text-black transition-all duration-[0.5s] ease-[ease] px-[30px] py-3';

export const PrimaryButton: Story = {
	args: {
		variant: 'button',
		label: 'Button',
		className: buttonClass,
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
		className: buttonClass,
	},
};

export const IconButton: Story = {
	args: {
		variant: 'icon',
		label: 'Button',
		className: buttonClass,
	},
};

export const ToggleButton: Story = {
	args: {
		variant: 'toggle',
		label: 'Button',
		className: buttonClass,
	},
};
