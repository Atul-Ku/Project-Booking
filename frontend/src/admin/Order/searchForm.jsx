import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

const SearchForm = ({ onSearch }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <TextField label="Mobile No." variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField label="Booking Date" type="date" variant="outlined" fullWidth InputLabelProps={{ shrink: true }} />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField label="Journey Date" type="date" variant="outlined" fullWidth InputLabelProps={{ shrink: true }} />
      </Grid>
      <Grid item xs={12} md={3}>
        <Button variant="contained" color="primary" onClick={onSearch} fullWidth>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchForm;
