import React from 'react'
import { Grid, Typography } from '@mui/material'

function ProjectTechnologiesContainer({ technologies }) {
  //TODO: get all technologies for search from redux
  return (
    <Grid item container direction="column" alignItems="flex-start">
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Technologies
      </Typography>
    </Grid>
  )
}

export default ProjectTechnologiesContainer
