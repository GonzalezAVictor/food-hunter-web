/* eslint-disable no-undef */
// const FH_API_ENDPOINT = 'https://foodh.herokuapp.com/api/v1';
const FH_API_ENDPOINT = 'http://127.0.0.1:8000/api/v1';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQsImF1ZCI6ImNyZWRlbnRpYWxzIiwiY3JlZGVudGlhbHMiOnsiZW1haWwiOiJyZXN0MUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQiLCJpZCI6Mn0sImlzcyI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDAwXC9hcGlcL3YxXC9zZXNzaW9uc1Jlc3RhdXJhbnRzIiwiaWF0IjoxNTAwMzU2MTcyLCJleHAiOjE1MDA5NjA5NzIsIm5iZiI6MTUwMDM1NjE3MiwianRpIjoidjlRUTlUb3RGd01xWDl5WCJ9.5VAD18kmwXRQOFYR1DNFO01OauSHuourVK7D89Lgf18';


function getPromotions(cb) {
  console.log('Api getPromotions');
  fetch(FH_API_ENDPOINT.concat('/restaurants/promotions/all'), {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`

    }
  })
  .then((response) => response.json())
  .then((responseJson) => {
      cb(responseJson.data);
    })
}

function getRestaurantData(cb) {
  console.log('Api getRestaurantData');
  fetch(FH_API_ENDPOINT.concat('/restaurants/2'), {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`

    }
  })
  .then((response) => response.json())
  .then((responseJson) => {
      cb(responseJson.data);
    })
}

function activePromotion(promotion) {
  console.log('API activePromotion');
  fetch(FH_API_ENDPOINT.concat('/restaurants/promotions/promotionsActive'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(promotion)
  }).then((response) => {
    return response.json()
  }).then((responseJson) => {
    console.log('Done... I guess: ', responseJson);
      // cb(responseJson.data);
    })
}

function createPromotion(promotion) {
  console.log('API createPromotion');
  fetch(FH_API_ENDPOINT.concat('/restaurants/promotions'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      name: promotion.name,
      details: promotion.details,
      promotion_type: promotion.promotion_type,
      category_id: promotion.category_id
    })
  }).then((response) => {
    console.log('satus: ',response.status);
    return response.json()
  }).then((responseJson) => {
    console.log('responseJson: ', responseJson);
      // cb(responseJson.data);
    })
}

function deletePromotion(promotionId) {
  console.log('API deletePromotion');
  fetch(FH_API_ENDPOINT.concat(`/restaurants/promotions/${promotionId}`), {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then((response) => {
    console.log('satus: ',response.status);
    return response.json()
  }).then((responseJson) => {
    console.log('responseJson: ', responseJson);
      // cb(responseJson.data);
    })
}

const Api = {
  getPromotions,
  activePromotion,
  getRestaurantData,
  createPromotion,
  deletePromotion
};
export default Api;