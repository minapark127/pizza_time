import React from "react";
import HomePresenter from "./HomePresenter";
import { trendingApi } from "api";

export default class extends React.Component {
  state = {
    trendingAll: null,
    isLoading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: trendingAll },
      } = await trendingApi.trendingAll();

      this.setState({
        trendingAll,
      });
    } catch {
      this.setState({
        error: "❌cannot find information on trending❌",
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const { trendingAll, isLoading, error } = this.state;
    return (
      <HomePresenter
        trendingAll={trendingAll}
        isLoading={isLoading}
        error={error}
      />
    );
  }
}
