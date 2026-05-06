import { ComponentMeta, ComponentStory } from "@storybook/react";
import ShapeImage from './index'
import { title } from "process";
import { table } from "console";

export default {
  title: 'Atoms/ShapeImage',
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      control: [ type: 'radio'],
      defaultValue: 'square',
      descriptiom: '画像の形',
      table: {
        type: { summary: 'circle | square' },
        defaultValue: { summary: 'circle' },
      },
    },
    src: {
      control: { type: 'number'},
      defaultValue: 320,
      description: '横幅',
      table :{
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number'},
      description: '縦幅',
      defaultValue: 320,
      table :{
        type: { summary: 'number' },
      },
    },
  },
} as ComponentMeta<typeof ShapeImage>

const Template: ConmponentStory<typeof ShapeImage> = (args) => {
  <ShapeImage {...args} />
}

//円形
export const Circle = Template.bind({})
Circle.args = { src: '/image/sample/1.jpg', shape: 'circle' }

//　四角形
export const square = Template.bind({})
Square.args = { src: '/image/sample/1.jpg', shape: 'square' }