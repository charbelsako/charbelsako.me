import { Typography, Container, Card, CardContent } from "@material-ui/core"
import React from "react"

export default function NotFound() {
  return (
    <Container
      maxWidth={"sm"}
      style={{
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h3">404 File Not Found</Typography>
          <Typography variant="caption">
            Whoops! Looks like you entered a broken link
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}
