# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks

# http://stackoverflow.com/a/20080120
Rake::Task["assets:precompile"].enhance do
  return "can't run in dev" if Rails.env.development?
  puts 'my assets:precompile hook is started!'
  ["#{Dir.pwd}/public/", "#{Dir.pwd}/app/assets/"].each do |dir_path|
    records = Dir.glob("#{dir_path}**/*")
    records.each do |f|
      next if f =~ /webfonts/ or f =~ /sitemaps/ or f =~ /sounds/
      if f =~ /.*.png$/ or
        f =~ /.*.jpg$/ or
        f =~ /.*.gif$/ or
        f =~ /.*.ico$/ or
        f =~ /.*.eot$/ or
        f =~ /.*.svg$/ or
        f =~ /.*.woff$/ or
        f =~ /.*.ttf$/ or
        f =~ /.*.otf$/ or
        f =~ /.*.css$/ or
        f =~ /.*.js$/ or
        f =~ /.*.sass$/ or
        f =~ /.*.css$/ or
        f =~ /.*.scss$/ or
        f =~ /.*.coffee$/ or
        f =~ /.*.wav$/ then
        File.delete(f)
        puts "removing #{f}"
      end
    end
    puts Dir.glob("#{dir_path}**/*")
  end
  puts 'my assets:precompile hook is finished!'
end
