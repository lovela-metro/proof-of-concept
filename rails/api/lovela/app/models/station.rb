class Station
  include Mongoid::Document
  field :route_id, type: Integer
  field :lineName, type: String
  field :lineStation, type: String
  field :latitude
  field :longitude

  attr_accessor :position
  
  def position
		result = { 
		  :lat => self.latitude,
		  :lng => self.longitude
		}
  end

end



