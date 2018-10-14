class ApplicationController < ActionController::Base

  def react_component(component:, props:)
    {
      component: component,
      props: {mount_path: Webpacker.manifest.lookup(self.controller_name + '/' + self.action_name + '.js')}.merge(props),
      tag: 'html',
      layout: false
    }

  end

end
