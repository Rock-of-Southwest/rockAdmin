

exports.up = function(knex, Promise) {
  return knex.schema.createTable('series', function(table){
    table.increments();
    table.varchar('series_title').unique();
    table.varchar('subtitle');
    table.varchar('description');
    table.dateTime('first_date');
    table.dateTime('last_date');
    table.varchar('main_image');
    table.varchar('notes_image');
    table.boolean('active');
  }).then(function(){
    return knex.schema.createTable('sermon', function(table){
    table.increments();
    table.string('seriestitle').references('series_title').inTable('series');
    table.integer('order');
    table.varchar('sermon_title').unique();
    table.varchar('speaker');
    table.varchar('video');
    table.dateTime('date_delivered');
    table.boolean('active');
  })}).then(function(){
    return knex.schema.createTable('notes', function(table){
    table.increments();
    table.string('sermontitle').references('sermon_title').inTable('sermon');
    table.string('item_type');
    table.string('item_sequence');
    table.text('item_text');
  })})
};

exports.down = function(knex, Promise) {
  return Promise.all([

    knex.schema.dropTable('notes'),
    knex.schema.dropTable('sermon'),
    knex.schema.dropTable('series')

  ])
};
