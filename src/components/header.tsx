import * as React from "react";
import styles from "./header.module.scss";
import moechen from "../static/moechen.logo.png";

export interface IProps {}

export interface IState {}

class Header extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <header className={styles.header}>
        <img src={moechen} />
        <div>
          <h1>Build your ideal Borussia Moenchengladbach team</h1>
          <p>Click on a player to start building your team...</p>
        </div>
      </header>
    );
  }
}

export default Header;
