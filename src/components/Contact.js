import React, { Component } from 'react'
import styles from './styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import InputTextField from './common/InputTextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'

class Contact extends Component {
  state = {
    name: '',
    email: '',
    jobType: '',
    comment: ''
  }

  handleInputChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  render() {
    return (
      <Container maxWidth="md" style={styles.content}>
        <Typography variant="h4">Hire Me </Typography>
        <Typography variant="body1">
          <b> Email: </b> charbelsako@gmail.com
        </Typography>

        <form name="jobs" netlify>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <InputTextField
                value={this.state.name}
                icon="account"
                label="Name"
                id="name"
                type="text"
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputTextField
                value={this.state.email}
                icon="email"
                label="Email"
                id="email"
                type="email"
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputTextField
                value={this.state.comment}
                icon="comment"
                id="comment"
                multiline={true}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" color="secondary" variant="contained">
                Submit Form
                <SendIcon style={styles.rightIcon} />
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    )
  }
}

export default Contact
