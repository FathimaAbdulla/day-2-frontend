import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    var[user,setUser] =useState([])
    useEffect(() => {
    axios.get("http://localhost:3004/view")
    .then((response) => {
        console.log(response)
        setUser(response.data)
    })
    })
    const delValue =(id) =>{
        axios.delete('http://localhost:3004/remove/' + id)
        .then((response) => {
            console.log(response.data.message)
        })
    }
  return (
    <div>



    
        <h1>VIEW</h1>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell> Name</TableCell>
                        <TableCell> Age</TableCell>
                         <TableCell> Dept</TableCell>
                         <TableCell> Sal</TableCell>
                   
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val) => {
                    return  ( 
                <TableRow>
                        <TableCell> {val.Name}</TableCell>
                        <TableCell> {val.Age}</TableCell>
                         <TableCell>{val.Dept}</TableCell>
                         <TableCell> {val.Sal}</TableCell>
< TableCell>
<Button size='small' variant='contained' onClick={() => { 
    updValue(val._id)}}>Update </Button>
    &nbsp;
        <Button size='small' variant='contained' onClick={() => { 
        delValue(val._id)}}>Delete </Button>
        </TableCell>    
    

                    </TableRow>
                    )
                     } )}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default View