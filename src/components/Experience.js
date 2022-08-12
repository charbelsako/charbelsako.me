import React, { useState } from "react"
import { connect } from "react-redux"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import styles from "./styles"
import Moment from "react-moment"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}))

function Experience(props) {
  const classes = useStyles()

  const [experience] = useState([
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
    {
      title: "Backend developer",
      description: "",
      learned: [
        "Used ACL to manage user roles and permissions",
        "Followed a strict linting guideline",
      ],
      company: "Cadis",
      startDate: "2022-08-11",
      endDate: "",
    },
  ])

  return (
    <Container maxWidth="md">
      <Typography variant="h2" style={{ marginTop: "1.5rem" }} paragraph>
        Work Experience
      </Typography>
      {experience.map((exp, index) => (
        <div key={index}>
          <Paper className={classes.root} style={styles.card}>
            <Typography variant="body1">
              {exp.title} <b>@ {exp.company}</b>{" "}
            </Typography>
            <Typography variant="body1">{exp.description}</Typography>
            <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              {exp.learned.map((l) => (
                <Typography variant="h6">{l}</Typography>
              ))}
            </div>
            <Typography variant="body1" style={styles.paragraph}>
              <strong> Start date{": "}</strong>
              <Moment date={exp.startDate} format="MMMM YYYY" />
            </Typography>
            <Typography variant="body1" style={styles.paragraph}>
              <strong> End date{": "}</strong>
              {exp.endDate === "" ? (
                "Present"
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

const mapStateToProps = (state) => ({
  experience: state.experience,
})

export default connect(mapStateToProps)(Experience)
