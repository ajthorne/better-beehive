import React from 'react';

const Search = React.createClass({
  getInitialState: function () {
    //return {
    //reviews: store.reviews.toJSON(),
    //businesses: store.businesses.toJSON()
  // }
  },

  updateState: function () {
    //this.setState({
    //reviews: store.reviews.toJSON(),
    //businesses: store.businesses.toJSON()
  // })
  },
  componentWillMount: function () {
    //fetch/ajax request here
    //store.reviews.fetch()

  },
  componentWillUnmount: function () {
    // store.reviews.off('update change', this.updateState)
    // store.businesses.off('update change', this.updateState)

  }

  render: function () {
    return (
      <section className="search-list">
        <ul>
        </ul>
      </section>
    )
  }
})

export default Search;
