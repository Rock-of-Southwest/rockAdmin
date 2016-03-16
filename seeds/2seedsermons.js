
exports.seed = function(knex, Promise) {
  return knex('sermon').del().then(function(){
    return Promise.all([
      knex('sermon').insert({
        seriestitle: 'Sex, Lies, & Cyberspace',
        sermon_title: 'Samson & Uncontrolled Urges',
        order: 1,
        speaker: 'Pastor Bruce',
        date_delivered: '1-24-16',
        video: 'http://player.vimeo.com/video/152909059?title=0&byline=0&portrait=0/',
        active: 'true'
      }),
      knex('sermon').insert({
        seriestitle: 'Sex, Lies, & Cyberspace',
        sermon_title: 'Delilah & the Power of Sex',
        order: 2,
        speaker: 'Pastor Bruce',
        date_delivered: '1-31-16',
        video: 'http://player.vimeo.com/video/153799999?title=0&byline=0&portrait=0/',
        active: 'true'
      }),
      knex('sermon').insert({
        seriestitle: 'Sex, Lies, & Cyberspace',
        sermon_title: "David & Adultery's Promise",
        order: 3,
        speaker: 'Pastor Bruce',
        date_delivered: '2-7-16',
        video: 'http://player.vimeo.com/video/154616753?title=0&byline=0&portrait=0/',
        active: 'true'
      }),
      knex('sermon').insert({
        seriestitle: 'Sex, Lies, & Cyberspace',
        sermon_title: 'Joseph & A Life of Integrity',
        order: 4,
        speaker: 'Pastor Mike',
        date_delivered: '2-14-16',
        video: 'http://player.vimeo.com/video/155319603?title=0&byline=0&portrait=0/',
        active: 'true'
      }),
      knex('sermon').insert({
        seriestitle: 'All Things New',
        sermon_title: 'The God Who _____!',
        order: 1,
        speaker: 'Pastor Danny',
        date_delivered: '1-3-16',
        video: 'https://player.vimeo.com/video/150612436?title=0&byline=0&portrait=0/',
        active: 'true'
      }),
      knex('sermon').insert({
        seriestitle: 'All Things New',
        sermon_title: 'Letting Go and Laying Hold',
        order: 2,
        speaker: 'Pastor Danny',
        date_delivered: '1-10-16',
        video: 'http://player.vimeo.com/video/151331614?title=0&byline=0&portrait=0/',
        active: 'true'
      }),
      knex('sermon').insert({
        seriestitle: 'All Things New',
        sermon_title: 'The Faith to Move Forward',
        order: 3,
        speaker: 'Pastor Bruce',
        date_delivered: '1-17-16',
        video: 'https://player.vimeo.com/video/152346356?title=0&byline=0&portrait=0/',
        active: 'true'
      }),
      knex('sermon').insert({
        seriestitle: 'To India With Love',
        sermon_title: 'Difference Makers',
        order: 1,
        speaker: 'Pastor Bruce',
        date_delivered: '2-21-16',
        video: 'http://player.vimeo.com/video/156186427?title=0&byline=0&portrait=0/',
        active: 'true'
      }),
      knex('sermon').insert({
        seriestitle: 'To India With Love',
        sermon_title: 'Having the Right Heart',
        order: 2,
        speaker: 'Brian Fielhauer',
        date_delivered: '2-28-16',
        video: 'http://player.vimeo.com/video/157053878?title=0&byline=0&portrait=0/',
        active: 'true'
      }),
      knex('sermon').insert({
        seriestitle: 'To India With Love',
        sermon_title: 'Changing Their Hearts with Love',
        order: 3,
        speaker: 'Pastor Bruce',
        date_delivered: '3-6-16',
        video: 'http://player.vimeo.com/video/157942027?title=0&byline=0&portrait=0/',
        active: 'true'
      }),
      knex('sermon').insert({
        seriestitle: 'Beyond the Door',
        sermon_title: 'A Good Neighbor',
        order: 1,
        speaker: 'Paul Mitton – Executive Minister for Converage Rocky Mountain',
        date_delivered: '3-13-16',
        video: 'http://player.vimeo.com/video/158848769?title=0&byline=0&portrait=0/',
        active: 'true'
      }),
      knex('sermon').insert({
        seriestitle: 'Beyond the Door',
        sermon_title: 'Knowing the End of the Story',
        order: 2,
        date_delivered: '3-20-16',
        active: 'true'
      }),
      knex('sermon').insert({
        seriestitle: 'Elephant in the Room',
        sermon_title: '#JesusisGod?',
        order: 1,
        date_delivered: '3-27-16',
        active: 'false'
      }),
      knex('sermon').insert({
        seriestitle: 'Elephant in the Room',
        sermon_title: '#whyevil',
        order: 2,
        date_delivered: '4-3-16',
        active: 'false'
      }),
      knex('sermon').insert({
        seriestitle: 'Elephant in the Room',
        sermon_title: '#abortion',
        order: 3,
        date_delivered: '4-10-16',
        active: 'false'
      }),
      knex('sermon').insert({
        seriestitle: 'Elephant in the Room',
        sermon_title: '#homosexuality',
        order: 4,
        date_delivered: '4-17-16',
        active: 'false'
      }),
      knex('sermon').insert({
        seriestitle: 'Elephant in the Room',
        sermon_title: '#hypocriticalchurch',
        order: 5,
        date_delivered: '4-24-16',
        active: 'false'
      }),
      knex('sermon').insert({
        seriestitle: 'Elephant in the Room',
        sermon_title: '#hell',
        order: 6,
        date_delivered: '5-1-16',
        active: 'false'
      })

    ])
  });
};
