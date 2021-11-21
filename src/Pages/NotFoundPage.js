import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { Container, Box, Button } from '@mui/material'
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded'
import Error from '../Components/Common/Error'

function NotFoundPage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Container>
        <Box mt={5} mb={5}>
          <Button
            size="small"
            onClick={() => {
              navigate('/', { replace: true })
            }}
          >
            <ArrowLeftRoundedIcon />
            Home
          </Button>

          <Error message={`404 NOT FOUND`} />
        </Box>
      </Container>
    </>
  )
}

export default NotFoundPage
