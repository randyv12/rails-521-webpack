# README

This is a boiler plate project for rendering full react pages in Rails.
It uses the most recent version of Webpacker, React-Rails and React and Typescript as of October 17, 2018.
This uses Material UI CSS and uses React to statically render an entire layout for a page and provides a single entry-point for mounting React components on the page.  This also uses TheRubyRacer gem as a Javascript engine for server-side rendering.

* Resources

https://stackoverflow.com/questions/43739067/is-window-initial-state-still-the-preferred-way-to-pass-initial-state-to-the

https://github.com/reactjs/react-rails#controller-actions

https://github.com/rails/webpacker


* Ruby version

2.3.1

* System dependencies

Recommended Node version 10.8.0

* Configuration

Clone the repo

```bundle```

```yarn install```

* How to run

```rails s```

```./bin/webpack-dev-server```

* Paths
app/javascript/components - Location of all react reusable components, including the React Page
app/javascript/packs - Location of entry points

* How to code!

Render the react component from a controller's action
```ruby
class HomeController < ApplicationController
  def index
    render react_component component: 'home/index', props: {}
  end
end
```

The helper function react_component wraps the react rails controller renderer to server-side render statically
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

Create an entry point which exports a single React component
```app/javascript/packs/home/index.tsx```

```javascript
class PageContent extends React.Component<any, any> {

  render() {
    const { classes, banner_image } = this.props;
    const bgStyle = "url(" + require('../../images/sunset.jpg') + ")";
    return (
      <div>
        <div style={{backgroundImage: bgStyle,
          backgroundSize: 'cover',
          backgroundRepeat: 'noRepeat',
          backgroundAttachment: 'fixed'
        }}>
          <AppBar position="relative">
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                Navbar
              </Typography>
            </Toolbar>
          </AppBar>

          <Grid container
                alignItems='center'
                direction='row'
                justify='center'
                className={classes.grid}
          >Page Stuff</Grid>
        </div>
      </div>
    );
  }
}

// Use the mount decorator with styles to mount the page on window load
mount()(withStyles(styles)(PageContent));

// Use the pagify with styles decorator to wrap the entire page content with a full page react component
export default pagify()((withStyles(styles)(PageContent)));
```
