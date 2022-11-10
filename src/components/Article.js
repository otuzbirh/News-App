import { React, useContext, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useNavigate, useParams } from "react-router-dom"
import { NewsContext } from './../NewsContext'

const Article = () => {


    const { id } = useParams()
    const { data } = useContext(NewsContext)
    const [article, setArticle] = useState({})

    const singleArticle = data?.articles.filter((item) => (
        item.publishedAt.includes(id)
    ))

    useEffect(() => {
        setArticle(singleArticle)
        console.log("clanak", article)



    }, [id])

    return (
        <>
            <Box>


                 <p>{article[0]?.title}</p>
       <p>{article[0]?.description}</p>
       <p>{article[0]?.content}</p> 
            </Box>
        </>
    )
}

export default Article