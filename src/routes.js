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
import Page from "./components/Page/Page";

export const routes = [
    {
        path: HOME_ROUTE,
        element: <Home />
    },
    {
        path: STORES_ROUTE,
        element: <Page pageQuery={STORES_TITLE} pageKey={"category"} />
    },
    {
        path: SERVIECES_ROUTE,
        element: <Page pageQuery={SERVIECES_TITLE} pageKey={"category"} />
    },
    {
        path: FOODS_ROUTE,
        element: <Page pageQuery={FOODS_TITLE} pageKey={"category"} />
    },
    {
        path: ACTIVISTS_ROUTE,
        element: <Page pageQuery={ACTIVISTS_TITLE} pageKey={"category"} />
    },
]