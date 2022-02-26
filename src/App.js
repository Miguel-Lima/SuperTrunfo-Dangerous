import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';
import MAP from './components/FiltersRarity';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      formData: {
        name: '',
        description: '',
        attr01: 0,
        attr02: 0,
        attr03: 0,
        image: '',
        rarity: 'normal',
        cardTrunfo: false,
      },
      formInitial: {
        name: '',
        description: '',
        attr01: 0,
        attr02: 0,
        attr03: 0,
        image: '',
        rarity: 'normal',
        cardTrunfo: false,
      },
      isSaveButtonDisabled: true,
      remainingPoints: 210,
      savedCards: [],
      hasTrunfo: false,
      searchValues: { searchText: '', searchRarity: '', searchSuperTrunfo: false },
    };
  }
  // FILTRO DE BUSCA
  handleSearch = ({ target }) => {
    if (target.type === 'checkbox') {
      this.setState(() => (
        { searchValues: {
          searchText: '',
          searchRarity: '',
          searchSuperTrunfo: target.checked,
        } }
      ));
    } else {
      const value = target.name === 'searchRarity'
        && target.value === 'todas' ? '' : target.value.toLowerCase();
      this.setState((previousState) => (
        { searchValues: { ...previousState.searchValues, [target.name]: value } }
      ));
    }
  }

  filterCards = () => {
    const { savedCards, searchValues } = this.state;
    const {
      searchText,
      searchRarity,
    } = searchValues;
    if (searchValues.searchSuperTrunfo) {
      return savedCards.filter((card) => card.cardTrunfo);
    }
    if (searchRarity) {
      return (
        savedCards.filter((card) => (
          card.name.toLowerCase().includes(searchText) && card.rarity === searchRarity
        ))
      );
    }
    return (
      savedCards.filter((card) => (
        card.name.toLowerCase().includes(searchText)
      ))
    );
  } 
  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { formData } = this.state;
    let { remainingPoints } = this.state;
    const total = 210;
    formData[target.name] = value;
    remainingPoints = total - (Number(formData.attr01) + Number(formData.attr02));
    remainingPoints -= Number(formData.attr03);
    this.setState({ formData, remainingPoints }, this.formValidation);
  }


  formValidation = () => {
    const { formData } = this.state;
    const { name, description, attr01, attr02, attr03, image } = formData;
    const valorN = 90;
    const total = 210;
    if (
      name.length > 0
      && description.length > 0 && image.length > 0 && attr01.length > 0
      && attr02.length > 0 && attr03.length > 0
      && Number(attr01) >= 0 && Number(attr02) >= 0 && Number(attr03) >= 0
      && Number(attr01) <= valorN && Number(attr02) <= valorN
      && Number(attr03) <= valorN
      && Number(attr01) + Number(attr02) + Number(attr03) <= total
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  trunfoValidation = () => {
    const { savedCards } = this.state;
    const bool = savedCards.some((card) => card.cardTrunfo === true);
    this.setState({ hasTrunfo: bool });
  }

  saveCard = (event) => {
    event.preventDefault();
    const { formData, savedCards, formInitial } = this.state;
    const previousCards = savedCards;
    this.setState({ savedCards: [...previousCards, formData] }, this.trunfoValidation);
    this.setState({ formData: { ...formInitial } });
    this.setState({ isSaveButtonDisabled: true });
  }

  cardRemove = (id) => {
    const { savedCards } = this.state;
    const updatedCards = savedCards.filter((card) => card.name !== id);
    this.setState({ savedCards: updatedCards }, this.trunfoValidation);
  }

  render() {
    const { formData, isSaveButtonDisabled, hasTrunfo, remainingPoints, searchValues,
    } = this.state;
    const { name, description, attr01, attr02, attr03, image, rarity, cardTrunfo,
    } = formData;
    const { searchText, searchRarity, searchSuperTrunfo } = searchValues;
    const filteredCards = this.filterCards(); 

    return (
      <>
        <section className="container">
          <section className="formleft">
            <Form
              cardName={ name }
              cardDescription={ description }
              cardAttr1={ attr01 }
              cardAttr2={ attr02 }
              cardAttr3={ attr03 }
              remainingPoints={ remainingPoints }
              cardImage={ image }
              cardRare={ rarity }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onSaveButtonClick={ this.saveCard }
              onInputChange={ this.handleChange }
            />
          </section>
          <section className="col-card">
            <h2 className="preview-title">Pré-visualização</h2>
            <Card
              cardName={ name }
              cardDescription={ description }
              cardAttr1={ attr01 }
              cardAttr2={ attr02 }
              cardAttr3={ attr03 }
              cardImage={ image }
              cardRare={ rarity }
              cardTrunfo={ cardTrunfo }
            />
          </section>
        </section>

        
        <section className="cardList">
          <div className="filterCards">
            <h2>Todas as cartas</h2>
            <span id="search-legend">Filtros de busca:</span>
            <div className="container-search">
              <input
                type="text"
                name="searchText"
                placeholder="Nome da carta"
                id="input-search"
                data-testid="name-filter"
                value={ searchText }
                onChange={ this.handleSearch }
                disabled={ searchSuperTrunfo }
              />
              <select
                id="searchRarity"
                data-testid="rare-filter"
                name="searchRarity"
                value={ searchRarity }
                onChange={ this.handleSearch }
                disabled={ searchSuperTrunfo }
              >
                <option value="todas">Todas</option>
                <option value="normal">Normal</option>
                <option value="raro">Raro</option>
                <option value="muito raro">Muito Raro</option>
              </select>
              <label htmlFor="searchSuperTrunfo">
                <input
                  id="searchSuperTrunfo"
                  type="checkbox"
                  name="searchSuperTrunfo"
                  data-testid="trunfo-filter"
                  checked={ searchSuperTrunfo }
                  onChange={ this.handleSearch }
                />
                Super Trunfo
              </label>
            </div>
          </div>
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

        </section>
      </>
    );
  }
}

export default App;
