import Backbone from 'backbone';

const Review = Backbone.Model.extend({
  urlRoot: `https://serene-river-21105.herokuapp.com/reviews/search`,
  // defaults: {
  //   id: '',
  //   feedbackComment: '',
  //   feedbackType: '',
  //   relationshipType: ''
  // }
});

export default Review;
