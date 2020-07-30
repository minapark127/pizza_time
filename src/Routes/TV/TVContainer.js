import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
  state = {
    onTheAir: null,
    topRated: null,
    latest: null,
    isLoading: true,
    error: null,
  };
  render() {
    const { onTheAir, topRated, latest, isLoading, error } = this.state;
    return (
      <TVPresenter
        onTheAir={onTheAir}
        topRated={topRated}
        latest={latest}
        isLoading={isLoading}
        error={error}
      />
    );
  }
}
