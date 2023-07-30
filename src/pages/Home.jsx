import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const Home = () => {
 
  const [apiData, setApiData] = useState(null);
  const [apiDataError, serApiDataError] = useState(null);
 

 

  const onSearch = async ({ q , searchOption }) => {
    
    //error catching
    try {
      serApiDataError(null);
      let result;
      if (searchOption === 'shows') {
         result = await searchForShows(q);       
      } else {
         result = await searchForPeople(q);
           
        }
      setApiData(result);
    } catch (error) {
      serApiDataError(error);
    }

    //Api server link
    //https://api.tvmaze.com/search/shows?q=boys
  };

  const renderApiData = () => {
    //error handling
    if (apiDataError) {
      return <div>Error occured : {apiDataError.message}</div>;
    }
   //conditional chaining
    if(apiData ?.length === 0){
      return <div>No results</div>
    }
    //data fetching
    if (apiData) {
      return apiData[0].show ? ( 
          <ShowGrid shows={apiData}/>
       ) : (
       <ActorsGrid actors={apiData}/>
      ) 
    }

    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch}/>
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
