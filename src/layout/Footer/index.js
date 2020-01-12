import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import RedditIcon from '@material-ui/icons/Reddit';
import { Divider, Container } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

const useStyles = makeStyles(theme => ({
  body: {
    margin: 0, // Remove the margin in all browsers.
    backgroundColor: theme.palette.background.default
  },
  paper: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.body} style={{ backgroundColor: 'secondary' }}>
        <div className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
              >
                <Grid item>
                  <h3>Cities we covered</h3>
                  <Divider />
                </Grid>
                <span>Toronto</span>
                <span>Montreal</span>
                <span>Vancuvour</span>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
              >
                <Grid item>
                  <h3>Contact</h3>
                  <Divider />
                </Grid>
                <span>
                  <HomeIcon fontSize="small" /> Toronto, ON M5V 1J2, Canada
                </span>
                <span>
                  <EmailIcon fontSize="small" /> info@peaceofmind.com
                </span>
                <span>
                  <CallIcon fontSize="small" /> + 01 234 567 88
                </span>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
              >
                <Grid item>
                  <h3>About</h3>
                  <Divider />
                </Grid>
                <span>
                  <Link href="/privacy">Privacy Policy</Link>
                </span>
                <span>
                  <Link href="/terms-of-use">Terms Of Use</Link>
                </span>
                <span>
                  <Link href="/faqs">FAQs</Link>
                </span>
                <span>
                  <Link href="/help">Help</Link>
                </span>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
              >
                <Grid item>
                  <img
                    className="app"
                    src={require('../../img/googlePlay.png')}
                    title="Install the app from Playstore"
                    alt="googlePlayStore"
                  />
                </Grid>
                <Grid item>
                  <img
                    src={require('../../img/appStore.png')}
                    title="Download the app from App Store"
                    alt="appleStore"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
              >
                <div>
                  <FacebookIcon fontSize="large" />
                  <InstagramIcon fontSize="large" />
                  <LinkedInIcon fontSize="large" />
                  <TwitterIcon fontSize="large" />
                  <PinterestIcon fontSize="large" />
                  <RedditIcon fontSize="large" />
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
              >
                <div className="footer-copyright">
                  &copy; {new Date().getFullYear()} Copyright:
                  {' Peace of mind '}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}
