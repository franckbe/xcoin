import React from 'react';
import './App.css';
import CoinPicker from './CoinPicker';

class App extends React.Component {
  state = {
    fromCoin: "EUR",
    toCoin : "WINGS",
  }
  setFromCoin = (event) =>{
    this.setState({
      fromCoin:event.target.value,
    })
  }
setToCoin = (event)=>{
  this.setState({
    toCoin: event.target.value,
  })
}

  render(){
  return (
    <div className="App">
    <CoinPicker fromCoin={this.state.fromCoin}
                selfFromCoin = {this.selfFromCoin}
                toCoin={this.state.toCoin}
                setToCoin = {this.selfToCoin}/>
                
    
    </div>
  );
  
  }
}
  
  export default App;

