import React, { Component } from "react";
import KetQuaGame from "./KetQuaGame";
import XucXac from "./XucXac";
import "./BTGameXX.css";
export default class BTGameXX extends Component {
  render() {
    return (
      <div className="bgGame">
        <h1 className="text-center">Bài Tâp Game Xúc Xắc</h1>
        <XucXac />

        <KetQuaGame />
      </div>
    );
  }
}
