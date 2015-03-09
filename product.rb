require 'pry'
require 'sinatra'
require 'sqlite3'

require_relative 'database_setup.rb'

class Product
  
  def initialize(options)
    @id = options["id"]
    @gen_info = options["gen_info"]
    @tech_specs = options["tech_specs"]
    @where_to_buy = options["where_to_buy"]
  end
  
  def insert
    DATABASE.execute("INSERT INTO products (gen_info, tech_specs, where_to_buy
                      VALUES ('#{@gen_info}', '#{@tech_specs}', '#{@where_to_buy}'))")
    @id = DATABASE.last_insert_row_id
  end
  
  def update(field, value)
    DATABASE.execute("UPDATE products SET '#{field}' = '#{value}' WHERE id = #{@id}")
  end
  
  def to_hash
    {
      id: id,
      gen_info: gen_info,
      tech_specs: tech_specs,
      where_to_buy: where_to_buy
    }
  end
  
end