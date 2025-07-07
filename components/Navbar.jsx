
import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import Link from 'next/link';


const pages = ['Home', 'About', 'Form', 'Contact'];


const Navbar = () => (
  <AppBar position="static" color="transparent" elevation={0}>
    <Toolbar sx={{ justifyContent: 'space-between', marginLeft: '20%', marginRight: '15%' }}>
      <Box component="img" src="/images/logo.png" alt="R&M Logo" sx={{ height: 64, margin: 2 }} />
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