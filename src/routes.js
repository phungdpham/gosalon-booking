
// import Appointment from './views/Appointment';
import BookAppointment from './views/Appointment';
import Service from './views/Services';
import Employee from './views/Employees';



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
  },
  {
    path: '/employees',
    name: 'Employee',
    icon: 'nc-icon nc-single-02',
    component: Employee,
    layout: '/admin'
  }
];

export default routes;