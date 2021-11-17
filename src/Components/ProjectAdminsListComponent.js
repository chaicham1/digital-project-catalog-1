import React from 'react'
import { Grid, Typography } from '@mui/material'

function ProjectAdminsListComponent({ admins }) {
  return (
    <Grid item container direction="column" alignItems="flex-start">
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Admins
      </Typography>
    </Grid>
  )
}

export default ProjectAdminsListComponent
