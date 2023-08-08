import { useState } from "react";

const SearchForm = ({ onSearch }) => {

    const [searchStr, setSearchStr] = useState(' ');
    const [searchOption, setSearchOption] = useState('shows');

    // 1)Mount
    // 2)Rerender
    //  2.5) Logic before next rerender
    // 3)Unmount

    //useEffects runs at least once
   /* console.log("Component Rerender");
    useEffect(() => {
            
       console.log("Search option changes", searchOption); //current 

        return () => {
            console.log("Before next useeffect run" , searchOption); //past
        };
                     
    } , [searchOption]);*/   //dependeci array
    
    const onSearchInputChange = ev => {
        setSearchStr(ev.target.value);
      };
    
      const onRadioChange = ev => {
        setSearchOption(ev.target.value);
      };

      const onSubmit = (ev) => {
        ev.preventDefault();

        const options = {
            q : searchStr,
            searchOption,
        }

        onSearch(options);
      }

    return(
    
    
        
    <form onSubmit={onSubmit}>
    <input type="text" value={searchStr} onChange={onSearchInputChange} />

    <label>
      Shows
      <input
        type="radio"
        name="search-option"
        value="shows"
        checked={searchOption === 'shows'}
        onChange={onRadioChange}
      />
    </label>

    <label>
      Actors
      <input
        type="radio"
        name="search-option"
        value="actors"
        checked={searchOption === 'actors'}
        onChange={onRadioChange}
      />
    </label>

    <button type="submit">Search</button>
  </form>
  
    )
};
export default SearchForm;