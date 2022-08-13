import React from 'react';
import PropTypes from 'prop-types';

import Books from '../../components/Books/index';
import './styles.scss'

index.propTypes = {

};

function index(props) {
  return (
    <div className="container">
      <Books />
    </div>
  );
}

export default index;
