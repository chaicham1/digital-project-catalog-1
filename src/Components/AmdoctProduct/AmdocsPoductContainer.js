import React from 'react'
import { Grid, Typography } from '@mui/material'

function AmdocsPoductContainer({ amdocsProduct }) {
  //TODO: get all product of amdocs for search from redux
  return (
    <Grid item container direction="column" alignItems="flex-start">
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Amdocs Poduct
      </Typography>
    </Grid>
  )
}

export default AmdocsPoductContainer
