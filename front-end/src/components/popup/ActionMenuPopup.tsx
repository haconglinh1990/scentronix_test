import React from 'react';
import { Box, IconButton, Modal } from '@mui/material';
import { Close } from '@mui/icons-material';

type ActionMenuPopupProps = {
  content: React.ReactNode;
  open: boolean;
  onClose: () => void;
  position: 'flex-start' | 'center' | 'flex-end';
};

const ActionMenuPopup = ({
  content,
  open,
  onClose,
  position = 'center',
}: ActionMenuPopupProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      fullWidth
      sx={{
        p: 2,
        m: 2,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignSelf: position,
          width: '100%',
        }}
      >
        {content}
        <IconButton
          sx={{
            width: 40,
            height: 40,
            alignSelf: position,
            backgroundColor: 'white',
            ml: 2,
            boxShadow: 2,
          }}
          onClick={onClose}
        >
          <Close />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default ActionMenuPopup;
