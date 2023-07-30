import { useParams } from "react-router-dom";
const Show = () => {
       
    const {showId } = useParams();




    return (
      <div>
        <h2>Show page for show {showId}</h2>
      </div>
    );
  };
  export default Show;