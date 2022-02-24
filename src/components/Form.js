import React from "react";
import Input from './Input';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
    cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, 
    onInputChange, onSaveButtonClick} = this.props
    return (
      <div>
        <h1>Tryunfo</h1>
        <Input
        name="name"
        type="text"
        dataid="name-input"
        value={ cardName }
        onChange= { onInputChange }
        />

        <textarea
        name="description"
        dataid="description-input"
        value={ cardDescription }
        onChange={ onInputChange }
        />

        <Input
        name="attr1"
        type="number"
        dataid="attr1-input"
        value={ cardAttr1 }
        onChange={ onInputChange }
        />

        <Input
        name="attr2"
        type="number"
        dataid="attr2-input"
        value={ cardAttr2 }
        onChange={ onInputChange }
        />

        <Input
        name="attr3"
        type="number"
        dataid="attr3-input"
        value={ cardAttr3 }
        onChange={ onInputChange }
        />

        <Input
        name="image"
        type="text"
        dataid="image-input"
        value={ cardImage }
        onChange={ onInputChange }
        />

        <select
        name="rare"
        dataid="rare-input"
        value={ cardRare }
        onChange={ onInputChange }
        >
        <option value="normal">normal</option>
        <option value="raro">Raro</option>
        <option value="muito raro">Muito raro</option>
        </select>
        
        <Input
        name="trunfo"
        type="checkbox"
        dataid="trunfo-input"
        value={ cardTrunfo }
        onChange={ onInputChange }
        />

        <button
        type="button"
        data-testid="save-button"
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
        >  
        Salvar
        </button>
      </div>
    )
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
}

export default Form;
