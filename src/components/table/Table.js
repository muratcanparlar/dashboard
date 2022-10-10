import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





function CreateTable() {
    const [users,setUsers]=useState([]);
   useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res=>{setUsers(res.data)})
        .catch(e=>console.log(e))        
   },[])
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell className='tableCell'>Username</TableCell>
            <TableCell className='tableCell'>Email</TableCell>
            <TableCell className='tableCell'>Phone</TableCell>
            <TableCell className='tableCell'>Website</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell className='tableCell'>{user.username}</TableCell>
              <TableCell className='tableCell'>{user.email}</TableCell>
              <TableCell className='tableCell'>{user.phone}</TableCell>
              <TableCell className='tableCell'>{user.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CreateTable