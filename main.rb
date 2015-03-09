require 'sinatra'
require 'pry'
require 'sqlite3'

DATABASE = SQLite3::Database.new("product_info.db")

require_relative 'product.rb'
require_relative 'database_setup.rb'

