import { 
    HOME_ROUTE,
    STORES_ROUTE,
    SERVIECES_ROUTE,
    ACTIVISTS_ROUTE,
    FOODS_ROUTE,
    STORES_TITLE,
    SERVIECES_TITLE,
    FOODS_TITLE,
    ACTIVISTS_TITLE,
   } from "./utils/consts";

import Home from "./components/Home";
import Page from "./components/Page";

export const routes = [
    {
        path: HOME_ROUTE,
        element: <Home />
    },
    {
        path: STORES_ROUTE,
        element: <Page title={STORES_TITLE} />
    },
    {
        path: SERVIECES_ROUTE,
        element: <Page title={SERVIECES_TITLE} />
    },
    {
        path: FOODS_ROUTE,
        element: <Page title={FOODS_TITLE} />
    },
    {
        path: ACTIVISTS_ROUTE,
        element: <Page title={ACTIVISTS_TITLE} />
    },
]