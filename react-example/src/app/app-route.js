var React = require('react');
import { Route , IndexRoute } from 'react-router';

import Main from './views/main';
import Home1 from './views/login/home1';

var AppRoutes = (
    <Route path="/" component={Main}>
        <IndexRoute component={Home1}/>

    </Route>
);

module.exports = AppRoutes;
