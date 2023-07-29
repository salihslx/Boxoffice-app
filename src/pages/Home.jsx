import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';

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
    //data fetching
    if (apiData) {
      return apiData[0].show
        ? apiData.map(data => (
            <div key={data.show.id}>{data.show.name}</div>
            )
          )
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          )
        );
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
