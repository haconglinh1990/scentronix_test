import React from 'react';
import { Chip, Grid, Paper, Typography } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { useMediaQuery } from '@mui/system';

type ItemProps = {
  text: string;
  price?: string;
  description?: string;
  tag?: string;
};

const Item = ({ text, price, description, tag }: ItemProps) => {
  const isDesktop = useMediaQuery('(min-width:600px)');
  return (
    <Paper
      elevation={3}
      sx={{
        px: 3,
        py: 1,
        minHeight: isDesktop ? 7 * 8 : 6 * 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Grid container alignItems="center" alignSelf={'center'}>
        <Grid container item xs sx={{ gap: 1 }}>
          <AddShoppingCart />
          <Typography variant="body2">{text}</Typography>
        </Grid>
        {price && (
          <Grid item>
            <Typography variant="body2">{price}</Typography>
          </Grid>
        )}
      </Grid>
      {description && (
        <Typography variant="body2" sx={{ mt: 1 }}>
          {description}
        </Typography>
      )}
      {tag && (
        <Chip
          label={tag}
          sx={{
            mt: 2,
            borderRadius: 1,
            maxWidth: 'fit-content',
          }}
        />
      )}
    </Paper>
  );
};

export default Item;
