import { useState } from "react";

const searchTeamData=(searchText,listOfTeamMembers)=>{
    //filtering data for multiple fields
      const searchTextToLowerCase=searchText.toLowerCase();
      return listOfTeamMembers?.filter((team)=>
         (team.name.toLowerCase().includes(searchTextToLowerCase)
             || team.location?.toLowerCase()?.includes(searchTextToLowerCase))
      );
};

const SearchComponent =({listOfTeamMembers , setFilteredData})=>{
    const [searchText,setSearchText] = useState("");

    const settingValueForSetSearchText=(e)=>{
        setSearchText(e.target.value);
    };

    return(
    <div className="search">
            <form 
            onSubmit={
                (e)=>{
                    e.preventDefault();
                    const filteredData = searchTeamData(searchText,listOfTeamMembers);
                    setFilteredData(filteredData);
                }
            }>
                <input id="searchBox" placeholder="search" 
                       value={searchText}
                       onChange={settingValueForSetSearchText}></input>
                <button>Search</button>
            </form>
    </div>
    );
};

export default SearchComponent;