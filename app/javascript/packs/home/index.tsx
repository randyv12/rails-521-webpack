import * as React from 'react';
import {pagify} from "../../utils/pagify";
import {mount} from "../../utils/mount";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import withStyles from "@material-ui/core/styles/withStyles";


const styles = theme => ({

  card: {
    padding: 10,
    margin: 10,
    height: '180px',
    background: 'rgba(255,255,255,0.8)',
    color: theme.palette.text.secondary,
  },

  grid: {
    padding: 30
  },

  gridrow: {
    margin: '0 auto'
  },

  griditem: {
    maxWidth: '400px'
  }

});

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
                CrunchyDates
              </Typography>
            </Toolbar>
          </AppBar>

          <Grid container
                alignItems='center'
                direction='row'
                justify='center'
                className={classes.grid}
          >
            <Grid container
                  alignItems='center'
                  direction='row'
                  justify='center'
                  className={classes.gridrow}
            >
              <Grid
                item
                xs={12} sm={12} md={6}
                className={classes.griditem}
              >
                <Card className={classes.card}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Start Matching
                        </Typography>
                        <Typography variant="subtitle1">
                          Choose this option if you'd like to randomly match someone
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          Okay, let's go!
                        </Button>
                      </CardActions>
                    </Card>
              </Grid>
              <Grid
                item
                xs={12} sm={12} md={6}
                className={classes.griditem}
              >
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Explore
                        </Typography>
                        <Typography variant="subtitle1">
                          Swipe right or left on profiles
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          Sure, I'd like that
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
            </Grid>
            <Grid container
                  alignItems='center'
                  direction='row'
                  justify='center'
                  className={classes.gridrow}
            >
              <Grid
                item
                xs={12} sm={12} md={6}
                className={classes.griditem}
              >
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Your Profile
                      </Typography>
                      <Typography variant="subtitle1">
                        Tell us about yourself
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Okay
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              <Grid item
                    xs={12} sm={12} md={6}
                    className={classes.griditem}
              >
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Who Viewed Me
                    </Typography>
                    <Typography variant="subtitle1">
                      You currently have 400 visitors since day 1
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">Cool!</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
            <Grid container
                  alignItems='center'
                  direction='row'
                  justify='center'
                  className={classes.gridrow}
            >
              <Grid item
                    xs={12} sm={12} md={6}
                    className={classes.griditem}
              >
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Account Settings
                      </Typography>
                      <Typography variant="subtitle1">
                        Set your preferences
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Okay
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              <Grid item
                    xs={12} sm={12} md={6}
                    className={classes.griditem}
              >
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Sign out
                    </Typography>
                    <Typography variant="subtitle1">
                      Have a nice day!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">Sign out</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>

    );
  }
}

mount()(withStyles(styles)(PageContent));

export default pagify()((withStyles(styles)(PageContent)));

