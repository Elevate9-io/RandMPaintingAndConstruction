
import { Box, Typography, Container, TextField, Button, Grid } from '@mui/material';

export default function Form() {
  return (
    <Box sx={{
      backgroundImage: 'url("/R&M-Landingpage2.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}>
      <Container sx={{ pt: 20, maxWidth: '800px' }}>
        <Typography variant="h3" fontWeight="bold" color="white" textAlign="center" mb={4}>
          Contact us to build our future
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Full Name" variant="outlined" InputProps={{ style: { backgroundColor: 'white' } }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Email Address" variant="outlined" InputProps={{ style: { backgroundColor: 'white' } }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Phone Number" variant="outlined" InputProps={{ style: { backgroundColor: 'white' } }} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Leave a comment" variant="outlined" multiline rows={4} InputProps={{ style: { backgroundColor: 'white' } }} />
          </Grid>
        </Grid>
        <Box textAlign="center" mt={4}>
          <Button variant="contained" size="large" sx={{ backgroundColor: '#747133', color: 'white' }}>
            SEND
          </Button>
        </Box>
      </Container>
    </Box>
  );
}