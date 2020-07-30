import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResult: null,
    tvResult: null,
    searchInput: "",
    isLoading: false,
    error: null,
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
      />
    );
  }
}
