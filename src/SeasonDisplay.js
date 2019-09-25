import React, { Component } from "react";
import "./seasonDisplay.css";

class SeasonDisplay extends Component {
  getSeason() {
    const { lat } = this.props;
    const month = new Date().getMonth();
    //hemisferio norte: verão - mes 3 ao mes 8, inverno - meses 0(janeiro),1(fevereiro),2,9,10,11
    //hemisferio sul: verão - meses 0(janeiro),1(fevereiro),2,9,10,11, inverno - mes 3 ao mes 8
    //latitude > 0 = hemisferio norte. latitude < 0 hemisferio sul
    if (month > 2 && month < 9) {
      return lat > 0 ? "summer" : "winter";
    } else {
      return lat > 0 ? "winter" : "summer";
    }
  }
  render() {
    const season = this.getSeason();
    const { text, iconName } = seasonConfig[season];
    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
      </div>
    );
  }
}

const seasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr, it is chilly",
    iconName: "snowflake"
  }
};

export default SeasonDisplay;
