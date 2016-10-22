import Backbone from 'backbone';
import Review from '../models/review';

const Reviews = Backbone.Collection.extend({
  model: Review,
  url: `https://serene-river-21105.herokuapp.com/reviews/`
});

export default Reviews;
