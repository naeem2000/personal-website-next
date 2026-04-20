import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Nav from './Nav';

const meta = {
  component: Nav,
} satisfies Meta<typeof Nav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};