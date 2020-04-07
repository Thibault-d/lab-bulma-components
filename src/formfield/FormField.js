import React, { Component } from "react";
import 'bulma/css/bulma.css';

class FormField extends Component{
    render() {
      return (
        <div className='field'>
          <label className='label'>{this.props.label}</label>
          <input label = {this.props.label} class="input" type={this.props.type} placeholder={this.props.placeholder}></input>
        </div>
    )
  }
}

export default FormField 