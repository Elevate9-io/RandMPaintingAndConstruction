
import { Box, Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ position: 'relative', width: '100%', minWidth: 0, minHeight: '100vh', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'fixed',
          top: { xs: '90px', sm: '90px' }, // offset for navbar height
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url("/images/background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          '::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.4)',
            zIndex: 1,
          },
        }}
      />
      <Container
        sx={{
          color: 'white',
          maxWidth: 600,
          pt: 6,
          mx: { xs: 2, sm: 'auto' },
          position: 'relative',
          zIndex: 2,
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Box sx={{ width: '50%', pt: 10, pb: 10 }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              marginTop: 20,
              whiteSpace: 'pre-line',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              lineHeight: 1.1,
            }}
          >
            {'Painting & Remodeling with craftsmanship you can trust'}
          </Typography>
          <Typography
            variant="h5"
            mt={3}
            sx={{
              whiteSpace: 'pre-line',
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              lineHeight: 1.3,
            }}
          >
            {`We specialize in partnering with homeowners who `}
            {`appreciate exceptional craftsmanship and understand `}
            {`the value of a well-executed finish. If you're ready to `}
            {`invest in lasting beauty and quality, we'd love to bring `}
            {`your vision to life.`}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}