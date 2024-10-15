// import React from 'react';
// import './Service.css'

// const ServiceNav = () => {
//     return (
//         <div class="services">
//             <div class="service-item">
//                 <span><img src="/train.d3e3d1e5.svg" alt='Trains'></img></span>
//                 <span>Trains</span>
//             </div>
//             <div class="service-item">
//                 <span><img src="/flight.f515b25a.svg" alt='Flights'></img></span>
//                 <span>Flights</span>
//             </div>
//             <div class="service-item">
//                 <span><img src="/bus.1942c5dd.svg" alt='Vehicles'></img></span>
//                 <span>Vehicles</span>
//             </div>
//             <div class="service-item">
//                 <span><i class="fas fa-headset"></i></span>
//                 <span>Customer support</span>
//             </div>
//         </div>

//     )
// }

// export default ServiceNav;

import React from 'react';
import './Service.css'

const ServiceNav = ({ onServiceClick }) => {
    return (
        <div className="services">
            <button className="service-item" onClick={() => onServiceClick('Train')}>
                <span><img src="/train.d3e3d1e5.svg" alt='Trains' /></span>
                {/* <span>Trains</span> */}
            </button>
            <button className="service-item" onClick={() => onServiceClick('Flight')}>
                <span><img src="/flight.f515b25a.svg" alt='Flights' /></span>
                {/* <span>Flights</span> */}
            </button>
            <button className="service-item" onClick={() => onServiceClick('Vehicle')}>
                <span><img src="/bus.1942c5dd.svg" alt='Vehicles' /></span>
                {/* <span>Vehicles</span> */}
            </button>
            <button className="service-item" onClick={() => onServiceClick('Support')}>
                <span><i className="fas fa-headset"></i></span>
                {/* <span>Customer Support</span> */}
            </button>
        </div>
    )
}

export default ServiceNav;

