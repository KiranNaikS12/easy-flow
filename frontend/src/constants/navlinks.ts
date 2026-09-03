import { faChalkboardTeacher, faSliders, faUsers } from "@fortawesome/free-solid-svg-icons";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Contact Us", href: "#contact" },
];

export const HEAD_SIDE_BAR = [
    {
        label: 'Dashboard',
        icon: faSliders,
        path: '/home'
    },
    {
        label: 'Members',
        icon: faUsers,
        path:'/members'
    },
    {
        label: 'Trainers',
        icon: faChalkboardTeacher,
        path: '/trainers'
    }
]