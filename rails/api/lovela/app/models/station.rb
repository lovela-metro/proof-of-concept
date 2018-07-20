class Station
  include Mongoid::Document
  field :route_id, type: Integer
  field :lineName, type: String
  field :lineStation, type: String
  field :latitude
  field :longitude
end
