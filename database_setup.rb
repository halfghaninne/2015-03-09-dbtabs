require 'pry'
require 'sqlite3'

DATABASE.results_as_hash = true

DATABASE.execute("CREATE TABLE IF NOT EXISTS products 
                  (id INTEGER PRIMARY KEY, 
                  gen_info TEXT,
                  tech_specs TEXT,
                  where_to_buy TEXT)")