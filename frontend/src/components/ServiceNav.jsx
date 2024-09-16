import React from 'react';
import './Service.css'

const ServiceNav = () => {
    return (
        <div class="services">
            <div class="service-item">
                <span><img src="/train.d3e3d1e5.svg" alt='Trains'></img></span>
                <span>Trains</span>
            </div>
            <div class="service-item">
                <span><img src="/flight.f515b25a.svg" alt='Flights'></img></span>
                <span>Flights</span>
            </div>
            <div class="service-item">
                <span><img src="/bus.1942c5dd.svg" alt='Vehicles'></img></span>
                <span>Vehicles</span>
            </div>
            <div class="service-item">
                <span><i class="fas fa-headset"></i></span>
                <span>Customer support</span>
            </div>
        </div>

    )
}

export default ServiceNav;
