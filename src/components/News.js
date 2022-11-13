import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom';


const News = ({data}) => {
    
    const navigate = useNavigate()
    const char = "/" 

    return (
        <Box sx={{ width: '350px',  height: 'auto', maxHeight: '800px',  display: 'flex', flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "18px",
                boxShadow: '5px 5px 21px rgba(0, 0, 0, 0.1)', padding: '10px' }}>
            { data.urlToImage ?
            <Box sx={{ width: '90%', height: "40%" }}>
                 <img src={data.urlToImage} className="card-img"></img> 
            </Box>
            : ""  }

            <Box sx={{ width: '90%', height: "20%" }}>
                <Typography component="h6" sx={{ fontWeight: 'bold' }}>
                   {data.title}
                </Typography>
            </Box>

            <Box sx={{ width: '90%', height: "auto" }}>
                <Typography>
                    {data.description}

                </Typography>
            </Box>
            <Box sx={{marginBottom: 1}}>
            <Link onClick={() => {navigate(`/article/${data.publishedAt}`)}} >Read full article...</Link>
            </Box>
            
        </Box>
    )
}


export default News