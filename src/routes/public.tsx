import NotFoundPage from "@/pages/commonPages/NotFoundPage";
import HomePage from "../pages/publicPages/HomePage";

export const publicRoutes = [
    {
        path: '/home',
        element: <HomePage />,
    },

    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/*',
        element: <NotFoundPage />,
    },
];