get '/' do
  @current_user = session[:user]
  erb :index
end

get '/signin' do
  erb :signin
end

post '/signin' do
  user = User.find_or_create_by_email(params[:email])
  user.password = params[:password]
  user.save
  session[:user] = true
  redirect '/'
end
