import React from "react";
import { Routes, Route } from "react-router-dom";
import ArticleList from "./containers/ArticleListView";

const BaseRouter = () => (
    <div>
        <Routes>
            <Route exact path="/" component={ArticleList} />
            <Route exact path="/:articleID" component={ArticleList} />
        </Routes>
    </div>
);

export default BaseRouter;
