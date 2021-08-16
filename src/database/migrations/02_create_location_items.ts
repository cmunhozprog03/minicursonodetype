import Knex from "knex";

export async function up(knex: Knex){
  return knex.schema.createTable('locatuion_items', table => {
    table.increments('id').primary();
    table.string('location_id')
      .notNullable()
      .references('id')
      .inTable('locations');

    table.string('item_id')
      .notNullable()
      .references('id')
      .inTable('items');
    
  });
}


export async function down(knex: Knex){
  return knex.schema.dropTable('locatuion_items');
}