import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './index';
import theme from '../../styles/theme/global-theme';

export default {
  title: 'Componente Botón',
  component: Button,
  argTypes: {
    variant: {
      options: ['xs', 's', 'm', 'l'],
      control: { type: 'radio' }
    },
  }
} as ComponentMeta<typeof Button>;

const buttonComponent: ComponentStory<typeof Button> = (args) => (
  <Button
    {...{...args, theme}}
  >
    {args.children}
  </Button>
);

export const buttonMain = buttonComponent.bind({});
buttonMain.args = {
  variant: 'xs',
  type: 'button',
  loading: false,
  disabled: false,
  withArrow: false,
  secondary: false,
  children: 'Action',
};

export const buttonMainWithArrow = buttonComponent.bind({});
buttonMainWithArrow.args = {
  variant: 'xs',
  type: 'button',
  loading: false,
  disabled: false,
  withArrow: true,
  secondary: false,
  children: 'Action',
};

export const buttonSecondary = buttonComponent.bind({});
buttonSecondary.args = {
  variant: 'xs',
  type: 'button',
  loading: false,
  disabled: false,
  withArrow: false,
  secondary: true,
  children: 'Action',
};

export const buttonSecondaryWithArrow = buttonComponent.bind({});
buttonSecondaryWithArrow.args = {
  variant: 'xs',
  type: 'button',
  loading: false,
  disabled: false,
  withArrow: true,
  secondary: true,
  children: 'Action',
};
