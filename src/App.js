import React, { Component, Fragment } from "react";
import "./App.scss";
import uuid from "react-uuid";
import { Communicators } from "./Communicators";

import { Header } from "./components/Header/Header";
import { Cards } from "./components/Cards/Cards";
import { Popup } from "./components/Popup/Popup";

import Flash from "react-reveal/Flash";

class App extends Component {
  state = {
    popup: false,

    data: [],
    filteredData: [],
    formData: null
  };

  fetchData() {
    Communicators.Fetch().then(responseData => {
      this.setState({
        filteredData: this.formatData(responseData)
      });
    });
  }

  addUser = user => {
    Communicators.Post(user).then(() => {
      Communicators.Fetch().then(responseData => {
        this.setState({
          popup: false,
          filteredData: this.formatData(responseData)
        });
      });
    });
  };

  removeUser = id => {
    Communicators.Delete(id).then(() => this.fetchData());
  };

  editUser = id => {
    let forEditing = [...this.state.filteredData].find(item => item.id === id);

    this.setState(
      {
        formData: forEditing
      },
      () => {
        this.showPopup();
      }
    );
  };

  onFormEdit = data => {
    const updatedData = {
      name: data.name,
      lastName: data.lastName,
      age: data.age
    };
    console.log(updatedData);

    Communicators.Put(data.id, updatedData).then(() => this.fetchData());
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
    this.fetchData();
  }

  formatData(responseData) {
    const data = [];

    for (const item in responseData) {
      data.push({ ...responseData[item], id: item });
    }

    console.log(data);

    return data;
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
      popup: false,
      formData: null
    });
  };

  // render se izvrsava TRECI po redu
  render() {
    const { data, filteredData, popup, formData } = this.state;

    return (
      <Fragment>
        <Header
          black
          search
          data={data}
          onDataFilter={searchResults => this.filterData(searchResults)}
          sortItems={this.sortItems}
        />
        <Flash>
          <Cards
            data={filteredData}
            showPopup={this.showPopup}
            removeUser={this.removeUser}
            editUser={this.editUser}
          />
        </Flash>
        {popup && (
          <Popup
            addUser={this.addUser}
            closePopup={this.closePopup}
            formData={formData}
            onFormEdit={this.onFormEdit}
          />
        )}
      </Fragment>
    );
  }
}

export default App;
