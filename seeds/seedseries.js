
exports.seed = function(knex, Promise) {
  return knex('series').del().then(function(){
    return Promise.all([
      knex('series').insert({
        id: 1,
        series_title: 'All Things New',
        // subtitle: null,
        description: 'It is way too easy to protect our past instead of creating the future. God is a God of new things. Based upon Isaiah 43:16-21, “See, I am doing a new thing! Now it springs up; do you not perceive it?”',
        first_date: '1-3-16',
        last_date: '1-17-16',
        main_image: '../images/allThingsNew.jpg',
        notes_image: '../images/allThingsNew.jpg'
        active: 'true'
      }),
      knex('series').insert({
        id: 2,
        series_title: 'Sex, Lies, & Cyberspace',
        // subtitle: null,
        description: 'Whether it’s porn or chat rooms, adultery or body image, we’ve got a problem, and it isn’t just “out there” it is “in here” with God’s people. Join us as we look at sex in the American church while learning from some of the Biblical characters of the Old Testament: Sampson, Delilah, King David and Joseph.',
        first_date: '1-24-16',
        last_date: '2-14-16',
        main_image: '../images/sexLiesAndCyberspace.jpg',
        notes_image: '../images/sexLiesAndCyberspace.jpg'
        active: 'true'
      }),
      knex('series').insert({
        id: 3,
        series_title: 'To India With Love',
        // subtitle: null,
        description: 'The world is crying out to be loved! Whether it is in India, China, England or America, people have a God shaped need that is not being filled unless Jesus Christ becomes the center-piece of their heart. Join us as we make it a priority to do all we can in order to minister and uplift one of the most populated areas of the world: India.',
        first_date: '2-21-16',
        last_date: '3-6-16',
        main_image: '../images/toIndiaWithLove.jpg',
        notes_image: '../images/toIndiaWithLove.jpg'
        active: 'true'
      }),
      knex('series').insert({
        id: 4,
        series_title: 'Beyond the Door',
        // subtitle: null,
        description: 'Since each of us are to represent God to a struggling and hurting world, it would help if we actually left the walls of the church or our own home, and entered into the community. Maybe it’s time we take a step toward them and go beyond our own doors. Because beyond that door is a world waiting for hope, love and faith.',
        first_date: '3-13-16',
        last_date: '3-20-16',
        main_image: '../images/beyondTheDoor.jpg',
        notes_image: '../images/beyondTheDoor.jpg'
        active: 'true'
      }),
      knex('series').insert({
        id: 5,
        series_title: 'Elephant in the Room',
        // subtitle: null,
        // description: null,
        first_date: '3-27-16',
        last_date: '5-1-16',
        main_image: '../images/elephantInTheRoom.jpg',
        notes_image: '../images/elephantInTheRoom.jpg'
        active: 'false'
      })
    ])
  });
};
