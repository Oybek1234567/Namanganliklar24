import Contact from "../components/contact";
import Info from "../components/info";
import Main from "../page/main";

export const routes = [
    {
        id: 1,
        path: "/",
        element: <Main />,
    },
    {
        id: 2,
        path: "/info",
        element: <Info />,
    },
    {
        id: 3,
        path: "/contact",
        element: <Contact />
    },
]