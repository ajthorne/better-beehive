import Backbone from 'backbone';
import Business from '../models/business';

const Businesses = Backbone.Collection.extend({
  model: Business,
  url: `https://serene-river-21105.herokuapp.com/businesses/`
});

export default Businesses;
