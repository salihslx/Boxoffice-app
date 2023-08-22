import {SearchCard , SearchImgWrapper} from "../common/SearchCard";
const Actorcard = ({name , image , gender , country , birthday, deathday}) => {
    
    
    return (<SearchCard>
        <SearchImgWrapper>
             <img src={image}  alt={name}/>
        </SearchImgWrapper>
        
        <h1>{name} {!!gender && `(${gender})`} </h1>

        <p>{country ? `Comes from ${country}` : 'No country known'}</p>

        {!!birthday && <p>Born on {birthday}</p>}

        <p >{deathday ? `Died on ${deathday}` : 'Alive'}</p>
        
        
       
    </SearchCard>
   );
};
export default Actorcard;