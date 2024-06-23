import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Item from '@/components/item/Item';

export default {
  title: 'Components/Item/Item',
  component: Item,
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    <Item text={'50ml'} price={'$10'} />
    <Item
      text={'50ml'}
      price={'$10'}
      description={'An optional description.'}
    />
    <Item text={'50ml'} price={'$10'} tag={'Optional tag'} />
    <Item text={'50ml'} price={'$10'} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
