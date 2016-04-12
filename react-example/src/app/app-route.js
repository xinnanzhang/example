import React from 'react';
import { Route , IndexRoute } from 'react-router';

import Main from './views/main';
import Home1 from './views/login/home1';//登录页面1

const AppRoutes = (
    <Route path="/" component={Main}>
        <IndexRoute component={Home1}/>

    </Route>
);

export default AppRoutes;
// module.exports = AppRoutes;
