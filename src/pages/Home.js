import {React, useState, useEffect, useContext} from 'react'
import News from '../components/News'
import {Box} from '@mui/material'
import { NewsContext } from './../NewsContext'
import Filter from './../components/filter/Filter'
import CircularProgress from '@mui/material/CircularProgress';


const Home = () => {

  

  const {data} = useContext(NewsContext)

  const [search, setSearch] = useState("")
  const [filteredData, setFilteredData] = useState({})
  console.log(data)

  const filteredPageData = data?.articles.filter((item) => (item.title.toLowerCase().includes(search.toLowerCase()) || 
                                                            item.description?.toLowerCase().includes(search.toLowerCase()) ||
                                                            item.content?.toLowerCase().includes(search.toLowerCase()) ||
                                                            item.author?.toLowerCase().includes(search.toLowerCase()) ||
                                                            item.source.name?.toLowerCase().includes(search.toLowerCase()) ))

  useEffect(() => {
    setFilteredData(filteredPageData);
    console.log("filteredPageData", filteredPageData)
    
  }, [search])


return (
  <> 
  
  <Filter handleChange={(e) => {
    setSearch(e.target.value)
}} />
  <Box className="top-news">
   {

    search === "" ?
        
  data ? data.articles.map(data =>  (
     
          <News data={data} key={data.url}/>
     
    )
  ) : <CircularProgress />  :
  
   filteredData?.length !== 0  ? filteredData?.map(data =>  (
     
    <News data={data} key={data.url}/>

)
) : "No data matching filters..." } 
 </Box> 
 </>
 )
}



export default Home