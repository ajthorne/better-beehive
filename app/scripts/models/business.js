import Backbone from 'backbone';

const Business = Backbone.Model.extend({
  urlRoot: `https://serene-river-21105.herokuapp.com/businesses/`,
  // defaults: {
  //   businessId: '',
  //   name: '',
  //   phoneNumber: '',
  //   type: '',
  //   // buzzes: 0,
  //   stings: 0
  // }
});

export default Business;
