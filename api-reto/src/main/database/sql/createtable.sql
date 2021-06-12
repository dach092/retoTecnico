create table if not exists products(
    product_id integer primary key autoincrement,
    product_name text not null,
    product_category text not null,
    product_cost float not null,
    product_created text not null,
    product_edited text not null
)

