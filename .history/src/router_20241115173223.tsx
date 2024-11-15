import App from "./App";
// import { About_us } from "./App";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
    [
        {
           path: "/",
           element: <App/>,
        },

        // {
        //     path: "/image_test",
        //     element: <About_us/>,
        //  },
    ]
);