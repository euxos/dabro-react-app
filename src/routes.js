import { ABOUT_ROUTE, BURGERS_ROUTE, CART_ROUTE, HOME_ROUTE, MENU_ROUTE, PRODUCT_ROUTE, ROLLS_ROUTE, SAUCES_ROUTE, SETS_ROUTE, SIDES_ROUTE } from "./utils/consts";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Cart from "./pages/Cart";


export const routes = [
    {
        path: HOME_ROUTE,
        element: <Home />
    },
    {
        path: MENU_ROUTE,
        element: <Menu />
    },
    {
        path: ABOUT_ROUTE,
        element: <About />
    },
    {
        path: CART_ROUTE,
        element: <Cart />
    },
    {
        path: BURGERS_ROUTE,
        element: <Menu />
    },
    {
        path: ROLLS_ROUTE,
        element: <Menu />
    },
    {
        path: SIDES_ROUTE,
        element: <Menu />
    },
    {
        path: SETS_ROUTE,
        element: <Menu />
    },
    {
        path: SAUCES_ROUTE,
        element: <Menu />
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        element: <Menu />
    },
]