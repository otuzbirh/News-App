import { React, useContext, useEffect, useState } from 'react'
import { Box, Button } from '@mui/material'
import { useNavigate, useParams } from "react-router-dom"
import { NewsContext } from './../NewsContext'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Article = () => {


    const { id } = useParams()
    const { data } = useContext(NewsContext)
    const [article, setArticle] = useState({})
    const navigate = useNavigate()
    const singleArticle = data?.articles.filter((item) => (
        item.publishedAt.includes(id)
    ))

    useEffect(() => {
        setArticle(singleArticle)
        console.log("clanak", article)



    }, [id])

    return (
        <>
            <Box sx={{ width: '100%', marginTop: "30px",  height: '70vh',  display: 'flex', flexDirection: "column", 
                       justifyContent: "flex-start", alignItems: "center", borderRadius: "18px",
                       opacity: '1', justifyContent: 'space-between' }}>

                    <h2>{article[0]?.title}</h2>
                    <img src={article[0]?.urlToImage} className="article-img"></img>
                    <h3>{article[0]?.description}</h3>
                    <p>{article[0]?.content}</p>

                    <h4>Author: { article[0]?.source.author  ? article[0]?.source.author : "Unknown"}</h4>
                    <h4>Published at: {article[0]?.publishedAt  ? article[0]?.publishedAt : "Unknown"} </h4>

                        <Button 
                            onClick={() => {navigate("/")}}
                            variant="outlined" 
                            startIcon={<ArrowBackIcon />}> Back </Button>
            </Box>
        </>
    )
}

export default Article