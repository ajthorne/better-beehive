import Business from './models/business';
import Businesses from './collections/businesses';
import Review from '.models/review';
import Reviews from './collections/reviews';

let store = {
  business: new Business(),
  //access using store.business

  businesses: new Businesses(),
  //access using store.businesses

  review: new Review(),
  //access using store.review

  reviews: new Reviews()
  //access using store.reviews

}

export default store;
