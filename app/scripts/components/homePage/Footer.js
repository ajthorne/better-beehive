import React from 'react';

const Footer = React.createClass({
  submitHandler: function (e) {
    e.preventDefault();
    console.log('Not working just yet...;)');
  },
  render: function () {
    return (
      <footer>
        <form onClick={this.submitHandler} className="subscribe-holder">
          <h1>Subscribe</h1>
          <input type="email" placeholder="example@gmail.com"/>
          <input type="submit" value="Submit"/>
        </form>
        <div className="contact-holder">
          <h1>Contact Us</h1>
          <p>info@betterbeehive.com</p>
        </div>
        <div className="social-media-holder">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-instagram"></i>
        </div>
        <p className="copyright">© 2016 Copyright Better Beehive Project</p>
      </footer>
    )
  }
})

export default Footer;
