import React from 'react'

import {
  Grid,
  Typography,
  Container,
  Box,
  TextField,
  Autocomplete,
  IconButton,
} from '@mui/material'
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded'
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

function HeaderComponent({ projects, searchHandler, themeSwitchHandler, isDarkTheme }) {
  const projectsArrSearch = projects ? projects.map((p) => p.name) : []

  return (
    <Box p={2} sx={{ backgroundColor: '#4498d8', color: 'white', boxShadow: 3 }}>
      <Container>
        <Grid container spacing={2} justifyContent="left">
          <Grid item container spacing={1} xs={12} sm={8} alignSelf="center">
            <Grid item xs={2} sm={1} alignSelf="center">
              <IconButton onClick={themeSwitchHandler} color="inherit">
                {isDarkTheme ? <Brightness4RoundedIcon /> : <Brightness7RoundedIcon />}
              </IconButton>
            </Grid>
            <Grid item container justifyContent="left" xs={10} sm={11} alignSelf="center">
              <Typography variant="h6" component="div">
                Digital Projects Catalog
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justifyContent="left" xs={12} sm={4} alignSelf="center">
            <Autocomplete
              disablePortal
              fullWidth
              forcePopupIcon={false}
              id="combo-box-demo"
              options={projectsArrSearch}
              size={'small'}
              onChange={(e, v, r) => {
                searchHandler(v)
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={<SearchRoundedIcon sx={{ color: 'white' }} />}
                  sx={{
                    input: { color: 'white' },
                    button: { color: 'white' },
                    '& label.Mui-focused': {
                      color: 'white',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: 'white',
                      color: 'white',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white',
                        color: 'white',
                      },
                      '&:hover fieldset': {
                        borderColor: 'white',
                        color: 'white',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                        color: 'white',
                      },
                    },
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HeaderComponent
