import React from "react";
import Link from "@material-ui/core/Link";
import { Grid, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function FooterPage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid item xs={12} sm={4}>
          <h6>Cities we covered</h6>
          <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />

          <ListItem>
            <p>
              {" "}
              <li>Torronto</li>
            </p>
            <p>
              <li>Montreal</li>
            </p>
            <p>
              <li>Vancouver</li>
            </p>
            <p>
              <li>Ottawa</li>
            </p>
            <p>
              <li className="list-unstyled">Calgary</li>
            </p>
          </ListItem>
        </Grid>

        <Grid item xs={12}>
          <h6 className="text-uppercase font-weight-bold">About</h6>
          <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
          <ListItem>
            <Link to="/privacy" className="text-info">
              Privacy Policy
            </Link>

            <Link to="/terms" className="text-info">
              Terms of use
            </Link>

            <Link to="/faq" className="text-info">
              FAQs
            </Link>

            <Link to="/help" className="text-info">
              Help
            </Link>

            <Link to="/contact" className="text-info">
              Contact us
            </Link>
          </ListItem>
        </Grid>

        <Grid item xs={12}>
          <h6 className="text-uppercase font-weight-bold">Contact</h6>
          <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />

          <p>
            <i className="fas fa-home mr-3"></i> Toronto, ON M5V 1J2, Canada
          </p>
          <p>
            <i className="fas fa-envelope mr-3"></i> info@peaceofmind.com
          </p>
          <p>
            <i className="fas fa-phone mr-3"></i> + 01 234 567 88
          </p>
          <p>
            <i className="fas fa-print mr-3"></i> + 01 234 567 89
          </p>
        </Grid>

        <Grid item xs={12}>
          <div
            className="app-download icon-lock"
            title="Get this app from google playstore"
          >
            <img src={require("../../img/googlePlay.png")} alt="gPlayStore" />
          </div>
          <br />
          <div
            className="app-download icon-lock"
            title="Get this app from Apple store"
          >
            <img src={require("../../img/appStore.png")} alt="iStore" />
          </div>
        </Grid>
      </Grid>
      <div className="row">
        <div className="col-md-12 py-3">
          <div className="mb-5 flex-center">
            <Link className="fb-ic" to="/facebook.com" alt="facebook">
              <i className="fab fa-facebook-f fa-lg text-dark mr-md-5 mr-3 fa-2x">
                {" "}
              </i>
            </Link>

            <Link className="tw-ic" to="/facebook.com" alt="twitter">
              <i className="fab fa-twitter fa-lg text-dark mr-md-5 mr-3 fa-2x">
                {" "}
              </i>
            </Link>

            <Link className="gplus-ic" to="/facebook.com" alt="google+">
              <i className="fab fa-google-plus-g fa-lg text-dark mr-md-5 mr-3 fa-2x">
                {" "}
              </i>
            </Link>

            <Link className="li-ic" to="/facebook.com" alt="linkedin">
              <i className="fab fa-linkedin-in fa-lg text-dark mr-md-5 mr-3 fa-2x">
                {" "}
              </i>
            </Link>

            <Link className="ins-ic" to="/facebook.com" alt="instagram">
              <i className="fab fa-instagram fa-lg text-dark mr-md-5 mr-3 fa-2x">
                {" "}
              </i>
            </Link>

            <Link className="pin-ic" to="/facebook.com" alt="pinterest">
              <i className="fab fa-pinterest fa-lg text-dark fa-2x"> </i>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-copyright py-1">
        &copy; {new Date().getFullYear()} Copyright:{" Peace of mind "}
      </div>
    </Grid>
  );
}
