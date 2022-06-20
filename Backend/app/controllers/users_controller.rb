class UsersController < ApplicationController

    get '/signup' do
      if logged_in?
        redirect '/tasks'
      else
      erb :'users/signup'
      end
    end
  
    post '/signup' do
      if params[:username] == "" || params[:password] == ""
        redirect '/signup'
      elsif params[:username] = User.find_by(:username => params[:username])
        redirect '/login'
      else
        @user = User.create(:username => params[:username], :password => params[:password])
        session[:user_id] = @user.id
      redirect '/tasks'
      end
    end
  
    get '/login' do
      if logged_in?
        redirect '/tasks'
      else
        erb :'users/login'
      end
    end
  
    post '/login' do
      @user = User.find_by(:username => params[:username])
      if @user && @user.authenticate(params[:password])
        session[:user_id] = @user.id
        redirect '/tasks'
      else
        redirect '/login'
      end
    end
  
    get '/logout' do
      if session[:user_id] != nil
        session.clear
        redirect to '/login'
      else
        redirect to '/'
      end
    end
  
  end