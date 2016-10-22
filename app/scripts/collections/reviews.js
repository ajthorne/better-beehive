import Backbone from 'backbone';
import Review from '../models/review';

const Reviews = Backbone.Collection.extend({
  model: Review,
  url: ``
})

export default Reviews;
