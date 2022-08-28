import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import styles from "./styles"

function Certification(props) {
  const { link, title, description } = props.data
  let { image } = props.data

  if (!image) {
    image = "/assets/images/no-image-wider.jpeg"
  }

  return (
    <Container maxWidth="md" style={styles.content}>
      <Card style={styles.card}>
        <CardActionArea>
          <CardMedia style={styles.media} image={image} title={title} />
          <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography component="p">{description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={styles.center}>
          <Button color="primary" variant="contained">
            <a href={link} style={styles.link}>
              View Certificate Page
            </a>
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}

export default Certification
