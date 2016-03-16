
exports.seed = function(knex, Promise) {
  return knex('sermon').del().then(function(){
    return Promise.all([
      knex('sermon').insert({
        id: 1,
        series_title: 'Sex, Lies, & Cyberspace',
        sermon_title: 'Samson & Uncontrolled Urges',
        order: 1,
        speaker: 'Pastor Bruce',
        date_delivered: '1-24-16',
        video: 'http:\/\/player.vimeo.com\/video\/152909059?title=0&byline=0&portrait=0\/',
        active: 'true'
      }),
      knex('sermon').insert({
        id: 2,
        series_title: 'Sex, Lies, & Cyberspace',
        sermon_title: 'Delilah & the Power of Sex',
        order: 2
        speaker: 'Pastor Bruce',
        date_delivered: '1-31-16',
        video: 'http:\/\/player.vimeo.com\/video\/153799999?title=0&byline=0&portrait=0\/',
        active: 'true'
      }),
      knex('sermon').insert({
        id: 3,
        series_title: 'Sex, Lies, & Cyberspace',
        sermon_title: 'David & Adultery\'s Promise',
        order: 3,
        speaker: 'Pastor Bruce',
        date_delivered: '2-7-16',
        video: 'http:\/\/player.vimeo.com\/video\/154616753?title=0&byline=0&portrait=0\/',
        active: 'true'
      }),
      knex('sermon').insert({
        id: 4,
        series_title: 'Sex, Lies, & Cyberspace',
        sermon_title: 'Joseph & A Life of Integrity',
        order: 4,
        speaker: 'Pastor Mike',
        date_delivered: '2-14-16',
        video: 'http:\/\/player.vimeo.com\/video\/155319603?title=0&byline=0&portrait=0\/',
        active: 'true'
      }),
      knex('sermon').insert({
        id: 5,
        series_title: 'All Things New',
        sermon_title: 'The God Who _____!',
        order: 1,
        speaker: 'Pastor Danny',
        date_delivered: '1-3-16',
        video: 'https:\/\/player.vimeo.com\/video\/150612436?title=0&byline=0&portrait=0\/',
        active: 'true'
      }),
      knex('sermon').insert({
        id: 6,
        series_title: 'All Things New',
        sermon_title: 'Letting Go and Laying Hold',
        order: 2,
        speaker: 'Pastor Danny',
        date_delivered: '1-10-16',
        video: 'http:\/\/player.vimeo.com\/video\/151331614?title=0&byline=0&portrait=0\/',
        active: 'true'
      }),
      knex('sermon').insert({
        id: 7,
        series_title: 'All Things New',
        sermon_title: 'The Faith to Move Forward',
        order: 3,
        speaker: 'Pastor Bruce',
        date_delivered: '1-17-16',
        video: 'https:\/\/player.vimeo.com\/video\/152346356?title=0&byline=0&portrait=0\/',
        active: 'true'
      }),
      knex('sermon').insert({
        id: 8,
        series_title: 'To India With Love',
        sermon_title: 'Difference Makers',
        order: 1,
        speaker: 'Pastor Bruce',
        date_delivered: '2-21-16',
        video: 'http:\/\/player.vimeo.com\/video\/156186427?title=0&byline=0&portrait=0\/',
        active: 'true'
      }),
      knex('sermon').insert({
        id: 9,
        series_title: 'To India With Love',
        sermon_title: 'Having the Right Heart',
        order: 2,
        speaker: 'Brian Fielhauer',
        date_delivered: '2-28-16',
        video: 'http:\/\/player.vimeo.com\/video\/157053878?title=0&byline=0&portrait=0\/',
        active: 'true'
      }),
      knex('sermon').insert({
        id: 10,
        series_title: 'To India With Love',
        sermon_title: 'Changing Their Hearts with Love',
        order: 3,
        speaker: 'Pastor Bruce',
        date_delivered: '3-6-16',
        video: 'http:\/\/player.vimeo.com\/video\/157942027?title=0&byline=0&portrait=0\/',
        active: 'true'
      }),
      knex('sermon').insert({
        id: 11,
        series_title: 'Beyond the Door',
        sermon_title: 'A Good Neighbor',
        order: 1,
        speaker: 'Paul Mitton – Executive Minister for Converage Rocky Mountain',
        date_delivered: '3-13-16',
        video: 'http:\/\/player.vimeo.com\/video\/158848769?title=0&byline=0&portrait=0\/',
        active: 'true'
      }),
      knex('sermon').insert({
        id: 12,
        series_title: 'Beyond the Door',
        sermon_title: 'Knowing the End of the Story',
        order: 2,
        // speaker: null,
        date_delivered: '3-20-16',
        // video: null,
        active: 'true'
      }),
      knex('sermon').insert({
        id: 13,
        series_title: 'Elephant in the Room',
        sermon_title: '#JesusisGod?',
        order: 1,
        // speaker: null,
        date_delivered: '3-27-16',
        // video: null,
        active: 'false'
      }),
      knex('sermon').insert({
        id: 14,
        series_title: 'Elephant in the Room',
        sermon_title: '#whyevil',
        order: 2,
        // speaker: null,
        date_delivered: '4-3-16',
        // video: null,
        active: 'false'
      }),
      knex('sermon').insert({
        id: 15,
        series_title: 'Elephant in the Room',
        sermon_title: '#abortion',
        order: 3,
        // speaker: null,
        date_delivered: '4-10-16',
        // video: null,
        active: 'false'
      }),
      knex('sermon').insert({
        id: 16,
        series_title: 'Elephant in the Room',
        sermon_title: '#homosexuality',
        order: 4,
        // speaker: null,
        date_delivered: '4-17-16',
        // video: null,
        active: 'false'
      }),
      knex('sermon').insert({
        id: 17,
        series_title: 'Elephant in the Room',
        sermon_title: '#hypocriticalchurch',
        order: 5,
        // speaker: null,
        date_delivered: '4-24-16',
        // video: null,
        active: 'false'
      }),
      knex('sermon').insert({
        id: 13,
        series_title: 'Elephant in the Room',
        sermon_title: '#hell',
        order: 6,
        // speaker: null,
        date_delivered: '5-1-16',
        // video: null,
        active: 'false'
      })

    ])
  });
};
