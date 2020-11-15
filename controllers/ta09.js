
const fetch = require('node-fetch');
const pokePrev = []; 
const pokeNext = [];

exports.postTeam09 = (req, res, next) => {
    res.redirect('/ta09');
}; 


exports.getTeam09 = (req, res, next) => {
  const page = +req.query.page || 1;
  fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
  .then(res => res.json())
  .then(resResponse => {res.render('pages/ta09', {
    title: 'Team Activity 09', 
    path: '/ta09', // For pug, EJS 
    data: resResponse.results, 
    pokeNext: resResponse.results, 
    pokePrev: resResponse.results
  })
})
.catch(err => console.log(err)); 
}


exports.getTeam09Next = (req, res, next) => {
    const page = +req.query.page || 1;
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
    .then(res => res.json())
    .then(resResponse => {res.render('pages/ta09', {
      title: 'Team Activity 09', 
      path: '/ta09/next', // For pug, EJS 
      data: pokeNext.next, 
    })
  })
  .catch(err => console.log(err)); 
  }

  exports.getTeam09Prev = (req, res, next) => {
    const page = +req.query.page || 1;
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
    .then(res => res.json())
    .then(resResponse => {res.render('pages/ta09', {
      title: 'Team Activity 09', 
      path: '/ta09/prev', // For pug, EJS 
      data: pokePrev.previous, 
    })
  })
  .catch(err => console.log(err)); 
  }

