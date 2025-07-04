
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';


const pages = ['Home', 'About', 'Form', 'Contact'];


const Navbar = () => (
  <AppBar position="static" color="transparent" elevation={0}>
    <Toolbar sx={{ justifyContent: 'space-between', marginLeft: 48, marginRight: 38 }}>
      <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#747133' }}>
        R&M
      </Typography>
      <Box sx={{ justifyContent: 'space-between', display: 'flex', width: '35%' }}>
        {pages.map((page) => (
          <Link key={page} href={`/${page.toLowerCase()}`} passHref>
            <Button sx={{ fontSize: 19, color: '#747133', fontWeight: 'bold', textTransform: 'none' }}>{page}</Button>
          </Link>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;