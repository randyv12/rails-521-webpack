# README

This is a boiler plate project for rendering full react pages in Rails with Typescript.

## This uses
* Webpacker
* React-Rails
* Typescript
* Material UI
* The ruby racer JS engine
* Latest packages as of Oct 17, 2018

## Resources

* https://github.com/reactjs/react-rails#controller-actions
* https://github.com/rails/webpacker
* https://stackoverflow.com/questions/43739067/is-window-initial-state-still-the-preferred-way-to-pass-initial-state-to-the

## Ruby version

* 2.3.1

## System dependencies

* Recommended Node version 10.8.0

## Configuration

* Clone the repo
* Install RVM https://rvm.io/rvm/install
* Create your own gemset (rvm gemset create 2.3.1@rails-521-webpack)
* Install yarn https://yarnpkg.com/lang/en/docs/install/#mac-stable
* Bundle install gems
* Install npm packages

```bundle```

```yarn install```

## How to run

```rails s```

```./bin/webpack-dev-server```



## How does it work?

* The controller renders the react component, which itself includes a react mount script
* The mount script loads the entry point on pageload after server-side rendering statically
* See pic

![How it works](/HowItWorks.png)

# Before jumping in, relevant information regarding file paths

* app/javascript/components - (Components) example: app/javascript/components/Page.tsx
* app/javascript/packs - (Entry points) example: app/javascript/packs/home/index.tsx

## How to code!

### Render the react component from a controller's action
```ruby
class HomeController < ApplicationController
  def index
    render react_component component: 'home/index', props: {}
  end
end
```

### The helper function react_component wraps the react rails controller renderer to server-side render statically
```ruby
  def react_component(component:, props:)
    {
      component: component,
      props: props.merge(mountScript: Webpacker.manifest.lookup(component + '.js')),
      tag: 'html',
      layout: false,
      prerender: :static
    }

  end
```

### Create an entry point which exports a single React component which includes the page mount script and also includes the pagify script

```app/javascript/packs/home/index.tsx```

```javascript
class PageContent extends React.Component<any, any> {

  render() {
    return (
      <div>
        Page Stuff
      </div>
    );
  }
}
mount()(PageContent);
export default pagify()(PageContent);
```
### This prepares your component to be exported for SSR (server-side-render) and allows it to be mounted on the client-side
### The pagify wrapper will wrap the PageContent with html head and body tags

```app/javascript/utils/pagify.tsx```
```javascript
export const pagify = () => (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (<Page {...this.props}><WrappedComponent {...this.props} /></Page>);
    }
  }
};
```
```app/javascript/components/Page.tsx```
```javascript
class Page extends React.Component<IReactPage, any> {
  render() {
    const { children, mountScript } = this.props;
    const initialData = serialize(_objectWithoutProperties(this.props, ['mountScript', 'children']) || {});
    return (
      <html>
        <head>
          <link href="//cdn.muicss.com/mui-0.9.41/css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
        </head>
        <body>
          {children}
          {mountScript && <script src={mountScript}/>}
          <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${initialData}`}}/>
        </body>
      </html>
    );
  }
}
```
