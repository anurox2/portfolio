import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C5103AQHzegI6tkugNQ/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=3dkr0Y4zhpKYpbkSdWeVXtWjBoP1iX4PkPSYZgbbM9c"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "0.12em", color: "grey" }}>
              Aman Kumar Gupta
            </h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />

            <p>
              Experienced Full Stack Engineer with a demonstrated history of
              working in the IT and analytics industry. Designed & developed
              architectures for numerous projects. Skilled in cyber-security,
              web and middleware services, ETL job creation, and cloud
              computing.
            </p>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Wichita, KS</p>
            <h5>Phone</h5>
            <p>316.880.4833</p>
            <h5>Email</h5>
            <p>amankgupta94@outlook.com</p>
            <h5>Website</h5>
            <p>
              <a
                href="https://anurox2.github.io/portfolio/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://anurox2.github.io/portfolio/
              </a>
            </p>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2012}
              endYear={2016}
              schoolName="Dr. A.P.J. Abdul Kalam Technical University"
              schoolDescription="Bachelor of Technology, Computer Science & Engineering. GPA: 3.3"
            />

            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Wichita State University"
              schoolDescription="Graduate Certificate, Information Assurance and Cybersecurity. GPA: 4.0"
            />

            <Education
              startYear={2019}
              endYear="2021 (expected)"
              schoolName="Wichita State University"
              schoolDescription="Master of Science - Computer Science. GPA: 3.95"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience
              startYear={2017}
              endYear={2018}
              jobName="Tata Consultancy Services"
              jobDescription="Worked as an integration developer to connect all the isolated systems, using Java and Flow services. Designed and developed Java services, flow(wM) services, Adapters, schedulers, cron jobs, UNIX scripts. Participated in 3 POCs, external audits, and played a major role in process improvements. Prepared extensive technical design specifications for projects. Collaborated with other departments across various geographies to plan and implement new projects, while handling a team of 4 developers. Received a full rating of 5/5 in the first year during the appraisal process"
            />

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Fractal Analytics"
              jobDescription="Created and maintained enterprise-grade Data Warehouses for ADP LLC. Designed & developed cloud-based solutions on Azure including automation modules for resource usage optimization saving more than USD 1000 per month. Created automation tools for DB analysis using python (pandas) reducing analysis time to 12 minutes from 6 hours of manual analysis. Prepared extensive design specifications for projects. Participated actively in the recruitment process for Engineering department"
            />

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="Wichita State University"
              jobDescription="Designing and implementing data analytics projects for the Barton School of Business at Wichita State University. Teaching Assistant for college-level courses"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>
            <Skills skill="Python" progress={80} />
            <Skills skill="Javascript" progress={50} />
            <Skills skill="SQL" progress={80} />
            <Skills skill="React" progress={35} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
