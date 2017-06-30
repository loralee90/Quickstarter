Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :projects, except: [:new, :edit] do
      get "search", on: :collection
    end
    resources :categories, only: [:index, :show]
    resources :pledges, only: [:create]
  end
end
