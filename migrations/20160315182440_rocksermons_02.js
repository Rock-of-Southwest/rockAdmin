

exports.up = function(knex, Promise) {
  return knex.schema.createTable('series', function(table){
    table.varchar('series_title').unique().primary();
    table.varchar('subtitle');
    table.text('description');
    table.dateTime('first_date');
    table.dateTime('last_date');
    table.varchar('main_image');
    table.varchar('notes_image');
    table.boolean('active');
  }).then(function(){
    return knex.schema.createTable('sermon', function(table){
    table.string('seriestitle').references('series_title').inTable('series');
    table.integer('order');
    table.varchar('sermon_title').unique().primary();
    table.varchar('speaker');
    table.varchar('video');
    table.dateTime('date_delivered');
    table.boolean('active');
  })}).then(function(){
    return knex.schema.createTable('notes', function(table){
    table.increments().primary;
    table.varchar('sermontitle').references('sermon_title').inTable('sermon');
    table.varchar('item_type');
    table.string('item_sequence');
    table.text('item_text');
  })}).then(function(){
    return knex.schema.createTable('noteSubmission', function(table){
      table.increments();
      table.string('userid');
      table.varchar('sermontitle').references('sermon_title').inTable('sermon');
    })
  }).then(function(){
    return knex.schema.createTable('noteAnswers', function(table){
      table.increments();
      table.integer('noteId').references('id').inTable('notes');
      table.text('answer');
      table.integer('submissionId').references('id').inTable('noteSubmission')
    })
  })
};

exports.down = function(knex, Promise) {
  return Promise.all([

    knex.schema.dropTable('notes'),
    knex.schema.dropTable('sermon'),
    knex.schema.dropTable('series')

  ])
};
