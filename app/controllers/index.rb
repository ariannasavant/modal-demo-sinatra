get '/' do
  @current_user = session[:user]
  erb :index
end

get '/signin' do
  erb :signin
end

post '/signin' do

end
