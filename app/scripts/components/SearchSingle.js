import React from 'react';
import {Link} from 'react-router';
//passed props key={i} name={name} number={number} address={address} buzzes={buzzes} stings={stings}


const SearchSingle = React.createClass({
  render: function () {
    let buzzImg;

    if (this.props.buzzes > 70) {
      buzzImg = <img className="buzzImg" src="../../../assets/images/Buzzworthy.png"/>
    } else if (this.props.buzzes < 50) {
      buzzImg = <img className="buzzImg" src="../../../assets/images/Sting.png"/>
    } else {
      buzzImg = <img className="buzzImg" src="../../../assets/images/Buzz.png"/>

    }
    return (
      <li className="single-review-holder">
        <div className="rating">
          <p className="single-review-buzzes">{this.props.buzzes}<span>%</span></p>
          {buzzImg}
          <Link to={`/reviews/${this.props.id}`}><p className="single-review-name">{this.props.name}</p></Link>
        </div>
        <div className="contact">
          <p className="single-review-number">{this.props.number}</p>
          <p className="single-review-address">{this.props.address}</p>
        </div>
      </li>
    )
  }
});

export default SearchSingle;

// <p className="single-review-stings"><span>Stings: </span>{this.props.stings}<span>%</span></p>
