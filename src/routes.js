
// import Appointment from './views/Appointment';
import BookAppointment from './views/Appointment';
import Service from './views/Services';



const routes = [
  {
    path: "/appointment",
    name: "Appointment",
    icon: "nc-icon nc-calendar-60",
    component: BookAppointment,
    layout: "/admin"
  },
  {
    path: '/services',
    name: 'Service',
    icon: 'nc-icon nc-bullet-list-67',
    component: Service,
    layout: '/admin'
  }
];

export default routes;