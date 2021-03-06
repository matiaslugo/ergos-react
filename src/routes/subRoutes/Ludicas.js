import React from 'react';
import { RouteComponentFactory } from '../RouteComponentFactory';

const Ludicas = RouteComponentFactory( 'ludicas' );

Ludicas.propTypes = {
  data: React.PropTypes.shape({
    content: React.PropTypes.string,
    images: React.PropTypes.shape({
      items: React.PropTypes.number,
      url: React.PropTypes.string
    }).isRequired,
    legends: React.PropTypes.array.isRequired
  })
}

export default Ludicas;
