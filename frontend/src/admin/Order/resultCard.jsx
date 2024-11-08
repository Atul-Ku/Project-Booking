import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';

const ResultCard = ({ result }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div">
          {result.customerName}
        </Typography>
        <Typography color="textSecondary">
          Train: {result.trainName} | Class: {result.class}
        </Typography>
        <Typography color="textSecondary">
          From: {result.from} To: {result.to}
        </Typography>
        <Typography variant="body2">
          Order Date: {result.orderDate} | Booking Date: {result.bookingDate}
        </Typography>
        <Typography variant="body2">
          Total Fare: ₹{result.totalFare} | Advance Amount: ₹{result.advanceAmt}
        </Typography>
        <Typography variant="body2" color="green">
          Next Paid Amount: ₹{result.nextPaidAmt}
        </Typography>
        <Typography variant="body2" color="red">
          Pending Amount: ₹{result.pendingAmt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Read more</Button>
        <Button size="small" color="secondary">Change Status</Button>
      </CardActions>
    </Card>
  );
};

export default ResultCard;
