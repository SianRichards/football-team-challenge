import * as React from "react";
import players, { IPlayer } from "../data";
import styles from "./playerCard.module.scss";

export interface IProps {
  player: IPlayer;
  onClick: (player: IPlayer) => void;
}

export interface IState {
  clicked: boolean;
}

class PlayerCard extends React.Component<IProps, IState> {
  state = {
    clicked: false
  };
  public handleClick = () => {
    this.props.onClick(this.props.player);
    this.props.player.isSelected
      ? this.setState({
          clicked: true
        })
      : this.setState({
          clicked: false
        });
  };

  render() {
    return (
      <article
        className={this.state.clicked ? styles.chosencard : styles.playercard}
        onClick={this.handleClick}
      >
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

export default PlayerCard;
