import React , { Component } from "react"
import Header from "./Header"
import Left from "./Left"
import Right from "./Right"
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
                <React.Fragment>           
                        <Header/>
                        <div style={{display : 'flex'}}>
                            <div style={{ width : '100%' , height : '500px', backgroundColor : "Orange"}}> <Left/></div>
                            <div  style={{ width : '100%' , height : '500px', backgroundColor : "blue"}}><Right/></div>
                        </div>
                </React.Fragment>    
        )
    }
}
export default Main
