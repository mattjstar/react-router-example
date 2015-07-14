# Reserve a database connection for New Relic EXPLAIN queries
threads_count = Integer(ENV['MAX_THREADS'] || 5) - 1

workers Integer(ENV["WEB_CONCURRENCY"] || 2)
threads threads_count, threads_count

rackup      DefaultRackup
port        ENV['PORT']     || 3000
environment ENV['RACK_ENV'] || 'development'

preload_app!

on_worker_boot do
  ActiveRecord::Base.establish_connection
end
