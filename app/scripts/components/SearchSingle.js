import React from 'react';
import {Link} from 'react-router';
//passed props key={i} name={name} number={number} address={address} buzzes={buzzes} stings={stings}


const SearchSingle = React.createClass({
  render: function () {
    return (
      <li className="single-review-holder">
        <Link to={`/reviews/${this.props.id}`}><p className="single-review-name"><span>Name: </span>{this.props.name}</p></Link>
        <p className="single-review-number"><span>Number: </span>{this.props.number}</p>
        <p className="single-review-buzzes"><span>Buzzes: </span>{this.props.buzzes}</p>
        <p className="single-review-stings"><span>Stings: </span>{this.props.stings}</p>
      </li>
    )
  }
});

export default SearchSingle;
