import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import {
  Container,
  Box,
  Button,
  Grid,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from '@mui/material'

import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded'
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone'
import { Visibility, VisibilityOff } from '@mui/icons-material'

function LoginPage() {
  const navigate = useNavigate()
  const [usernameValues, setUsernameValues] = useState({
    username: '',
    error: false,
  })
  const [passwordValues, setPasswordValues] = useState({
    password: '',
    showPassword: false,
    error: false,
  })

  const handleChange = (prop) => (event) => {
    setPasswordValues({ ...passwordValues, [prop]: event.target.value })
    setUsernameValues({ ...usernameValues, [prop]: event.target.value })
    console.log(prop, event.target.value)
  }

  const handleClickShowPassword = () => {
    setPasswordValues({
      ...passwordValues,
      showPassword: !passwordValues.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

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
          <Grid container spacing={5} justifyContent="center" textAlign="center">
            <Grid xs={12} item container justifyContent="center">
              <LockTwoToneIcon color="primary" fontSize="large" />
            </Grid>
            <Grid xs={12} item container justifyContent="center">
              <Grid item xs={10} md={5}>
                <FormControl required fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-username" size="small">
                    Username
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-username"
                    type="text"
                    size="small"
                    value={usernameValues.username}
                    onChange={handleChange('username')}
                    label="Username"
                  />
                  <FormHelperText id="outlined-username">
                    Enter the username you recevied from the manager.
                  </FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <Grid xs={12} item container justifyContent="center">
              <Grid item xs={10} md={5}>
                <FormControl required fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-password" size="small">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-password"
                    type={passwordValues.showPassword ? 'text' : 'password'}
                    size="small"
                    value={passwordValues.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {passwordValues.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <FormHelperText id="outlined-password">
                    Enter the password you recevied from the manager.
                  </FormHelperText>
                </FormControl>
              </Grid>
            </Grid>

            <Grid xs={12} item container justifyContent="center">
              <Grid item xs={10} md={5}>
                <Button fullWidth variant="contained" size="small">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default LoginPage
