import { useReducer, useEffect } from "react";

//save to local storage 
const usePersistedReducer = (reducer ,inialState ,localStorageKey) =>{
    const [state , dispatch] = useReducer(reducer,inialState,(initial)=>{
        const  presistedValue = localStorage.getItem(localStorageKey);
      
        return presistedValue ? JSON.parse(presistedValue) : initial;
       
  
    });
  
    useEffect(()=>{
  
          localStorage.setItem(localStorageKey,JSON.stringify(state))
  
    },[state,localStorageKey])
  
  
    return [state,dispatch];
   
  };
  
  const starredShowsReducer = (currentStarred, action) => {
      
        switch(action.type){
          case 'STAR': 
           return currentStarred.concat(action.showId)
          case 'UNSTAR':
             return currentStarred.filter(showId => showId !== action.showId)
          default:
            return currentStarred;
  
        }
  };

  export const useStarredShows = () => {

    return usePersistedReducer(starredShowsReducer,[],'starredShows');

  };
  