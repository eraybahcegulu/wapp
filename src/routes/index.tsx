import PublicLayout from "../components/PublicLayout";
import { commonRoutes } from "./common";
import { publicRoutes } from "./public";
import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {

    const routes = publicRoutes;
    const element = useRoutes([...routes, ...commonRoutes]);

    return (
        <>
            <PublicLayout content={element} />
        </>
    );
};