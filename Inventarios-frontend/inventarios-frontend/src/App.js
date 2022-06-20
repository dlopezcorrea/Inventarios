import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/ui/Header";
import { BrandView } from "./components/brands/BrandView";
import { TypeView } from "./components/types/TypeView";
import { StatusView } from "./components/status/StatusView";
import { InventoryView } from "./components/inventory/InventoryView";
import { UserView } from "./components/users/UserView";
import { InventoryUpdate } from "./components/inventory/InventoryUpdate";

const App = () => {
    return <Router>
        <Header/>
        <Routes>
            <Route exact path='/' component={ InventoryView}/>
            <Route exact path='/users' component={ UserView }/>
            <Route exact path='/brands' component={ BrandView }/>
            <Route exact path='/status' component={ StatusView }/>
            <Route exact path='/types' component={TypeView }/>
            <Route exact path='/inventory/edit/:inventoryId' component={ InventoryUpdate }/>
            <Route path="/" element={<Navigate replace to="/" />} />
        </Routes>
    </Router>
}
export{App};