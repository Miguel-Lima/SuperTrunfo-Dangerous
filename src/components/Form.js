import React from "react";
import Input from './Input';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Input
        name="name"
        type="text"
        dataid="name-input"
        />

        <textarea
        name="description"
        dataid="description-input"
        />

        <Input
        name="attr1"
        type="number"
        dataid="attr1-input"
        />

        <Input
        name="attr2"
        type="number"
        dataid="attr2-input"
        />

        <Input
        name="attr3"
        type="number"
        dataid="attr3-input"
        />

        <Input
        name="image"
        type="text"
        dataid="image-input"
        />

        <select
        name="rare"
        dataid="rare-input"
        >
        <option value="normal">normal</option>
        <option value="raro">Raro</option>
        <option value="muito raro">Muito raro</option>
        </select>
        
        <Input
        name="trunfo"
        type="checkbox"
        dataid="trunfo-input"
        />

        <button
        type="button"
        data-testid="save-button"
        >  
        Salvar
        </button>
      </div>
    )
  }
}

export default Form;
