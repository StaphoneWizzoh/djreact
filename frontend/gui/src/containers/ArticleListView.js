import React from "react";
import axios from "axios";
import Articles from "../components/Article";

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: "http://ant.design",
        title: "ant design part ",
        avatar: "https://google.com",
        description: "Wizzie outter here",
        content: "Unaonaje bradhe",
    });
}

class ArticleList extends React.Component {
    state = {
        articles: [],
    };

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/").then((res) => {
            this.setState({
                articles: res.data,
            });
            console.log(res.data);
        });
    }

    render() {
        return <Articles data={this.state.articles} />;
    }
}

export default ArticleList;
