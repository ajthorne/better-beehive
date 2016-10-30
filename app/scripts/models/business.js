import Backbone from 'backbone';

const Business = Backbone.Model.extend({
  urlRoot: `https://serene-river-21105.herokuapp.com/reviews/`,
  defaults: {
    id: '',
    name: '',
    business_type: '',
    phone_number: '',
    zip_code: '',
    address: '',
    buzzes: 0,
    stings: 0
  }
});

export default Business;
