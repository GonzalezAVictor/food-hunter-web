/* eslint-disable no-undef */
const FH_API_ENDPOINT = 'https://foodh.herokuapp.com/api/v1';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQsImF1ZCI6ImNyZWRlbnRpYWxzIiwiY3JlZGVudGlhbHMiOnsiZW1haWwiOiJyZXN0MUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQiLCJpZCI6MTMyfSwiaXNzIjoiaHR0cDpcL1wvZm9vZGguaGVyb2t1YXBwLmNvbVwvYXBpXC92MVwvc2Vzc2lvbnNSZXN0YXVyYW50cyIsImlhdCI6MTQ5OTQ5NTUzMiwiZXhwIjoxNTAwMTAwMzMyLCJuYmYiOjE0OTk0OTU1MzIsImp0aSI6ImpqTjdMcE1SUHc0VlFiZ0EifQ.E4GgcH0TKDwJv0wyKgjdUdOReMMqNTtGkHQB_gI8OiI';


function getPromotions(cb) {
  console.log('Api getPromotions');
  fetch(FH_API_ENDPOINT.concat('/restaurants/132/promotions'), {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((response) => {
    console.log('lalalala');
    response.json();
  }).then((responseJson) => {
      cb(responseJson.data);
    })
}


const Api = {
  // add here whats new
  getPromotions
};
export default Api;