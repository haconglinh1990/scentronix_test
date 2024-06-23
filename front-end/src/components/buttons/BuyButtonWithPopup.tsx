import React, { useState } from 'react';
import { Button } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import ActionMenuPopup from '@/components/popup/ActionMenuPopup';

type BuyButtonWithPopupProps = {
  position: 'flex-start' | 'flex-end' | 'center';
  content: React.ReactNode;
};

const BuyButtonWithPopup: React.FC = ({
  position,
  content,
}: BuyButtonWithPopupProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        startIcon={<AddShoppingCart />}
        variant="contained"
        style={{ backgroundColor: 'black' }}
        onClick={handleOpen}
      >
        Buy
      </Button>
      <ActionMenuPopup
        content={content}
        open={open}
        onClose={handleClose}
        position={position}
      />
    </>
  );
};

export default BuyButtonWithPopup;
