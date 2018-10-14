
class HomeController < ApplicationController

  def index
    render react_component component: 'home/page', props: {}
  end
end
