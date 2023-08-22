import { getShowsById } from "../api/tvmaze";
import { useStarredShows } from "../lib/useStarredShows";
import { useQuery } from "@tanstack/react-query";
import ShowGrid from '../components/shows/ShowGrid'
import { TextCenter} from "../components/common/TextCenter";

const Starred = () => {
  const [starredShowsIds] = useStarredShows();
  
  const { data : starredShows ,error : starredShowsError} = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () => 
        getShowsById(starredShowsIds).then(
        result => result.map(show => ({show}))
        ),
    // ⬇️ disabled as long as the filter is empty
     refetchOnWindowFocus: false,
}); 


if( starredShows?.length === 0){
  return<TextCenter> No shows more starred</TextCenter>
}

if( starredShows?.length > 0){
  return <ShowGrid shows={starredShows} />
}

if(starredShowsError){

  return<TextCenter> Error occured : {starredShowsError.message}</TextCenter>

}
  return (
    <TextCenter>
     Shows are loading...
    </TextCenter>
  );
};
export default Starred;
