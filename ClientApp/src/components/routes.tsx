import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Home';
import { FetchEmployee } from './FetchEmployee';
import { AddEmployee } from './AddEmployee';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/fetchemployee' component={FetchEmployee} />
    <Route path='/addemployee' component={AddEmployee} />
    <Route path='/employee/edit/:empid' component={AddEmployee} />
</Layout>;