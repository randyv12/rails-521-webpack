class ApplicationController < ActionController::Base

  def react_component(component:, props:)
    {
      component: component,
      props: props.merge(mountScript: Webpacker.manifest.lookup(self.controller_name + '/' + self.action_name + '.js')),
      tag: 'html',
      layout: false,
      prerender: :static
    }

  end

end
