import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgKT2_Lctp852Zk2BT6LKJ6xJKy2yCatYUaKNS4PCsKK0pggvT&usqp=CAU"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h2>Full Stack Developer | Data Engineer | Hacker</h2>

              <hr />

              <p className="banner-text-para">
                JS | React | Python | Firebase | SQL | NoSQL | Microsoft Azure
              </p>
              <div className="social-links">
                {/*LinkedIn*/}
                <a
                  href="https://www.linkedin.com/in/amankgupta94/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/*GitHub*/}
                <a
                  href="https://github.com/anurox2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-github-square" aria-hidden="true" />
                </a>

                {/*Mobile*/}
                <a
                  href="tel:3168804833"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-mobile" aria-hidden="true" />
                </a>

                {/*Gitlab*/}
                <a
                  href="https://gitlab.com/dronzaya"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-gitlab" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
