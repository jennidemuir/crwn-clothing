import React, { Component } from "react";
import "./directory.styles.scss";
import { sectionsData } from "./directory.data";
import { Menuitem } from "../menu-item/Menuitem";

export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: sectionsData,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, id, imageUrl, size }) => (
          <Menuitem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
