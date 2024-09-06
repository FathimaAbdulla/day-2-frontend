import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <h1>ADD</h1>
        
        
        <TextField label="NAME:" variant="outlined"></TextField><br/><br/>
      <TextField label="AGE:" variant="outlined"></TextField><br/><br/>
      <TextField label="DEPT:" variant="outlined"></TextField><br/><br/>
      <TextField label="SALARY:" variant="outlined"></TextField><br/><br/>
      <Button variant="contained">ADD</Button>
    </div>
  )
}

export default Add