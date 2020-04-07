import React , {Component} from 'react'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <React.Fragment>
                <div>
                    <div style={{ width : '100%' , height : '50px' , backgroundColor : "rgb(201, 190, 190)"}}>  
                    
                    </div>
                    <div style={{ width : '100%' , height : '100px' ,backgroundColor :"rgb(233, 50, 50)" , textAlign : 'center', fontFamily :'fantasy', fontSize : '50px'}}>bookouture
                    </div> 
                    <div style={{width : '100%' , height : '100px',backgroundColor :"rgb(235, 17, 17)",}}>
                        <div style={{ marginLeft: '2%' , lineHeight : '50%' , alignItems : 'center',   justifyContent : 'space-between' , display:'flex' }}>  
                            <div style={{marginTop : '3%' }}>About</div>
                            <div style={{marginTop : '3%' }}>Submission</div> 
                            <div style={{marginTop : '3%' }}>Blog</div> 
                            <div style={{marginTop : '3%' }}>Ourbooks</div> 
                            <div style={{marginTop : '3%' }}>Author</div> 
                        </div>
                    </div>
            
                   
                  
              
                </div>  
            </React.Fragment>
        )
    }
}

export default Header
