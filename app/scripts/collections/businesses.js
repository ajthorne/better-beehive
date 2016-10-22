import Backbone from 'backbone';
import Business from '../models/business';

const Businesses = Backbone.Collection.extend({
  model: Business,
  url: ``
})

export default Businesses;
