import React from "react";
import MoviePresenter from "./MoviePresenter";
import { movieApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    topRated: null,
    upcoming: null,
    isLoading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();
      const {
        data: { results: topRated },
      } = await movieApi.topRated();
      const {
        data: { results: upcoming },
      } = await movieApi.upcoming();

      this.setState({
        nowPlaying,
        topRated,
        upcoming,
      });
    } catch {
      this.setState({
        error: "❌cannot find movie information❌",
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

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
