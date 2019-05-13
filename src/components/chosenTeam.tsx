import * as React from "react";
import styles from "./chosenTeam.module.scss";
import { IPlayer } from "../data";

export interface IProps {
  player: IPlayer;
}

export interface IState {}

class ChosenTeam extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <article className={styles.chosencard}>
        <h3>{this.props.player.name}</h3>
        <p>Position played: {this.props.player.position}</p>
        <p>Date of Birth: {this.props.player.dateOfBirth}</p>
        <p>Country of Birth: {this.props.player.countryOfBirth}</p>
        <p>Nationality: {this.props.player.nationality}</p>
        <p>Role: {this.props.player.role}</p>
      </article>
    );
  }
}

export default ChosenTeam;
