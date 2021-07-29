import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    componentDidUpdate() {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
    }
    render() {
    return(
        <button type="button" className="Button" onClick={this.props.onClick} >
            Load more
        </button>
    )}
};
Button.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

export default Button;
