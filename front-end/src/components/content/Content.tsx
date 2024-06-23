import React from 'react';
import { Box } from '@mui/system';
import Item from '@/components/item/Item';
import { ItemType } from '@/types/Types';

type ContentProps = {
  items: ItemType[];
};

const Content = ({ items }: ContentProps) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 1 }}>
    {items.map((item, index) => (
      <Item key={index} {...item} />
    ))}
  </Box>
);

export default Content;
