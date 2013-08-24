require 'sinatra'
require 'json'

before do
  content_type 'application/json'
end

get '/api/hello' do
  { text: 'hello world' }.to_json
end

post '/api/hello' do
  params['name'].sub!(/[a-z]/) { |s| s.upcase }
  params['age'].sub!(/\d+/) { |d| d.to_f / 2 }
  params.to_json
end
