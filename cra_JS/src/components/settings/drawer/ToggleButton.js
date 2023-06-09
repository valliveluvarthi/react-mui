import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Tooltip, Box, Button } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';

import SvgColor from '../../svg-color';
//
import BadgeDot from './BadgeDot';

// ----------------------------------------------------------------------

ToggleButton.propTypes = {
  open: PropTypes.bool,
  onToggle: PropTypes.func,
  notDefault: PropTypes.bool,
};

export default function ToggleButton({ notDefault, open, onToggle }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 0.5,
        right: 24,
        bottom: 24,
        zIndex: 999,
        position: 'fixed',
        borderRadius: '50%',
        boxShadow: `-12px 12px 32px -4px ${alpha(
          theme.palette.mode === 'light' ? theme.palette.grey[600] : theme.palette.common.black,
          0.36
        )}`,
        ...bgBlur({ color: theme.palette.background.default }),
      }}
    >
      {notDefault && !open && (
        <BadgeDot
          sx={{
            top: 8,
            right: 10,
          }}
        />
      )}

      <Tooltip title="Settings">
        <Button color="primary" onClick={onToggle}>
          <SvgColor src="/assets/icons/setting/ic_setting.svg" />
        </Button>
      </Tooltip>
    </Box>
  );
}
