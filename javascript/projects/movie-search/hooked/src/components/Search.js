import React, {useState} from "react";

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    };

    const resetInputField = () => {
        setSearchValue("")
    };

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    };

    return (
        <form className="search">
            <input type="text"
                   value={searchValue}
                   onChange={handleSearchInputChanges}
            />
            <input type="sunbmit"
                   value="SEARCH"
                   onClick={callSearchFunction}
                   />
        </form>
    );
};

export default Search;