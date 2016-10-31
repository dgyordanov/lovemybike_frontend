const offersList = [
  {
  	"id": 1,
    "title": "Haibaike big curve",
    "imageUrl": "./img/offer_1.jpg",
    "price": 24.99,
    "description": "Short description of this bike which should be at most this size 3-4 rows",
    "gender": "m"
  },
  {
  	"id": 2,
    "title": "Haibaike big curve",
    "imageUrl": "./img/offer_2.jpg",
    "price": 24.99,
    "description": "Short description of this bike which should be at most this size 3-4 rows",
    "gender": "w"
  },
  {
  	"id": 3,
    "title": "Haibaike big curve",
    "imageUrl": "./img/offer_3.jpg",
    "price": 24.99,
    "description": "Short description of this bike which should be at most this size 3-4 rows",
    "gender": "w"
  },
  {
  	"id": 4,
    "title": "Haibaike big curve",
    "imageUrl": "./img/offer_4.jpg",
    "price": 24.99,
    "description": "Short description of this bike which should be at most this size 3-4 rows",
    "gender": "m"
  },
  {
    "id": 5,
    "title": "Haibaike big curve",
    "imageUrl": "./img/offer_2.jpg",
    "price": 24.99,
    "description": "Short description of this bike which should be at most this size 3-4 rows",
    "gender": "m"
  },
  {
    "id": 6,
    "title": "Haibaike big curve",
    "imageUrl": "./img/offer_1.jpg",
    "price": 24.99,
    "description": "Short description of this bike which should be at most this size 3-4 rows",
    "gender": "m"
  },
  {
    "id": 7,
    "title": "Haibaike big curve",
    "imageUrl": "./img/offer_4.jpg",
    "price": 24.99,
    "description": "Short description of this bike which should be at most this size 3-4 rows",
    "gender": "w"
  }
]

const offers = (state = offersList, action) => {
  // TODO - read the offers from a rest service
  switch (action.type) {
    case 'APPLY_FILTERS':
      if (!action.filters.w && !action.filters.m && !action.filters.c){
        return offersList;
      }

      // TODO improve it
      let result = offersList;
      if (!action.filters.w) {
        result = result.filter(offer => offer.gender !== "w");
      }
      if (!action.filters.m) {
        result = result.filter(offer => offer.gender !== "m");
      }
      if (!action.filters.c) {
        result = result.filter(offer => offer.gender !== "c");
      }
      return result;

    default:
      return state

  }
  return state;
}

export default offers
