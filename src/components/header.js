import React,{ Component } from "react";

class Header extends Component{

    constructor(props){
        super(props);

        this.state ={
            keywords:''
        }
    }

    inputChange(event){
        this.setState({ keywords:event.target.value})
        this.props.newsSearch(event.target.value)
    }

    render(){
        return(
            <header className="mb-4">
                <h1 className="logo">City Search</h1>
                <input onChange={this.inputChange.bind(this)}/>
                <h4><span className="text-danger">Note</span> = Put first letter Capital | Example : "Delhi"</h4>
                <span className="p-1"></span>
            </header>
        )
    }

}

export default Header;