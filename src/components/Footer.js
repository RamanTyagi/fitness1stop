import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="10px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="20px" pt="10px">
      <img src={Logo} alt="logo" style={{ width: '50px', height: '41px' }} />
      <Typography variant="h5" sx={{ fontSize: { lg: '15px', xs: '10px' } }} mt="5px" textAlign="center" pb="30px">Kasrat Adda © 2022</Typography>
    </Stack>
  </Box>
);

export default Footer;
