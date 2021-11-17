import React from 'react'
import { useNavigate } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded'

function ProjectCardComponent({ name, imgUrl, description }) {
  const navigate = useNavigate()

  return (
    <Card>
      <CardMedia component="img" height="150" image={imgUrl} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {description.slice(0, 50)} ...
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          fullWidth
          onClick={() => {
            navigate(`/${name}`, { replace: true })
          }}
        >
          <ReadMoreRoundedIcon />
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCardComponent
