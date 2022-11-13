import { React, useState, useEffect, createContext } from 'react'
import News from '../components/News'
import { Box, Button } from '@mui/material'
import Filter from './../components/filter/Filter'
import CircularProgress from '@mui/material/CircularProgress';
import Modal from './../components/Modal'
import axios from 'axios'
import { useLocation } from 'react-router-dom'


export const HomeContext = createContext()


export const HomeContextProvider = (props) => {

  const location = useLocation()
  const apiKey1 = "f44c512ec55841cfa048d39894c57d13";
  const apiKey2 = "d3a68d3a93a54948a016a1553bc4d20c";
  const [search, setSearch] = useState("")
  const [filteredData, setFilteredData] = useState({})
  const [isSearched, setIsSearched] = useState(false)
  const [data, setData] = useState([])
  const [apiData, setApiData] = useState([])
  const [api, setApi] = useState(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey1}`)
  const [counter, setCounter] = useState(0)
  const [condition, setCondition] = useState(false)


  //modal logic

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("2022-11-10");
  const [word, setWord] = useState("a");
  const [category, setCategory] = useState("general");
  const [isClicked, setIsClicked] = useState(false)

  const handleSortButtonClick = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleModalSubmit = () => {
    setApi(`https://newsapi.org/v2/everything?q=${word}&from=${date}&sortBy=${category}&apiKey=${apiKey1}`)
    setOpen(false);
    setIsSearched(false);
    setSearch("");
    
  }

  //modal logic end

  function fetchData() {
    axios
      .get(api)
      .then((response) => {setApiData(response.data)}
      )
      .catch((error) => console.log(error));

  }


  function handleData() {
     if(apiData?.articles?.length > 20 ) {
        const slicedData = apiData?.articles?.slice(0, 20);
        setData(slicedData);
      
     } else {
      setData(apiData.articles);

     }
  }

  const filteredPageData = data?.filter((item) => (item.title?.toLowerCase().includes(search.toLowerCase()) ||
    item.description?.toLowerCase().includes(search.toLowerCase()) ||
    item.content?.toLowerCase().includes(search.toLowerCase()) ||
    item.author?.toLowerCase().includes(search.toLowerCase()) ||
    item.source.name?.toLowerCase().includes(search.toLowerCase())))


   const showButton = () => {
    if(apiData?.articles?.length > 20 && isClicked === false ) {
      return ( <Button onClick={handleLoadAll}>Load all news</Button> )
    } else {
      return ("")
    }
   }

   function handleLoadAll() {
    const allData = apiData.articles
    setIsClicked(true)
    setData(allData)
    // setCounter(prevCounter => prevCounter + 1);

   }

   function loadNews() {
    setCondition(true)
   }


  useEffect(() => {
    fetchData()
    handleData()
    setFilteredData(filteredPageData);
  
  }, [search, api, condition])


  const renderNews = () => {
    return (
      <>
        <Filter handleChange={(e) => {
          setSearch(e.target.value);
          setIsSearched(true);
        }} />

      { condition === false ? <Button onClick={loadNews} sx={{cursor: 'pointer'}}>Click to show available news </Button> : "" }


        {isSearched &&
          <Modal
            handleClickOpen={handleSortButtonClick}
            handleClose={handleModalClose}
            handleSubmit={handleModalSubmit}
            open={open}
            openModalButton="SORT NEWS"
            category={category}
            handleDate={(e) => setDate(e.target.value)}
            handleCategory={(e) => setCategory(e.target.value)}
            handleWord={(e) => setWord(e.target.value)}
          />

        }

        <Box className="top-news">
          {

            search === "" ?

              data ? data?.map(data => (

                <News data={data} key={data.url} />

              )
             

              )      : <CircularProgress /> :

              filteredData?.length !== 0 ? filteredData?.map(data => (

                <News data={data} key={data.url} />

              )
              ) : "No data matching filters..."}


        </Box>

        {showButton()}   
      </>
    )
  }

  const renderDetails = () => {
    return (
      <HomeContext.Provider value={{ data }}>
        {props.children}
      </HomeContext.Provider>
    )
  }

  const renderContent = () => {
    if (location.pathname == '/') {
      return renderNews()
    } else {
      return renderDetails()
    }
  }


  return (
    <>

      {renderContent()}
    </>
  )
}



