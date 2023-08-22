import { Link, useParams } from "react-router-dom";
//import { useEffect, useState } from "react";
import { getShowById } from "../api/tvmaze";
import { useQuery } from '@tanstack/react-query'
import Details from "../components/shows/Details";
import ShowMainData from "../components/shows/ShowMainData";
import Seasons from "../components/shows/Seasons";
import Cast from "../components/shows/Cast";
import { styled } from "styled-components";
import {TextCenter} from '../components/common/TextCenter'

/*const useShowById = showId => {
    
    const [showData, setShowData] = useState(null);
    const [showError, setShowError] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const data = await getShowById(showId);
          setShowData(data);
        } catch (err) {
          setShowError(err);
        }
      };
      fetchData();
    }, [showId]);
  
   return { showData , showError };
};*/


const Show = () => {
       
    const {showId } = useParams();
       //custom hook setup
       //const { showData , showError } = useShowById(showId);
     const { data :showData , error: showError} =  useQuery({ 
      queryKey: ['show', showId],
      queryFn: () => getShowById(showId),
      refetchOnWindowFocus:false,
    });//Equal of useshoebyid hook
    
      /*const navigateTo = useNavigate()
      const onGoBack = () => {
        navigateTo('/');
      }*/
      if(showError){
        return <TextCenter>we have an error : {showError.message}</TextCenter>
      }
      if(showData){
        return ( 
          <ShowPageWrapper>
          <BackHomeWrapper>
           <Link to="/">Go back to home</Link>
           {/*<button type="button" onClick={onGoBack}> Go back to home</button>*/}
          </BackHomeWrapper>
          <ShowMainData 
             image = {showData.image}
             name = {showData.name}
             rating= {showData.rating}
             summary={showData.summary}
             genres = {showData.genres}/>
         
          <InfoBlock>
            <h2>Details</h2>
            <Details 
               status = {showData.status}
               premiered = {showData.premiered}
               network = {showData.network}
             />
          </InfoBlock>
          <div>
            <h2>Seasons</h2>
            <Seasons seasons = {showData._embedded.seasons}/>
         </div>

         <div>
            <h2>Cast</h2>
            <Cast cast = {showData._embedded.cast}/>
         </div>
          
        </ShowPageWrapper>)
      };


    return (
      <div>
        <TextCenter>Data is loading</TextCenter>
      </div>
    );
  };
  export default Show;

  const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;