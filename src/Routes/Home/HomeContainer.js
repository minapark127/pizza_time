import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    trendingAll: null,
    isLoading: true,
    error: null,
  };

  render() {
    const { result, isLoading, error } = this.state;
    return (
      <HomePresenter result={result} isLoading={isLoading} error={error} />
    );
  }
}
