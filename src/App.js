import React, { Component, Fragment } from "react";
import "./App.scss";

import { Header } from "./components/Header/Header";
import { Cards } from "./components/Cards/Cards";

class App extends Component {
  // Prvi se izvrsava constructor
  // constructor() {
  //   super();
  // }
  // Sledeca stvar je, PRE rendera - setovanje state-a na osnovu propsa, izbegavanje ponovnog rendera:

  // static getDerivedStateFromProps() {}
  // vraca true ili false
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.header !== this.state.header) {
  //     return true;
  //   }

  //   return false;
  // }

  // svaki put nakon update-a
  componentDidUpdate() {}

  // CETVRTA metoda po redu, tj POSLE rendera, desava  se jednom samo pri prvom renderu

  // componentDidMount() {
  //   console.log(document.querySelector("button"));
  // }

  state = {
    header: true,
    data: [
      {
        name: "Peter",
        age: 33
      },
      {
        name: "Mark",
        age: 32
      },
      {
        name: "John",
        age: 22
      },
      {
        name: "Ilija",
        age: 22
      },
      {
        name: "Nikola",
        age: 22
      },
      {
        name: "Nigel",
        age: 22
      },
      {
        name: "Jovan",
        age: 22
      }
    ],
    filteredData: []
  };

  componentDidMount() {
    this.setState({
      filteredData: this.state.data
    });
  }

  printSomething(text) {
    console.log(text);
  }

  toggleHeader() {
    this.setState({
      header: !this.state.header
    });
  }

  filterData(searchResults) {
    console.log(searchResults);
    this.setState({
      filteredData: searchResults
    });
  }

  // render se izvrsava TRECI po redu
  render() {
    const { header, data, filteredData } = this.state;

    return (
      <Fragment>
        {header && (
          <Header
            black
            search
            onPrint={text => {
              this.printSomething(text);
            }}
            data={data}
            onDataFilter={searchResults => this.filterData(searchResults)}
          />
        )}

        <Cards data={filteredData} />
        <button onClick={() => this.toggleHeader()}>Toggle Header</button>
      </Fragment>
    );
  }
}

export default App;
