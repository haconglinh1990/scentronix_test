import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BuyButtonWithPopup from './BuyButtonWithPopup';
import Content from '@/components/content/Content';

export default {
  title: 'Components/BuyButtonWithPopup',
  component: BuyButtonWithPopup,
} as ComponentMeta<typeof BuyButtonWithPopup>;

const items = [
  {
    text: '50ml',
    price: '$80',
  },
  { text: '30ml', price: '$60' },
  { text: '5ml', price: '$10', tag: ' 3 x 5ml for $40' },
];

const Template: ComponentStory<typeof BuyButtonWithPopup> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '80vh',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    }}
  >
    <BuyButtonWithPopup
      position={'flex-start'}
      content={<Content items={items} />}
    />
    <BuyButtonWithPopup
      position={'flex-end'}
      content={<Content items={items} />}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
