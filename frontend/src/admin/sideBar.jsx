import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Box,Avatar, Divider, TextField, IconButton, Collapse } from '@mui/material';
import { Home, Person, ShoppingCart, Payment, Info, Search, AssignmentTurnedIn, ExpandLess, ExpandMore, Add, Create,  ViewList, AddShoppingCart, Report, PendingActions, Today } from '@mui/icons-material'; // Added AssignmentTurnedIn
import AdminIcon from '@mui/icons-material/AccountCircle'; // for the admin icon
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const SideBar = () => {
    const navigate = useNavigate();
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
    )
};

export default SideBar;