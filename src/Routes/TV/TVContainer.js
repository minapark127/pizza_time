import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";

export default class extends React.Component {
  state = {
    onTheAir: null,
    topRated: null,
    popular: null,
    isLoading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: onTheAir },
      } = await tvApi.onTheAir();
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.popular();

      this.setState({
        onTheAir,
        topRated,
        popular,
      });
    } catch {
      this.setState({
        error: "❌cannot find tv show information❌",
      });
    } finally {
      this.setState({
        isLoading: false,
      });
      console.log(this.state);
    }
  }
  render() {
    const { onTheAir, topRated, popular, isLoading, error } = this.state;
    return (
      <TVPresenter
        onTheAir={onTheAir}
        topRated={topRated}
        popular={popular}
        isLoading={isLoading}
        error={error}
      />
    );
  }
}
