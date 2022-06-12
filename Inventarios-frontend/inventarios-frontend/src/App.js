import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Header } from "./components/ui/Header";
import { BrandView } from "./components/brands/BrandView";
import { TypeView } from "./components/types/TypeView";
import { StatusView } from "./components/status/StatusView";
import { InventoryView } from "./components/inventory/InventoryView";
import { UserView } from "./components/users/UserView";

const App = () => {
    return <Router>
        <Header/>
        <Switch>
            <Route exact path='/' component={ InventoryView}/>
            <Route exact path='/users' component={ UserView }/>
            <Route exact path='/brands' component={ BrandView }/>
            <Route exact path='/status' component={ StatusView }/>
            <Route exact path='/types' component={TypeView }/>
            <Redirect to='/'/>
        </Switch>
    </Router>
}
export{App};