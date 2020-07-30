import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
    isLoading: true,
    error: null,
  };
  render() {
    const { result, isLoading, error } = this.state;
    return (
      <DetailPresenter result={result} isLoading={isLoading} error={error} />
    );
  }
}
