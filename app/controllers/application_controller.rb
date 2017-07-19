class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :required_logged_in

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    user.reset_token
    @current_user = user
    session[:session_token] = user.session_token
  end

  def logged_in?
    !!current_user
  end

  def log_out!
    current_user.try(:reset_token)
    session[:session_token] = nil
    @current_user = nil
  end

  def required_logged_in
    render json: { errors: ['Invalid Credentials!'] }, status: 401 unless current_user
  end

end
