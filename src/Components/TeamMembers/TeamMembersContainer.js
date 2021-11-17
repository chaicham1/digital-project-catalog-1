import React from 'react'
import { Grid, Typography } from '@mui/material'

function TeamMembersContainer({ teamMembers }) {
  return (
    <Grid item container direction="column" alignItems="flex-start">
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Team Members
      </Typography>
    </Grid>
  )
}

export default TeamMembersContainer
