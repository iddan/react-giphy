// @flow

import React, { Component } from "react";
import type { GIFObject, Images } from "./types";

type Props = { apiKey: string, searchTerm: string, size?: $Keys<Images> };

type State = { gif: ?GIFObject };

export default class Translate extends Component<Props, State> {
  state = {
    gif: null
  };

  async componentWillMount() {
    const url = new URL("/v1/gifs/translate", "https://api.giphy.com");
    url.searchParams.append("api_key", this.props.apiKey);
    url.searchParams.append("s", this.props.searchTerm);
    const res = await fetch(url.toString());
    const { data: gif } = await (res.json() : Promise<{ data: GIFObject }>);
    this.setState({ gif });
  }

  render() {
    const { size = "fixed_height" } = this.props;
    const { gif } = this.state;
    if (!gif) {
      return null;
    }
    const { width, height, url } = gif.images[size];
    if (!width || !height || !url) {
      throw new Error(`Size ${size} is not valid`)
    }
    return (
      <div
        className="GiphyTranslate"
        style={{
          backgroundImage: `url(${url})`,
          width: width + "px",
          height: height + "px"
        }}
      />
    );
  }
}
