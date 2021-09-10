import React from 'react';
import { Component } from 'react';
import data from './data.json';

class Content extends Component {

  componentDidMount(){
   
  }
  
  render() {
    return (
      <div>
        <h1>Main</h1>
        <h1 className="historia">
          
          
          {data.historia}
        
        
        </h1>        
      </div>
      
    );
  }
  
  


}

export default Content;
