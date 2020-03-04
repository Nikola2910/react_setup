import React, { Component } from "react";
import "./Search.scss";

class Search extends Component {
  state = {
    searchTerm: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.filterData();
    }
  }

  filterData() {
    const { data, onDataFilter } = this.props;
    const { searchTerm } = this.state;

    console.log(data);

    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onDataFilter(filteredData);
  }

  onSearchChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  render() {
    return (
      <input
        className="search"
        onChange={e => this.onSearchChange(e)}
        value={this.state.searchTerm}
      />
    );
  }
}

export { Search };
