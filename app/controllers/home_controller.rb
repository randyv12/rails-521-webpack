
class HomeController < ApplicationController

  def index
    render react_component component: 'home/page', props: {foo: 1}
  end
end
