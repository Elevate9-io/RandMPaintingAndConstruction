import { Box, Typography, Button, Grid } from '@mui/material';

import FormField from 'components/FormField';


export default function Form() {
  return (
    <Box sx={{
      position: 'relative',
      width: '100vw',
      minWidth: 0,
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
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
      <Box sx={{ pt: 20, ml: '20%', mr: '20%', position: 'relative', zIndex: 2 }}>
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              mt: 19,
              mb: 4,
              whiteSpace: 'pre-line'
            }}
          >
            {`Contact us to \n`}
            {`build your future`}
          </Typography>
        </Box>

        <Box sx={{ width: '100%', pt: 7 }}>
          <Grid container spacing={2} alignItems='stretch'>
            <Grid item size={{ xs:12, md: 4 }}>
              <FormField label="Full Name" />
            </Grid>
            <Grid item size={{ xs:12, md: 4 }}>
              <FormField label="Email Address" />
            </Grid>
            <Grid item size={{ xs:12, md: 4 }}>
              <FormField label="Phone Number" />
            </Grid>
            <Grid item size={{ xs:12, md: 12 }}>
              <FormField label="Leave a comment" />
            </Grid>
          </Grid>
        </Box>

        <Box textAlign="center" mt={4}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#747133',
              color: 'white',
              width: 220,
              height: '75px',
              borderRadius: '25px',
              fontSize: '1.6rem'
            }}
          >
            SEND
          </Button>
        </Box>
      </Box>
    </Box>
  );
}