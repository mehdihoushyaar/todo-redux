// const PRODUCTS = [
//   {
//     id: 1,
//     name: 'Apple',
//     description: 'CCO (Chief Cat Officer)',
//     img: 'http://tachyons.io/img/avatar_1.jpg',
//     price: 100
//   },
//   {
//     id: 2,
//     name: 'Banana',
//     description: 'BANA (Chief Cat Officer)',
//     img: 'http://tachyons.io/img/avatar_1.jpg',
//     price: 320
//   },
//   {
//     id: 3,
//     name: 'Milk',
//     description: 'MILK (Chief Cat Officer)',
//     img: 'http://tachyons.io/img/avatar_1.jpg',
//     price: 650
//   },
//   {
//     id: 4,
//     name: 'Melon',
//     description: 'MELON (Chief Cat Officer)',
//     img: 'http://tachyons.io/img/avatar_1.jpg',
//     price: 500
//   },
//   {
//     id: 5,
//     name: 'Berry',
//     description: 'BERRY (Chief Cat Officer)',
//     img: 'http://tachyons.io/img/avatar_1.jpg',
//     price: 160
//   },
//   {
//     id: 6,
//     name: 'Pomegranate',
//     description: 'BERRY (Chief Cat Officer)',
//     img: 'http://tachyons.io/img/avatar_1.jpg',
//     price: 800
//   }

// ]

// export default PRODUCTS 
const PRODUCTS = () => {
axios
    .get(`https://jsonplaceholder.typicode.com/users/${inputId}`)
    .then(res => dispatch({type:'success', data: res.data}))
    .catch(error => dispatch({type:'error'}))
  }