/* eslint-disable no-undef */
// const FH_API_ENDPOINT = 'https://foodh.herokuapp.com/api/v1';
const FH_API_ENDPOINT = 'http://127.0.0.1:8000/api/v1';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQsImF1ZCI6ImNyZWRlbnRpYWxzIiwiY3JlZGVudGlhbHMiOnsiZW1haWwiOiJyZXN0MUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQiLCJpZCI6Mn0sImlzcyI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDAwXC9hcGlcL3YxXC9zZXNzaW9uc1Jlc3RhdXJhbnRzIiwiaWF0IjoxNDk5NTQ2MzQ2LCJleHAiOjE1MDAxNTExNDYsIm5iZiI6MTQ5OTU0NjM0NiwianRpIjoibkpNaEQyQk5hOVdOSTRldyJ9.i4BU1cYWmEsxZvwNZ5NwKeVba4xUu503DXrYujSouCE';


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

function activePromotion(promotionId) {
  console.log('API activePromotion');
  fetch(FH_API_ENDPOINT.concat('/restaurants/promotions/promotionsActive'), {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      'promotionId': promotionId
    })
  }).then((response) => {
    return response.json()
  }).then((responseJson) => {
    console.log('Done... I guess: ', responseJson);
      // cb(responseJson.data);
    })
}

const Api = {
  getPromotions,
  activePromotion
};
export default Api;