import React from 'react';
//passed props id={id} name={name} address={address} number={number} buzzes={buzzes} stings={stings} comment={comment}


const ProfileSingle = React.createClass({
  render: function () {
    // console.log(this.props);
    return (
      <li className="single-business-holder">
        <p>{this.props.name}</p>
        <p>{this.props.address}</p>
        <p>{this.props.number}</p>
        <div className="single-percent-holder">
          <p>{this.props.buzzes}</p>
          <p>{this.props.stings}</p>
        </div>
        <p className="single-comment-holder">
        {this.props.comment.feedback_comment}</p>
      </li>
    )
  }
});

export default ProfileSingle;
