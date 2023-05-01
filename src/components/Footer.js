import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
import my from '../assets/images/my.png'
const Footer = () => (
  <Box mt="80px" bgcolor="#dffaf7">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={my} alt="logo" style={{ width: '200px', height: '150px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Be stronger than your excuses</Typography>
  </Box>
);

export default Footer;



