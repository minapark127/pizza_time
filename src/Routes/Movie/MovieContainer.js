import React from "react";
import MoviePresenter from "./MoviePresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    topRated: null,
    upcoming: null,
    isLoading: true,
    error: null,
  };
  render() {
    const { nowPlaying, topRated, upcoming, isLoading, error } = this.state;
    return (
      <MoviePresenter
        nowPlaying={nowPlaying}
        topRated={topRated}
        upcoming={upcoming}
        isLoading={isLoading}
        error={error}
      />
    );
  }
}
