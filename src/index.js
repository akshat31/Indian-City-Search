import React , { Component } from 'react';
import ReactDOM from 'react-dom';

//Components
import Header from "./components/header";
import JSON from './db.json';
import NewsList from "./components/news_list";

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            news:JSON,
            filtered:JSON
        }
    }

    filterNews(keywords){
        
        let filtered = this.state.news.filter((item) => {
            return item.name.indexOf(keywords) > -1;
        })

        this.setState({ filtered: filtered })
    }

    render(){
        return(
            <div className="container">
                <Header newsSearch={keywords => this.filterNews(keywords)}/>
                <div className="card-columns">
                <NewsList news={this.state.filtered}/>
                </div>
            </div>
        )
    }

}


ReactDOM.render(<App />, document.getElementById('root'));
