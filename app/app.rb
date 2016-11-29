require 'sinatra/base'

class BankTech < Sinatra::Base

  SAVED_KEYS = {}

  get '/' do
    erb :index
  end

  get "/get" do
    @key = params[:key]
    @value = SAVED_KEYS[params[:key]]
    erb :show
  end

  get '/set' do
    SAVED_KEYS.merge!(params)
    redirect "/"
  end

run! if app_file == $0
end
