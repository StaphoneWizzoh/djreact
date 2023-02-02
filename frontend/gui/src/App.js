import React from "react";
import BaseRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";

import CustomLayout from "./containers/Layout";
import ArticleList from "./containers/ArticleListView";

function App() {
    return (
        <div className="App">
            <Router>
                <CustomLayout>
                    <BaseRouter />
                    <ArticleList />
                </CustomLayout>
            </Router>
        </div>
    );
}

export default App;
