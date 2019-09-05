import React from "react";

import Order from "./Order";
import Inventory from "./Inventory";
import Header from "./Header";
import Fish from "./Fish";

import sampleFishes from "../sample-fishes";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {

    const order = { ...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({order});

  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Thiago LMM "></Header>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish key={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} index={key}></Fish>
            ))}
          </ul>
        </div>
        <Order></Order>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        ></Inventory>
      </div>
    );
  }
}

export default App;
