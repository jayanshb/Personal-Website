import React from "react";
import PCard from "../components/projectcard";
import Sidebar from "../components/sidebar";
import "../design/projects.css";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-xl-9 whiteCarryover" style={{ height: "210vh" }}>
            <div className="row">
              <div className="card-deck">
                <div className="col-sm align-items-center">
                  <div className="container mt-3" id="qlearning">
                    <PCard
                      course="AI"
                      code="Game playing bot"
                      name=""
                      positions="Machine Learning"
                      duties="This project implements a Gaming Bot for the game Frozen Lake from OpenAI Gym, trained using Q Learning."
                      page="qlearning"
                      link="https://github.com/jayanshb/FrozenLakeGameQLearningAI"
                      duration="March 2020"
                    />
                  </div>
                </div>
                <div className="col-sm" id="webdev">
                  <div className="container mt-3">
                    <PCard
                      course="Designing"
                      code="my website"
                      name=""
                      positions="Web development"
                      duties="This fully responsive portfolio website was designed using bootstrap and React.js"
                      page="webdev"
                      link="#"
                      duration="May 2020"
                    />
                  </div>
                </div>
                <div className="col-sm" id="deeplearning">
                  <div className="container mt-3">
                    <PCard
                      course="AI"
                      code="Algorithmic trading bot"
                      name=""
                      positions="Deep learning and data analysis"
                      duties="This is an ongoing project for the development of an AI bot for technical trading. Till now, this project has implemented analyzed RSI, MACD, and Dual moving crossover indicator stratergies. Stock price prediction using LSTM has also been implemented. Currently, I am working on integrating Deep-Q-Learning in order to automate efficient trades"
                      page="deeplearning"
                      link="https://github.com/jayanshb/Quant-Trading"
                      duration="May 2020 - present"
                    />
                  </div>
                </div>
                <div className="col-sm" id="datascience">
                  <div className="container mt-3">
                    <PCard
                      course="Data Science"
                      code="Library"
                      name=""
                      positions="Functional Programming"
                      duties="Open source data science libraries using OCaml to contribute to the lack of functionality on multidimensional arrays in OCaml. Consists of functionality such as manipulating CSV files, indexing & slicing data, and providing linear algebra functionalities on arrays."
                      page="datascience"
                      link="https://github.com/jayanshb/DataCaml"
                      duration="May 2020 - present"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
