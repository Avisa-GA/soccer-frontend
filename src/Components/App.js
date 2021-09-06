import React from "react";
import axios from "axios";
import "./App.css";
import PlayerForm from "./Player/PlayerForm";
import PlayerSingle from "./Player/PlayerSingle";
import PlayerList from "./Player/PlayerList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {},
    };

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }
  componentDidMount() {
    const url = "http://localhost:4000/players";

    axios
      .get(url)
      .then((Response) => {
        this.setState({
          players: Response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col s12">Menu</div>
        </div>
        <div className="row">
          <div className="col s3">
            <PlayerList
              players={this.state.players}
              updateCurrentPlayer={this.updateCurrentPlayer}
            />
          </div>
          <div className="col s9">
            <PlayerSingle />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <PlayerForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
