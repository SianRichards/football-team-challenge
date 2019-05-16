import * as React from "react";
import { IPlayer, players } from "../data";
import PlayerCard from "./playerCard";
import styles from "./playerContainer.module.scss";
import ChosenTeam from "./chosenTeam";
export interface IProps {}

export interface IState {
  playerArray: object[];
}

class PlayerContainer extends React.Component<IProps, IState> {
  public state = { playerArray: [] };
  public midFielders: IPlayer[] = [];
  public defenders: IPlayer[] = [];
  public attackers: IPlayer[] = [];
  public goalKeeper: IPlayer[] = [];

  public getPlayersJSX = (players: IPlayer[]) => {
    const newPlayerArray = players.map((player, index) => (
      <PlayerCard
        key={index}
        player={player}
        onClick={() => this.handleSelect(player)}
      />
    ));
    return newPlayerArray;
  };

  render() {
    return (
      <div>
        <div className={styles.chosencontainer}>
          <article className={styles.chosencard}>
            <h3
              className={
                this.state.playerArray.length === 11
                  ? styles.teamFull
                  : styles.teamEmpty
              }
            >
              Your team is full!
            </h3>
          </article>
          {this.state.playerArray.map((player, index) => (
            <ChosenTeam key={index} player={player} />
          ))}
        </div>
        <div className={styles.playercontainer}>
          {this.getPlayersJSX(players)}
        </div>
      </div>
    );
  }

  public handleSelect = (player: IPlayer) => {
    if (
      player.position === "Midfielder" &&
      this.midFielders.length <= 3 &&
      !this.midFielders.includes(player)
    ) {
      player.isSelected = true;
      this.midFielders.push(player);
    } else if (
      player.position === "Midfielder" &&
      this.midFielders.includes(player)
    ) {
      for (var i = 0; i < this.midFielders.length; i++) {
        if (this.midFielders[i] === player) {
          player.isSelected = false;
          this.midFielders.splice(i, 1);
        }
      }
    } else if (
      player.position === "Defender" &&
      this.defenders.length <= 2 &&
      !this.defenders.includes(player)
    ) {
      player.isSelected = true;
      this.defenders.push(player);
    } else if (
      player.position === "Defender" &&
      this.defenders.includes(player)
    ) {
      for (var i = 0; i < this.defenders.length; i++) {
        if (this.defenders[i] === player) {
          player.isSelected = false;
          this.defenders.splice(i, 1);
        }
      }
    } else if (
      player.position === "Attacker" &&
      this.attackers.length <= 2 &&
      !this.attackers.includes(player)
    ) {
      player.isSelected = true;
      this.attackers.push(player);
    } else if (
      player.position === "Attacker" &&
      this.attackers.includes(player)
    ) {
      for (var i = 0; i < this.attackers.length; i++) {
        if (this.attackers[i] === player) {
          player.isSelected = false;
          this.attackers.splice(i, 1);
        }
      }
    }
    if (
      player.position === "Goalkeeper" &&
      this.goalKeeper.length < 1 &&
      !this.goalKeeper.includes(player)
    ) {
      player.isSelected = true;
      this.goalKeeper.push(player);
    } else if (
      player.position === "Goalkeeper" &&
      this.goalKeeper.includes(player)
    ) {
      player.isSelected = false;
      this.goalKeeper.splice(this.goalKeeper.indexOf(player));
    }

    let mergeArray = this.midFielders.concat(
      this.attackers,
      this.defenders,
      this.goalKeeper
    );
    console.log(mergeArray);
    this.setState({ playerArray: mergeArray });
  };
}

export default PlayerContainer;
