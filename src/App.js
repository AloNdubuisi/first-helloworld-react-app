import React, { Component } from 'react';
import Firstapp from './components/Firstapp';
import Description from './components/Description';

class App extends Component {
  render() { 
    return (  
      <div>
        <Firstapp name="I'M Alo Ndubuisi" />
        <Description name="Welcome, In other to  keep Track of my React Journey, This my first Hello World App Project."/>
      </div>
    );
  }
}
 
export default App;
