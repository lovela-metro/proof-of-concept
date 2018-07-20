Rails.application.routes.draw do

  resources :stations
  root 'stations#index'
  get 'stations/index'
  get 'stations/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
