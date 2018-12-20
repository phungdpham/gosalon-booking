
import Appointment from './views/Appointment';



const routes = [
  {
    path: "/appointment",
    name: "Appointment",
    icon: "nc-icon nc-calendar-60",
    component: Appointment,
    layout: "/admin"
  }
];

export default routes;