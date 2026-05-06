import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Button from './index'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'radio' },
      description: 'ボタンバリアント',
    },
    children: {
      control: { type: 'text' },
      description: 'ボタンテキスト',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled フラグ',
    },
    onClick: {
      description: 'onClick イベントハンドラ',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
}
