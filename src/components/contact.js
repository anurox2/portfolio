import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Aman Kumar Gupta</h2>
            <img
              src="https://media-exp1.licdn.com/dms/image/C5103AQHzegI6tkugNQ/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=3dkr0Y4zhpKYpbkSdWeVXtWjBoP1iX4PkPSYZgbbM9c"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Hello! Welcome to my website. I am a grad student at Wichita State
              University focusing on Cyber Security and software engineering.
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>

            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (316-880-4833)
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Anton",
                    }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    amankgupta94@outlook.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    My Skype ID
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
