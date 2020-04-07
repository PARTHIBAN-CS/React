import React , {Component} from 'react'
import Button from '@material-ui/core/Button';


class Left extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : 10
        
        }
    }

    adding=()=>{
       var data = this.state.value 
       data = data + 10 
       alert(data)

       this.setState({
        value : data
       })
       
    }
    subtract=()=>{
        var sub = this.state.value
        sub = sub - 2
        alert(sub)
        this.setState({
            value : sub
        })
    }
    render(){
        return(
          
                <div>
                
                <li>{this.state.value}</li>
                       
                    
                    <button onClick={this.adding}>ADD</button>
                
                 
                    <button onClick={this.subtract}>SUB</button>
                    <Button variant="outlined" color="primary" onClick={this.subtract}>
                    SUB
                    </Button>
                    </div> 
             
        )
    }
}

export default Left