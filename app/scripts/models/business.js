import Backbone from 'backbone';

const Business = Backbone.Model.extend({
  urlRoot: ``,
  defaults: {
    businessId: '',
    name: '',
    phoneNumber: '',
    type: '',
    buzzes: 0,
    stings: 0
  }
});

export default Business;
