import { useState } from 'react';
import { searchForShows ,  searchForPeople } from './../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const Home = () => {
   
  const [filter, setFilter] = useState(null);

  const { data : apiData ,error : apiDataError} = useQuery({
      queryKey: ['search', filter],
      queryFn: () => 
           filter.searchOption === 'shows' 
           ? searchForShows(filter.q)
           : searchForPeople(filter.q),
      // ⬇️ disabled as long as the filter is empty
      enabled: !!filter,
      refetchOnWindowFocus: false,
  });
  //const [apiData, setApiData] = useState(null);
  //const [apiDataError, serApiDataError] = useState(null);
 

 

  const onSearch = async ({ q , searchOption }) => {

    setFilter({q, searchOption });
    
    //error catching
   /* try {
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
    }*/

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
