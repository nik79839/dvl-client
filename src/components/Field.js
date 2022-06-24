import React, { Component } from 'react';

export class Field extends Component {
  static displayName = Field.name;

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value, this.props.Mykey);
    }

    render() {
        const name = this.props.name;
        const textField = this.props.textField;
    return (
        <div>
            
            <p>{name}</p>
            <textarea value={textField} onChange={this.handleChange} className="input" rows="1" />
        </div>
    );
  }
}
