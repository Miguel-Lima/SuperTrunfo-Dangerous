import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor() {
    super();

    this.state = {
      nameCard: 'Nome da carta',
      imageInicial: 'https://c.tenor.com/6xOcScBkgqkAAAAC/ax-serial-killer.gif',
      descriptionCard: 'Descrição...',
    };
  }

  render() {
    const {
      nameCard,
      imageInicial,
      descriptionCard,
    } = this.state;

    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, } = this.props
    const { cardImage, cardRare, cardTrunfo, } = this.props;

    return (
      <div className="card">
        <div className="border-card">
          <h2 data-testid="name-card">{cardName || nameCard}</h2>
          <img src={ cardImage || imageInicial } alt={ cardName } data-testid="image-card" />
          <p className="description" data-testid="description-card">
            {cardDescription || descriptionCard}
          </p>
          <div className="card-content">
            <p className="attribute" data-testid="attr1-card">
              <span>Força</span>
              {cardAttr1}
            </p>

            <p className="attribute" data-testid="attr2-card">
              <span>Velocidade</span>
              {cardAttr2}
            </p>

            <p className="attribute" data-testid="attr3-card">
              <span>Inteligência</span>
              {cardAttr3}
            </p>

            <p className="rarity" data-testid="rare-card">
              <span>Raridade:</span>
              <span>{cardRare}</span>
            </p>

            {cardTrunfo
            && <p data-testid="trunfo-card" className="trunfo">🔪 Super Trunfo</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;
