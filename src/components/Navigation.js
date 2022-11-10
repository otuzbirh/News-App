import { Box, Link, TextField, InputAdornment } from '@mui/material'
import React from 'react'
import Logo from './../assets/images/logo2.png'
import SearchIcon from '@mui/icons-material/Search';

const Navigation = ({handleChange}) => {
  return (
    <Box
        sx={{display: 'flex', borderBottom: '2px solid grey', justifyContent: 'center',
            width: '100%', height: '100px', alignItems: "center", border: "1px", backgroundColor: "white", 
            color: "black", boxShadow: '5px 5px 21px rgba(0, 0, 0, 0.1)', borderRadius: '40px', marginTop: '15px'}}
    >
    <Link sx={{cursor: 'pointer'}}>
      <img className="logo" src={Logo}></img>
      </Link>
        
      {/* <TextField id="standard-basic" 
                  handleChange={handleChange}
                  label="Search" variant="standard" sx={{marginRight: '20px'}} endAdornment={
              <InputAdornment position="end">
                <SearchIcon
                  sx={{color: 'white'}}
                /> </InputAdornment> } /> */}
    </Box>
  )
}

export default Navigation