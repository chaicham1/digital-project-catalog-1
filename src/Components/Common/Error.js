import React from 'react'
import { Typography } from '@mui/material'

function Error({ message }) {
  return (
    <>
      <Typography variant="h3" component="div" gutterBottom textAlign="center">
        Error
      </Typography>
      <Typography variant="h6" component="div" gutterBottom textAlign="center">
        {message}
      </Typography>
    </>
  )
}

export default Error
