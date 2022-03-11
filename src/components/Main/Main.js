import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from "../../routes";
import { HOME_ROUTE } from "../../utils/consts";
import "./Main.scss";

const Main = () => {
    return (
      <div className="article-wrapper">
         <Routes>
            {routes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact />
            )}
            <Route path="*" element={<Navigate to={HOME_ROUTE} />}/>
        </Routes>
      </div>
       
    );
};

export default Main;