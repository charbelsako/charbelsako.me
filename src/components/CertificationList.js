import React, { Component } from "react"
import Certification from "./Certification"
import { Typography, Container } from "@material-ui/core"
import styles from "./styles"

class CertificationList extends Component {
  state = {
    certifications: [
      {
        title: "Intro to computer science",
        from: "HarvardX",
        link: "https://courses.edx.org/certificates/74569a3fd77f4d00849843c49823daeb",
      },
      {
        title: "MERN stack front to back",
        from: "Udemy",
        link: "https://www.udemy.com/certificate/UC-7N6ATLBO/",
        image: "/assets/images/mern.jpg",
      },
      {
        title: "Python for data science and machine learning",
        from: "Udemy",
        link: "https://www.udemy.com/certificate/UC-SS1YF302/",
        image: "/assets/images/python-data-science.jpg",
      },
      {
        title: "React front to back",
        from: "Udemy",
        link: "https://www.udemy.com/certificate/UC-1KY8XQV0/",
        image: "../assets/images/react.jpg",
      },
    ],
  }

  render() {
    return (
      <div style={styles.content}>
        <Container>
          <Typography variant="h2">Certifications</Typography>
          {this.state.certifications.map((cert, index) => (
            <Certification data={cert} key={index} />
          ))}
        </Container>
      </div>
    )
  }
}

export default CertificationList
