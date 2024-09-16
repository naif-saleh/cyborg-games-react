import React , {Component} from 'react'
import './Container.css'

class Container extends Component{
    render() {
        return (
             
           <div className='container min-container'>
                <br />
                <br />
                <br /> 
                <br />
                
                {this.props.children}
           </div>
             
        );
    }
}
export default Container
