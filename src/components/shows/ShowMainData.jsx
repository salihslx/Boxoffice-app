const ShowMainData = ({ image, name  , rating , summary ,genres }) => {
    return (
        <div>
           <img src={image ? image.original : '/not-found-image.png'} alt={name}/>

           <div>
            <h3>{name}</h3>
            <div>{rating.average || "N/A"}</div>
          

           <div dangerouslySetInnerHTML={{__html: summary}}/>
           <div>
            Geners :
            <div>
                {genres.map((genre)=><span key={genre}>{genre}</span>)}
            </div>
           </div>
           </div>

        </div>
    )
};
export default ShowMainData;