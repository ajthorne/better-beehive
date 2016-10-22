import Backbone from 'backbone';

const Review = Backbone.Model.extend({
  urlRoot: ``,
  defaults: {
    businessId: '',
    feedbackComment: '',
    feedbackType: '',
    relationshipType: ''
  }
})

export default Review;
