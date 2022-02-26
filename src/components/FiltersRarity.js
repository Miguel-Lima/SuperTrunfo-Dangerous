import React from "react";
import Card from "./Card";

class MAP extends React.Component {
    
    render() {
        const filteredCards = this.filterCards();
        return (
            <section>
            {filteredCards.map (({ target }) => (
                <div key={ target } className="container-card">
                  <Card
                    cardName={ target }
                    cardDescription={ target }
                    cardAttr1={ target }
                    cardAttr2={ target }
                    cardAttr3={ target }
                    cardImage={ target }
                    cardRare={ target }
                    cardTrunfo={ target }
                  />
                  <button
                    type="button"
                    className="btn-remove-card"
                    data-testid="delete-button"
                    onClick={ () => this.cardRemove(target) }
                  >
                 
                    Excluir
                  </button>
                </div>))}
                </section>
        )
    }
}

export default MAP;