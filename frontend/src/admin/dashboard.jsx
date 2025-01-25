import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Paper, Grid, Button, Table, TableBody, TableCell, TableHead, TableRow, Avatar, Divider, TextField, IconButton, Collapse } from '@mui/material';
import { Home, Person, ShoppingCart, Payment, Info, Search, AssignmentTurnedIn, ExpandLess, ExpandMore, Add, Create, Flight, Cancel, ViewList, AddShoppingCart, Report, PendingActions, Today, ChevronLeft, ChevronRight } from '@mui/icons-material'; // Added AssignmentTurnedIn
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import AdminIcon from '@mui/icons-material/AccountCircle'; // for the admin icon

const Dashboard = () => {
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

                <Box mt={2}>
                    {/* Stats Grid */}
                    <Grid container spacing={2}>
                        {['Today Order', 'Today Booking', 'Today Total Payment', 'Today Total Refund'].map((stat, index) => (
                            <Grid item xs={12} sm={6} md={3} key={stat}>
                                <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
                                    <Typography variant="h6" color="primary">{stat}</Typography>
                                    <Typography variant="h4">
                                        {index === 0 && '3'}
                                        {index === 1 && '0'}
                                        {index === 2 && '2000.00'}
                                        {index === 3 && '0.00'}
                                    </Typography>
                                    <Button variant="contained" sx={{ mt: 1 }}>
                                        More info
                                    </Button>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Tables */}
                    <Grid container spacing={2} mt={2} direction={'column'}>
                        <Grid item xs={12} md={6}>
                            <Paper>
                                <Typography variant="h6" sx={{ p: 2, backgroundColor: '#f5f5f5' }}>
                                    Today Booking
                                </Typography>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Booking ID</TableCell>
                                            <TableCell>Mobile</TableCell>
                                            <TableCell>From</TableCell>
                                            <TableCell>To</TableCell>
                                            <TableCell>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>#4922</TableCell>
                                            <TableCell>9523162625</TableCell>
                                            <TableCell>DBG</TableCell>
                                            <TableCell>NDLS</TableCell>
                                            <TableCell><Button variant="outlined">Check Details</Button></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Button sx={{ m: 2 }}>View All Orders</Button>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Paper>
                                <Typography variant="h6" sx={{ p: 2, backgroundColor: '#f5f5f5' }}>
                                    Today Orders
                                </Typography>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Booking ID</TableCell>
                                            <TableCell>Mobile</TableCell>
                                            <TableCell>From</TableCell>
                                            <TableCell>To</TableCell>
                                            <TableCell>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>#4923</TableCell>
                                            <TableCell>7063882810</TableCell>
                                            <TableCell>DGP</TableCell>
                                            <TableCell>NBQ</TableCell>
                                            <TableCell><Button variant="outlined">View Details</Button></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>#4924</TableCell>
                                            <TableCell>7004386122</TableCell>
                                            <TableCell>MFP</TableCell>
                                            <TableCell>NDLS</TableCell>
                                            <TableCell><Button variant="outlined">View Details</Button></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Button sx={{ m: 2 }}>Place New Order</Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                {/* Footer */}
                <Box mt={4} textAlign="center">
                    <Typography variant="body2">Copyright © vivek. All rights reserved.</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
