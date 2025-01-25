import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Paper, Grid, Button, Table, TableBody, TableCell, TableHead, TableRow, Avatar, Divider, TextField, IconButton, Collapse, MenuItem, TableContainer, Step, StepLabel, Stepper, Container, Select, InputLabel, FormControl } from '@mui/material';
import { Home, Person, ShoppingCart, Payment, Info, Search, AssignmentTurnedIn, ExpandLess, ExpandMore, Add, Create, Flight, Cancel, ViewList, AddShoppingCart, Report, PendingActions, Today, ChevronLeft, ChevronRight } from '@mui/icons-material'; // Added AssignmentTurnedIn
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import AdminIcon from '@mui/icons-material/AccountCircle'; // for the admin icon
// import TrainIcon from '@mui/icons-material/Train';
// import './neworder.css';

const NewOrder = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [Quota, setQuota] = useState('');
    const [Class, setClass] = useState('');
    const [paymentType, setPaymentType] = useState('');
    const navigate = useNavigate();
    const [open, setOpen] = useState(true); // State to manage drawer open/close

    const toggleDrawer = () => {
        setOpen(!open);
    };

    // Toggle function for handling submenu
    // State to manage open/close of submenu
    const [openSections, setOpenSections] = useState({
        user: false,
        tktBooking: false,
        payment: false,
        status: false,
    });


    const handleToggle = (section) => {
        setOpenSections(prevState => ({ ...prevState, [section]: !prevState[section] }));
    };

    const steps = ['Customer Details', 'Trip Details', 'Passenger Info', 'Payment Info'];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const [passengerCount, setPassengerCount] = useState(1);
    const [children, setChildren] = useState([{ name: '', age: '', gender: '' }]);

    const handleAddPassenger = () => {
        setPassengerCount(passengerCount + 1);
    };

    const handleAddChild = () => {
        setChildren([...children, { name: '', age: '', gender: '' }]);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            {/* Sidebar */}
            <Drawer
                variant="permanent"
                sx={{
                    width: 250,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 260, boxSizing: 'border-box', backgroundColor: '#000' }, // Drawer background set to black
                }}
            >
                {/* Sidebar content */}
                <Box sx={{ textAlign: 'center', p: 1, mt: -1, mb: 2, backgroundColor: '#00f' }}>
                    <Typography variant="h6" sx={{ color: '#fff', mt: 2 }}>
                        MeMax.Me
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Avatar sx={{ width: 80, height: 80, margin: '0 auto' }}>
                        <AdminIcon sx={{ fontSize: 40 }} />
                    </Avatar>
                    <Typography variant="h6" sx={{ color: '#fff', mt: 1 }}>
                        admin
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'green' }}>
                        Online
                    </Typography>
                </Box>
                {/* Search Bar */}
                <Box sx={{ textAlign: 'center', p: 2 }}>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Search..."
                        InputProps={{
                            sx: { backgroundColor: '#fff', borderRadius: '20px' },
                            endAdornment: (
                                <IconButton sx={{ p: 0 }}>
                                    <Search />
                                </IconButton>
                            ),
                        }}
                        sx={{ width: '100%', color: '#fff', mb: 2 }}
                    />
                </Box>
                <Divider sx={{ backgroundColor: '#fff' }} />

                {/* Navigation items */}
                <List>
                    {/* Dashboard Item */}
                    <ListItem button onClick={() => navigate('/admin/dashboard')}>
                        <ListItemIcon sx={{ color: '#fff' }}>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" sx={{ color: '#fff' }} />
                    </ListItem>

                    {/* User Section with Submenu */}
                    <ListItem button onClick={() => handleToggle('user')}>
                        <ListItemIcon sx={{ color: '#fff' }}>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="User" sx={{ color: '#fff' }} />
                        {openSections.user ? <ExpandLess sx={{ color: '#fff' }} /> : <ExpandMore sx={{ color: '#fff' }} />}
                    </ListItem>
                    <Collapse in={openSections.user} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/admin/dashboard/add-user')}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <Add />
                                </ListItemIcon>
                                <ListItemText primary="Add User" sx={{ color: '#fff' }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/admin/dashboard/create-user')}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <Create />
                                </ListItemIcon>
                                <ListItemText primary="Create User" sx={{ color: '#fff' }} />
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* Order Section with Submenu */}
                    <ListItem button onClick={() => handleToggle('order')}>
                        <ListItemIcon sx={{ color: '#fff' }}>
                            <ShoppingCart />
                        </ListItemIcon>
                        <ListItemText primary="Order" sx={{ color: '#fff' }} />
                        {openSections.order ? <ExpandLess sx={{ color: '#fff' }} /> : <ExpandMore sx={{ color: '#fff' }} />}
                    </ListItem>
                    <Collapse in={openSections.order} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/admin/dashboard/new-order')}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <AddShoppingCart />
                                </ListItemIcon>
                                <ListItemText primary="New Order" sx={{ color: '#fff' }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/admin/dashboard/view-orders')}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <ViewList />
                                </ListItemIcon>
                                <ListItemText primary="View Orders" sx={{ color: '#fff' }} />
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* TKT Booking Section with Submenu */}
                    <ListItem button onClick={() => handleToggle('tktBooking')}>
                        <ListItemIcon sx={{ color: '#fff' }}>
                            <Info />
                        </ListItemIcon>
                        <ListItemText primary="TKT Booking" sx={{ color: '#fff' }} />
                        {openSections.tktBooking ? <ExpandLess sx={{ color: '#fff' }} /> : <ExpandMore sx={{ color: '#fff' }} />}
                    </ListItem>
                    <Collapse in={openSections.tktBooking} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/admin/dashboard/today-booking')}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <RadioButtonUncheckedIcon sx={{ fontSize: '1rem' }} />
                                </ListItemIcon>
                                <ListItemText primary="Today Booking" sx={{ color: '#fff' }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/admin/dashboard/yesterday-booking')}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <RadioButtonUncheckedIcon sx={{ fontSize: '1rem' }} />
                                </ListItemIcon>
                                <ListItemText primary="Yesterday Booking" sx={{ color: '#fff' }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/admin/dashboard/tomorrow-booking')}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <RadioButtonUncheckedIcon sx={{ fontSize: '1rem' }} />
                                </ListItemIcon>
                                <ListItemText primary="Tomorrow Booking" sx={{ color: '#fff' }} />
                            </ListItem>

                        </List>
                    </Collapse>

                    {/* Payment Section with Submenu */}
                    <ListItem button onClick={() => handleToggle('payment')}>
                        <ListItemIcon sx={{ color: '#fff' }}>
                            <Payment />
                        </ListItemIcon>
                        <ListItemText primary="Payment" sx={{ color: '#fff' }} />
                        {openSections.payment ? <ExpandLess sx={{ color: '#fff' }} /> : <ExpandMore sx={{ color: '#fff' }} />}
                    </ListItem>
                    <Collapse in={openSections.payment} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/admin/dashboard/payment-report')}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <Report />
                                </ListItemIcon>
                                <ListItemText primary="Payment Report" sx={{ color: '#fff' }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/admin/dashboard/pending-payment')}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <PendingActions />
                                </ListItemIcon>
                                <ListItemText primary="Pending Payment" sx={{ color: '#fff' }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/admin/dashboard/today-payment')}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <Today />
                                </ListItemIcon>
                                <ListItemText primary="Today's Payment" sx={{ color: '#fff' }} />
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* Status Section with Submenu */}
                    <ListItem button onClick={() => handleToggle('status')}>
                        <ListItemIcon sx={{ color: '#fff' }}>
                            <AssignmentTurnedIn />
                        </ListItemIcon>
                        <ListItemText primary="Status" sx={{ color: '#fff' }} />
                        {openSections.status ? <ExpandLess sx={{ color: '#fff' }} /> : <ExpandMore sx={{ color: '#fff' }} />}
                    </ListItem>
                    <Collapse in={openSections.status} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {/* Dummy Status Submenu */}
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/admin/dashboard/new-booking')}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <RadioButtonUncheckedIcon sx={{ fontSize: '1rem' }} />
                                </ListItemIcon>
                                <ListItemText primary="New Booking" sx={{ color: '#fff' }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/admin/dashboard/ticket-booked')}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <RadioButtonUncheckedIcon sx={{ fontSize: '1rem' }} />
                                </ListItemIcon>
                                <ListItemText primary="Ticket Booked" sx={{ color: '#fff' }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/admin/dashboard/not-booked')}>
                                <ListItemIcon sx={{ color: '#fff' }} >
                                    <RadioButtonUncheckedIcon sx={{ fontSize: '1rem' }} />
                                </ListItemIcon>
                                <ListItemText primary="Not Booked" sx={{ color: '#fff' }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/admin/dashboard/cancelled')}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <RadioButtonUncheckedIcon sx={{ fontSize: '1rem' }} />
                                </ListItemIcon>
                                <ListItemText primary="Cancelled" sx={{ color: '#fff' }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/admin/dashboard/refund-amount')}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <RadioButtonUncheckedIcon sx={{ fontSize: '1rem' }} />
                                </ListItemIcon>
                                <ListItemText primary="Refund Amount" sx={{ color: '#fff' }} />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/admin/dashboard/pending-booking')}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <RadioButtonUncheckedIcon sx={{ fontSize: '1rem' }} />
                                </ListItemIcon>
                                <ListItemText primary="Pending Booking" sx={{ color: '#fff' }} />
                            </ListItem>
                        </List>
                    </Collapse>

                </List>
            </Drawer>

            {/* Main Content */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <AppBar position="static" sx={{ backgroundColor: '#007bff' }}>
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                            MeMax.Me
                        </Typography>
                        <Typography variant="body1" sx={{ marginRight: 2 }}>
                            Fri, 10/18/2024
                        </Typography>
                        <Typography variant="body2">Admin</Typography>
                    </Toolbar>
                </AppBar>

                <hr></hr>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        Add Passenger
                    </Typography>
                </Box>
                <Container maxWidth="md" sx={{ mt: 4, mb: 4, height: '600px', shadow: 3, padding: '20px', borderRadius: '10px' }}>
                    <Box sx={{ mt: 4, textAlign: 'center' }}>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        {/* Train Animation Track */}
                        {/* <Box className="track">
                            {steps.map((label, index) => (
                                <div key={label} className="station">
                                    <Typography
                                        variant="body1"
                                        className={`station-label ${activeStep === index ? 'active' : ''}`}
                                    >
                                        {label}
                                    </Typography>
                                    {index < steps.length - 1 && <div className="track-line" />} 
                                </div>
                            ))}
                            <TrainIcon
                                className="train-icon"
                                style={{ transform: `translateX(${activeStep * 25}%)` }}
                            />
                        </Box> */}

                        <Box sx={{ mt: 4 }}>
                            {activeStep === 0 && (
                                <Box component="form" sx={{ mt: 2 }}>
                                    <TextField
                                        required
                                        label="Customer Name"
                                        fullWidth
                                        margin="normal"
                                        onChange={(e) => setCustomerName(e.target.value)}
                                    />
                                    <TextField
                                        required
                                        label="Mobile No."
                                        fullWidth
                                        margin="normal"
                                        onChange={(e) => setMobileNo(e.target.value)}
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        sx={{ mt: 2 }}
                                    >
                                        Next
                                    </Button>
                                </Box>
                            )}

                            {/* Additional steps would go here (e.g., Trip Details, Passenger Info, Payment Info) */}
                            {activeStep === 1 && (
                                <Box component="form" sx={{ mt: 2, mb: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField
                                                required
                                                label="From"
                                                fullWidth
                                                margin="normal"

                                            />
                                            <TextField
                                                required
                                                label="Date"
                                                type="date"
                                                fullWidth
                                                margin="normal"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                            <TextField
                                                required
                                                label="Train Number"
                                                type='number'
                                                fullWidth
                                                margin="normal"
                                            />
                                            <FormControl fullWidth margin="normal">
                                                <InputLabel>Quota</InputLabel>
                                                <Select
                                                    value={Quota}
                                                    onChange={(e) => setQuota(e.target.value)}
                                                    label="Quota"
                                                >
                                                    <MenuItem value="Tatkal">Tatkal</MenuItem>
                                                    <MenuItem value="General">General</MenuItem>
                                                    <MenuItem value="Premium Tatkal">Premium Tatkal</MenuItem>
                                                    <MenuItem value="Ladies">Ladies</MenuItem>
                                                    <MenuItem value="Senior Citizen / Lower Berth">Senior Citizen/Lower Berth</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                required
                                                label="To"
                                                fullWidth
                                                margin="normal"
                                            />
                                            <TextField
                                                required
                                                label="Time"
                                                type="time"
                                                fullWidth
                                                margin="normal"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                            <FormControl fullWidth margin="normal">
                                                <InputLabel>Class</InputLabel>
                                                <Select
                                                    value={Class}
                                                    onChange={(e) => setClass(e.target.value)}
                                                    label="Class"
                                                >
                                                    <MenuItem value="Sleeper">Sleeper</MenuItem>
                                                    <MenuItem value="3AC">3AC</MenuItem>
                                                    <MenuItem value="2AC">2AC</MenuItem>
                                                    <MenuItem value="1AC">1AC</MenuItem>
                                                    <MenuItem value="Second Seating">Second Seating</MenuItem>
                                                    <MenuItem value="Chair Car">Chair Car</MenuItem>
                                                    <MenuItem value="First Class">First Class</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <TextField
                                                required
                                                label="Boarding Station(Optional)
"
                                                fullWidth
                                                margin="normal"
                                            />
                                        </Grid>
                                        <TextField
                                            required
                                            label="Remark"
                                            fullWidth
                                            margin="normal"
                                            sx={{ ml: 2 }}
                                        />
                                    </Grid>
                                </Box>
                            )}

                            {activeStep === 2 && (
                                <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 3, borderRadius: 2 }}>
                                    <Typography variant="h6" sx={{ color: 'green', mb: 2 }}>Enter Passenger Details</Typography>

                                    {[...Array(passengerCount)].map((_, i) => (
                                        <Box key={i} sx={{ mb: 2 }}>
                                            <TextField
                                                required
                                                label="Name"
                                                fullWidth
                                                variant="outlined"
                                                sx={{ mb: 2 }}
                                            />
                                            <TextField
                                                required
                                                label="Age"
                                                type="number"
                                                fullWidth
                                                variant="outlined"
                                                sx={{ mb: 2 }}
                                            />
                                            <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                                                <InputLabel>Gender</InputLabel>
                                                <Select label="Gender">
                                                    <MenuItem value="male">Male</MenuItem>
                                                    <MenuItem value="female">Female</MenuItem>
                                                    <MenuItem value="other">Other</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                                                <InputLabel>Prefer Berth</InputLabel>
                                                <Select label="Prefer Berth">
                                                    <MenuItem value="lower">Lower</MenuItem>
                                                    <MenuItem value="middle">Middle</MenuItem>
                                                    <MenuItem value="upper">Upper</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                                                <InputLabel>Meal</InputLabel>
                                                <Select label="Meal" defaultValue="none">
                                                    <MenuItem value="none">None</MenuItem>
                                                    <MenuItem value="veg">Veg</MenuItem>
                                                    <MenuItem value="nonveg">Non-Veg</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    ))}

                                    <Button variant="outlined" color="primary" onClick={handleAddPassenger} sx={{ mb: 2 }}>
                                        Add Passenger
                                    </Button>

                                    <Typography variant="h6" sx={{ color: 'green', mb: 2 }}>Children Below 5 Years</Typography>

                                    {children.map((_, i) => (
                                        <Box key={i} sx={{ display: 'flex', gap: 2, mb: 2 }}>
                                            <TextField
                                                label={`Child ${i + 1} Name`}
                                                fullWidth
                                                variant="outlined"
                                            />
                                            <FormControl fullWidth variant="outlined">
                                                <InputLabel>Age</InputLabel>
                                                <Select label="Age">
                                                    {[1, 2, 3, 4].map((age) => (
                                                        <MenuItem key={age} value={age}>{age}</MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                            <FormControl fullWidth variant="outlined">
                                                <InputLabel>Gender</InputLabel>
                                                <Select label="Gender">
                                                    <MenuItem value="male">Male</MenuItem>
                                                    <MenuItem value="female">Female</MenuItem>
                                                    <MenuItem value="other">Other</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    ))}

                                    <Button variant="outlined" color="primary" onClick={handleAddChild} sx={{ mb: 2 }}>
                                        Add Child
                                    </Button>

                                </Box>
                            )}

                            {activeStep === 3 && (
                                <Box component="form" sx={{ mt: 2, mb: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField
                                                required
                                                label="Total Amount"
                                                type='number'
                                                fullWidth
                                                margin="normal"
                                            />
                                            <TextField
                                                required
                                                label="Advance Date"
                                                type="date"
                                                fullWidth
                                                margin="normal"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                required
                                                label="Advance Payment"
                                                type='number'
                                                fullWidth
                                                margin="normal"
                                            />
                                            <FormControl fullWidth margin="normal">
                                                <InputLabel>Select Payment Type</InputLabel>
                                                <Select
                                                    value={paymentType}
                                                    onChange={(e) => setPaymentType(e.target.value)}
                                                    label="Class"
                                                >
                                                    <MenuItem value="None">None</MenuItem>
                                                    <MenuItem value="Bank">Bank</MenuItem>
                                                    <MenuItem value="UPI">UPI</MenuItem>
                                                    <MenuItem value="Cash">Cash</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Box>
                            )}

                            {activeStep > 0 && (
                                <Box>
                                    <Button onClick={handleBack}>Back</Button>
                                    <Button variant="contained" color="primary" onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Box>

                    {/* Footer */}
                    <Box mt={10} textAlign="center">
                        <Typography variant="body2">Copyright © vivek. All rights reserved.</Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default NewOrder;
