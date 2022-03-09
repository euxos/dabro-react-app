import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from "../routes";
import { HOME_ROUTE } from "../utils/consts";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact />
            )}
            <Route path="*" element={<Navigate to={HOME_ROUTE} />}/>
        </Routes>
    );
};

export default AppRouter;