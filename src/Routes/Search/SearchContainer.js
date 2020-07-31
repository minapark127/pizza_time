import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "api";

export default class extends React.Component {
  state = {
    movieResult: null,
    tvResult: null,
    searchInput: "",
    isLoading: false,
    error: null,
  };

  handleSubmit = () => {
    const { searchInput } = this.state;
    if (searchInput !== "") {
      this.searchByInput();
    }
  };

  searchByInput = async () => {
    const { searchInput } = this.state;
    this.setState({
      isLoading: true,
    });

    try {
      const {
        data: { results: movieResult },
      } = await movieApi.search(searchInput);

      const {
        data: { results: tvResult },
      } = await tvApi.search(searchInput);

      this.setState({
        movieResult,
        tvResult,
      });
    } catch {
      this.setState({ error: "❌cannot find results" });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { movieResult, tvResult, searchInput, isLoading, error } = this.state;
    return (
      <SearchPresenter
        movieResult={movieResult}
        tvResult={tvResult}
        searchInput={searchInput}
        isLoading={isLoading}
        error={error}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
