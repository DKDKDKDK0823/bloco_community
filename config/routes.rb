Rails.application.routes.draw do
  get "/" => "home#top"
  resources :giveyous
  resources :givemes
  devise_for :users
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
