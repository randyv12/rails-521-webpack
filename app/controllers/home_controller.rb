
class HomeController < ApplicationController

  def index

    render react_component component: 'home/index', props: {}
  end
end
