Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :update, :show] do
      resources :boards, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :pins, only: [:index, :create, :show, :update, :destroy]
    resources :boards, only: [:show, :create, :destroy]
    resources :pinnings, only: [:create, :destroy, :index]
    resources :followings, only:[:create, :destroy]
    resources :searches, only: [:index]
  end

  root "static_pages#root"
end
