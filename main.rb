require 'sinatra'
require 'pry'
require 'sqlite3'
require 'json'

DATABASE = SQLite3::Database.new("product_info.db")

require_relative 'models/product.rb'
require_relative 'models/database_setup.rb'

get "/" do
  erb :homepage
end

post "/all" do
  all_products = Product.all
  
  products_hash = all_products.map {|p| p.to_hash}
  products_hash.to_json
end