import React, { useState } from "react"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Container from "@material-ui/core/Container"
import styles from "./styles"
import Moment from "react-moment"

function Experience(props) {
  const [experience] = useState([
    {
      title: "Backend developer",
      description: "",
      learned: [
        "Implemented Access control list",
        "Followed a strict linting guideline",
        "PR reviews",
        "Dove into the complete SDLC",
      ],
      company: "Cadis",
      startDate: "2022-08-11",
      endDate: "",
    },
    {
      title: "Backend developer",
      learned: [
        "Handled customer support",
        "Built a variety of in house applications",
      ],
      company: "Klangoo",
      startDate: "2021-06",
      endDate: "2021-09",
    },
    {
      title: "Front end developer",
      description:
        "I was responsible of building a highly interactive website, with a complex design",
      learned: [
        "Gained extensive knowledge of JavaScript",
        "Managed API Integration",
      ],
      company: "Apps & Games Inc.",
      startDate: "2019-07-01",
      endDate: "2019-11-01",
    },
  ])

  return (
    <Container maxWidth="md" style={{ padding: 0 }}>
      <Typography variant="h2" style={{ marginTop: "1.5rem" }} paragraph>
        Work Experience
      </Typography>
      {experience.map((exp, index) => (
        <div key={index}>
          <Paper style={styles.card}>
            <Typography variant="body1">
              {exp.title} <b>@ {exp.company}</b>{" "}
            </Typography>

            <Typography variant="h4">Description</Typography>

            <Typography variant="body1">{exp.description}</Typography>
            <div
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
              }}
            >
              <ul
                style={{
                  width: "250px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {exp.learned.map((l) => (
                  <li>
                    <Typography variant="body1" style={{ textAlign: "left" }}>
                      {l}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
            <Typography variant="body1" style={styles.paragraph}>
              Start date{": "}
              <Moment date={exp.startDate} format="MMMM YYYY" />
            </Typography>
            <Typography variant="body1" style={styles.paragraph}>
              End date{": "}
              {exp.endDate === "" ? (
                <strong>Present</strong>
              ) : (
                <Moment date={exp.endDate} format="MMMM YYYY" />
              )}
            </Typography>
          </Paper>
        </div>
      ))}
    </Container>
  )
}

export default Experience
