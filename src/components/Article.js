import { React, useContext, useEffect, useState } from 'react'
import { Box, Button } from '@mui/material'
import { useNavigate, useParams } from "react-router-dom"
// import { NewsContext } from './../NewsContext'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios'
import { HomeContext } from '../pages/Home';

const Article = () => {

    // const api = "https://newsapi.org/v2/everything?apiKey=d3a68d3a93a54948a016a1553bc4d20c&q=a"
    const { id } = useParams()
    const { data } = useContext(HomeContext)
    const [article, setArticle] = useState([])
    // const [data, setData] = useState([])
    const navigate = useNavigate()

    // function fetchAllNews() {
    //     axios
    //         .get(api)
    //         .then((response) => {
    //             setData(response.data.articles)
    //             console.log("data", data)
    //             console.log("response art data", response.data)
    //         }
    //         )
    //         .catch((error) => console.log(error));


    // }

    const singleArticle = data?.articles?.filter((item) => (
        item?.publishedAt?.includes(id)))

    console.log("single article", singleArticle)



    useEffect(() => {
        // fetchAllNews()
        setArticle(singleArticle);
        console.log("articles data: ", data)
        console.log("Single art", article)
    }, [id])


    return (
        <>
            <Box sx={{
                width: '100%', marginTop: "30px", height: '70vh', display: 'flex', flexDirection: "column",
                justifyContent: "flex-start", alignItems: "center", borderRadius: "18px",
                opacity: '1', justifyContent: 'space-between'
            }}>

                <h2>{article[0]?.title}</h2>
                <img src={article[0]?.urlToImage} className="article-img"></img>
                <h3>{article[0]?.description}</h3>
                <p>{article[0]?.content}</p>

                <h4>Author: {article[0]?.source.author ? article[0]?.source.author : "Unknown"}</h4>
                <h4>Published at: {article[0]?.publishedAt ? article[0]?.publishedAt : "Unknown"} </h4>

                <Button
                    onClick={() => { navigate("/") }}
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}> Back </Button>
            </Box>
        </>
    )
}

export default Article