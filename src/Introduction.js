import './Introduction.css';
import React from 'react';

// Maak de intro niet noodzakelijk om doorheen te gaan.

export default class Introduction extends React.Component {

  render() {
  return (
      <header className="welcome">
        <h1>Weather To Sell</h1>
        <p>{this.props.Language === 'dutch' ? 'Bepaal jouw optimale verkoopmomenten' : 'Optimize your (online) sales strategy'}</p>
        <section className="buttons">
        <button className="button" onClick={this.props.onClickHow}>{this.props.Language === 'dutch' ? 'hoe werkt het?' : 'How it works'}</button>
        <button className="button" onClick={this.props.onClickGo}>{this.props.Language === 'dutch' ? 'aan de slag!' : 'try it out!'}</button>
        </section>
      </header>
  );}
}