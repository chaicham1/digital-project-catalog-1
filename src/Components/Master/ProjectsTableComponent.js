import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CardMedia,
  Button,
  Collapse,
  Typography,
  IconButton,
  TablePagination,
  Tooltip,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone'
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone'

import Loader from '../Common/Loader'
import { Box } from '@mui/system'

function ProjectsTableComponent() {
  //{ id, name, imgUrl, description, amdocsProducts, admins, technologies, teamMembers, links, files }
  const projects = useSelector((state) => state.projects)
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  useEffect(() => {
    if (projects.length) {
      setLoading(false)
    }
  }, [projects])

  const Row = ({ p }) => {
    const [expanded, setExpanded] = useState(false)

    return (
      <>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">
            <IconButton aria-label="expand row" size="small" onClick={() => setExpanded(!expanded)}>
              {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            <Button
              onClick={() => {
                navigate(`/${p.name}`)
              }}
            >
              {p.name}
            </Button>
          </TableCell>
          <TableCell align="left">
            <CardMedia component="img" height={20} image={p.imgUrl} alt={p.name} />
          </TableCell>
          <TableCell align="left">{p.description.slice(0, 100)}...</TableCell>
          <TableCell component="th" scope="row">
            <IconButton
              aria-label="delete project"
              size="small"
              color="error"
              onClick={() => console.log(`delete ${p.name}`)}
            >
              <DeleteForeverTwoToneIcon />
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <Collapse in={expanded} timeout="auto" unmountOnExit component={'td'}>
            <Box width={'100%'} height={200}></Box>
          </Collapse>
        </TableRow>
      </>
    )
  }

  return loading ? (
    <Loader />
  ) : (
    <>
      <Typography variant="h6" component="div" gutterBottom textAlign="left">
        Projects
      </Typography>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table aria-label=" table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left" sx={{ minWidth: 500 }}>
                  Description
                </TableCell>
                <TableCell>
                  <Tooltip title="Add New Project">
                    <IconButton
                      aria-label="add new project"
                      size="small"
                      color="success"
                      onClick={() => console.log(`add new project`)}
                    >
                      <AddBoxTwoToneIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((p) => (
                <Row key={p.name} p={p} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={projects.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}

export default ProjectsTableComponent
