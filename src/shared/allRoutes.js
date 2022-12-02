import Detail from "../pages/Detail";
import Shipments from "../pages/Shipments";

export const allRoutes = [
    {
        path: "/",
        element: <Shipments />,
    },
    {
        path: "/:name",
        element: <Detail />,
    },
]