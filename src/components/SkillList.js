import React, { useState } from "react"

import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"

import styles from "./styles"

function SkillList(props) {
  const [skills] = useState({
    languages: ["PHP", "JavaScript", "Python"],
    databases: ["MongoDB", "Firebase", "MySQL", "PostgresQL"],
    frameworks: ["React.js", "Node.js", "React Native"],
    libraries: [
      "Bootstrap",
      "Material UI",
      "Socket.js",
      "ACL",
      "Express",
      "Passport",
      "lodash",
    ],
  })

  return (
    <div>
      <Container maxWidth="md" style={{ padding: 0 }}>
        <Typography variant="h2" style={{ marginTop: "2rem" }} paragraph>
          Skills
        </Typography>
        <Card style={styles.card} variant="outlined">
          <CardContent>
            <Typography variant="h5" paragraph>
              Languages
            </Typography>
            <Typography variant="body1">
              {skills.languages.map(
                (skill, index) =>
                  `${skill}${index < skills.languages.length - 1 ? "," : ""} `
              )}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h5" mt={9} paragraph>
              Databases
            </Typography>
            <Typography variant="body1">
              {skills.databases.map(
                (database, index) =>
                  `${database}${
                    index < skills.databases.length - 1 ? "," : ""
                  } `
              )}
            </Typography>
          </CardContent>

          <CardContent>
            <Typography variant="h5" mt={9} paragraph>
              Frameworks
            </Typography>
            <Typography variant="body1">
              {skills.frameworks.map(
                (framework, index) =>
                  `${framework}${
                    index < skills.frameworks.length - 1 ? "," : ""
                  } `
              )}
            </Typography>
          </CardContent>

          <CardContent>
            <Typography variant="h5" mt={9} paragraph>
              Libraries
            </Typography>
            <Typography variant="body1">
              {skills.libraries.map(
                (library, index) =>
                  `${library}${index < skills.libraries.length - 1 ? "," : ""} `
              )}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}

export default SkillList
