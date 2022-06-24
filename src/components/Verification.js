import React, { Component } from 'react';
import FieldListContainer from './FieldListContainer';
import  PdfClassic  from './PdfClassic';
import './Styles.css';

export class Verification extends Component {
    static displayName = Verification.name;

  render () {
    return (
        <div id="main">
            <div>
                <FieldListContainer />
            </div>
            <div>
                <PdfClassic/>
            </div>
        </div>
    );
  }
}
