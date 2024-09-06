import PublicLayout from "../components/PublicLayout";
import { publicRoutes } from "./public";
import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {

    const routes = publicRoutes;
    const element = useRoutes([...routes]);

    return (
        <>
            <PublicLayout content={element} />
        </>
    );
};