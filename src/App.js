import React, { Component, Fragment } from "react";
import "./App.scss";
import uuid from "react-uuid";

import { Header } from "./components/Header/Header";
import { Cards } from "./components/Cards/Cards";
import { Popup } from "./components/Popup/Popup";

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

  //  componentDidMount() {
  //     this.setState({
  //       searchedData: this.state.data,
  //     })
  //   }

  // svaki put nakon update-a
  // componentDidUpdate() {}

  // CETVRTA metoda po redu, tj POSLE rendera, desava  se jednom samo pri prvom renderu

  // componentDidMount() {
  //   console.log(document.querySelector("button"));
  // }

  state = {
    popup: false,

    data: [
      {
        name: "Peter",
        lastName: "Jackson",
        age: 33,
        id: uuid()
      },
      {
        name: "Mark",
        lastName: "Markovic",
        age: 32,
        id: uuid()
      },
      {
        name: "John",
        lastName: "Johnson",
        age: 22,
        id: uuid()
      },
      {
        name: "Ilija",
        lastName: "Reljic",
        age: 28,
        id: uuid()
      },
      {
        name: "Nikola",
        lastName: "Ivanovic",
        age: 27,
        id: uuid()
      },
      {
        name: "Nigel",
        lastName: "De Jong",
        age: 39,
        id: uuid()
      },
      {
        name: "Jovan",
        lastName: "Suzic",
        age: 30,
        id: uuid()
      }
    ],
    filteredData: []
  };

  addUser = user => {
    let users = [...this.state.data, user];

    this.setState({
      data: users,
      filteredData: users
    });
  };

  removeUser = id => {
    let users = this.state.data.filter(user => {
      return user.id !== id;
    });
    this.setState({
      data: users,
      filteredData: users
    });
  };

  copyUser = id => {
    let copiedUser = {};
    this.state.data.filter(user => {
      if (user.id === id) {
        copiedUser.name = user.name;
        copiedUser.lastName = user.lastName;
        copiedUser.age = user.age;
      }
      return copiedUser;
    });

    copiedUser.id = uuid();
    let newData = [...this.state.data, copiedUser];
    this.setState({
      data: newData,
      filteredData: newData
    });
  };

  sortItems = () => {
    const list = this.state.filteredData;
    const sorted = list;
    this.state.direction === true
      ? list.sort((a, b) => (a.name > b.name ? 1 : -1))
      : list.sort((a, b) => (a.name < b.name ? 1 : -1));
    this.setState({
      filteredData: sorted,
      direction: !this.state.direction
    });
  };

  componentDidMount() {
    this.setState({
      filteredData: this.state.data
    });
  }

  filterData(searchResults) {
    this.setState({
      filteredData: searchResults
    });
  }

  showPopup = () => {
    this.setState({
      popup: true
    });
  };

  closePopup = () => {
    this.setState({
      popup: false
    });
  };

  // render se izvrsava TRECI po redu
  render() {
    const { data, filteredData, popup } = this.state;

    return (
      <Fragment>
        <Header
          black
          search
          data={data}
          onDataFilter={searchResults => this.filterData(searchResults)}
          sortItems={this.sortItems}
        />

        <Cards
          data={filteredData}
          showPopup={this.showPopup}
          removeUser={this.removeUser}
          copyUser={this.copyUser}
          id={this.id}
        />

        {popup && <Popup addUser={this.addUser} closePopup={this.closePopup} />}
      </Fragment>
    );
  }
}

export default App;
