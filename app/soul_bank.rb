require 'sinatra/base'

class BankTech < Sinatra::Base
  get '/' do
    erb :index
  end

  get '/set' do
  end

run! if app_file == $0
end
