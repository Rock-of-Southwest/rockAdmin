
exports.seed = function(knex, Promise) {
  return knex('notes').del().then(function(){
    return Promise.all([
      knex('notes').insert({
        id: 1,
        sermontitle: 'A Good Neighbor',
        item_type: 'mainverse',
        item_text: 'Luke 10:25-37'
      }),
      knex('notes').insert({
        id: 2,
        sermontitle: 'A Good Neighbor',
        item_type: 'quote',
        item_text: '"Engage: Reaching Your World One Neighbor At A Time"'
      }),
      knex('notes').insert({
        id: 3,
        sermontitle: 'A Good Neighbor',
        item_type: 'header1',
        item_text: 'Good Neighbors...'
      }),
      knex('notes').insert({
        id: 4,
        sermontitle: 'A Good Neighbor',
        item_type: 'point',
        item_sequence: 1,
        item_text: 'Travel on the {{  }} side of the road.'
      }),
      knex('notes').insert({
        id: 5,
        sermontitle: 'A Good Neighbor',
        item_type: 'subpoint',
        item_text: 'Are you traveling at the pace and in a place where you can see the needy around you?'
      }),
      knex('notes').insert({
        id: 6,
        sermontitle: 'A Good Neighbor',
        item_type: 'point',
        item_sequence: 2,
        item_text: 'Express love through {{   }}'
      }),
      knex('notes').insert({
        id: 7,
        sermontitle: 'A Good Neighbor',
        item_type: 'subpoint',
        item_text: 'Where can you put love into action this Easter?'
      }),
      knex('notes').insert({
        id: 8,
        sermontitle: 'A Good Neighbor',
        item_type: 'point',
        item_sequence: 3,
        item_text: 'Live life with {{   }}'
      }),
      knex('notes').insert({
        id: 9,
        sermontitle: 'A Good Neighbor',
        item_type: 'subpoint',
        item_text: 'What has God blessed you with so that you can bless others?'
      }),
      knex('notes').insert({
        id: 10,
        sermontitle: 'A Good Neighbor',
        item_type: 'header1',
        item_text: 'The Parable of the Good Samaritan'
      }),
      knex('notes').insert({
        id: 11,
        sermontitle: 'A Good Neighbor',
        item_type: 'verse',
        item_text: 'Luke 10:25-37'
      }),
      knex('notes').insert({
        id: 12,
        sermontitle: 'A Good Neighbor',
        item_type: 'versetext',
        item_text: 'On one occasion an expert in the law stood up to test Jesus. "Teacher," he asked, “what must I do to inherit eternal life?” <br>“What is written in the Law?” he replied. “How do you read it?” <br>He answered, “‘Love the Lord your God with all your heart and with all your soul and with all your strength and with all your mind’; and, ‘Love your neighbor as yourself.’” <br>“You have answered correctly,” Jesus replied. “Do this and you will live.” <br>But he wanted to justify himself, so he asked Jesus, “And who is my neighbor?” <br> In reply Jesus said: “A man was going down from Jerusalem to Jericho, when he was attacked by robbers. They stripped him of his clothes, beat him and went away, leaving him half dead. A priest happened to be going down the same road, and when he saw the man, he passed by on the other side. So too, a Levite, when he came to the place and saw him, passed by on the other side. But a Samaritan, as he traveled, came where the man was; and when he saw him, he took pity on him. He went to him and bandaged his wounds, pouring on oil and wine. Then he put the man on his own donkey, brought him to an inn and took care of him. The next day he took out two denarii and gave them to the innkeeper. ‘Look after him,’ he said, ‘and when I return, I will reimburse you for any extra expense you may have.’ <br>“Which of these three do you think was a neighbor to the man who fell into the hands of robbers?” <br>The expert in the law replied, “The one who had mercy on him.” <br>Jesus told him, “Go and do likewise.”'
      }),

    ])
  });
};
