
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';

const Navbar = () => (
  <AppBar position="static" color="transparent" elevation={0}>
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#747133' }}>
        R&M
      </Typography>
      <Box>
        {['Home', 'About', 'Form', 'Contact'].map((page) => (
          <Link key={page} href={`/${page.toLowerCase()}`} passHref>
            <Button sx={{ color: '#747133', fontWeight: 'bold', textTransform: 'none' }}>{page}</Button>
          </Link>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;