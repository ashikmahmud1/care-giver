import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import RedditIcon from "@material-ui/icons/Reddit";

export default function Footer() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Grid container spacing={1} direction="column" alignItems="center">
          <Grid item>
            <span>Cities we covered</span>
          </Grid>
          <span>Toronto</span>
          <span>Montreal</span>
        </Grid>
      </Grid>
      <Grid item xs={12} md={3}>
        <Grid container spacing={1} direction="column" alignItems="center">
          <Grid item>
            <span>Contact</span>
          </Grid>
          <span>Address</span>
          <span>Email</span>
          <span>Phone</span>
        </Grid>
      </Grid>
      <Grid item xs={12} md={3}>
        <Grid container spacing={1} direction="column" alignItems="center">
          <Grid item>
            <span>About</span>
          </Grid>
          <Grid item>
            <span>
              <Link href="/privacy">Privacy</Link>
            </span>
          </Grid>
          <Grid item>
            <span>
              <Link href="/terms-of-use">Terms Of Use</Link>
            </span>
          </Grid>
          <Grid item>
            <span>
              <Link href="/faqs">FAQs</Link>
            </span>
            <Grid item>
              <span>
                <Link href="/help">Help</Link>
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={3}>
        <Grid container spacing={1} direction="column" alignItems="center">
          <Grid item>
            <span></span>
          </Grid>
          <Grid item>
            <img
              src={require("../../img/googlePlay.png")}
              title="Install the app from Playstore"
              alt=""
            />
          </Grid>
          <Grid item>
            <img
              src={require("../../img/appStore.png")}
              title="Download the app from App Store"
              alt=""
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1} direction="column" alignItems="center">
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
        <Grid container spacing={1} direction="column" alignItems="center">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Copyright:{" Peace of mind "}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
