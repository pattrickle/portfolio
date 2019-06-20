import React, {Component}  from "react"
import{
    Route,
    NavLink,
    HashRouter
}  from "react-router-dom"

import Portfolio from "./Portfolio"
import About from "./About"
import Home from "./Home"


class App extends Component{
    render(){
        return(
            <HashRouter>
            <div>
                <h1>@PATTRICKLE</h1>
                    <ul className = "header">
                        <li><NavLink exact activeClassName="active" to ="/">Home</NavLink></li>
                        <li><NavLink activeClassName="active" to ="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink activeClassName="active" to ="/about">About</NavLink></li>
                    </ul>

                <div className="content">
                        <Route exact path ="/" component ={Home}/>
                        <Route path ="/portfolio" component ={Portfolio}/>
                        <Route path ="/about" component ={About}/>

                </div>
                
            </div>
            </HashRouter>
        )
    }
}
export default App