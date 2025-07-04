
import { Box, Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{
      backgroundImage: 'url("/R&M-Landingpage.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}>
      <Container sx={{ color: 'white', maxWidth: '600px', pt: 20 }}>
        <Typography variant="h3" fontWeight="bold">
          Painting & remodeling with craftsmanship you can trust
        </Typography>
        <Typography variant="body1" mt={3}>
          We specialize in partnering with homeowners who appreciate exceptional craftsmanship and understand the value of a well-executed finish. If you’re ready to invest in lasting beauty and quality, we’d love to bring your vision to life.
        </Typography>
      </Container>
    </Box>
  );
}