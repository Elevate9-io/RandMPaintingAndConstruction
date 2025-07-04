
import { Box, Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{
      position: 'relative',
      backgroundImage: 'url("/images/background.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      '::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: 'rgba(0,0,0,0.4)',
        zIndex: 1,
      },
    }}>
      <Container sx={{ color: 'white', maxWidth: '600px', pt: 20, marginLeft: 40, position: 'relative', zIndex: 2 }}>
        <Typography variant="h2" fontWeight="bold" sx={{ marginTop: 20, whiteSpace: 'pre-line' }}>
          {'Painting & remodeling \n with craftsmanship \n you can trust'}
        </Typography>
        <Typography variant="h5" mt={3} sx={{ whiteSpace: 'pre-line' }}>
          {`We specialize in partnering with homeowners who \n`}
          {`appreciate exceptional craftsmanship and understand \n`}
          {`the value of a well-executed finish. If you're ready to \n`}
          {`invest in lasting beauty and quality, we'd love to bring \n`}
          {`your vision to life.`}
        </Typography>
      </Container>
    </Box>
  );
}