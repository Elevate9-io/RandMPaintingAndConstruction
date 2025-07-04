
import { Box, Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{
      backgroundImage: 'url("/images/background.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}>
      <Container sx={{ color: 'white', maxWidth: '600px', pt: 20, marginLeft: 40 }}>
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