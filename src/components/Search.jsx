import { useState } from "react";
import SearchResult from "./SearchResult";

const SEARCH_API =
  "https://www.googleapis.com/customsearch/v1?key=AIzaSyAjAHi_qxAqW1KyJeNjcDwZ6jHWedoBSG4&cx=220350f05d56c4b1c&fields=items(title,link,htmlSnippet),queries(previousPage/startIndex,nextPage/startIndex)";

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchString, setSearchString] = useState();
  const [searchInProgres, setSearchInProgres] = useState(false);
  
  const handleChange = (e) => {
    setSearchString(e.target.value)
  };

  const initiateSearch = async function () {
    if(searchString && searchString.trim()){
        setSearchInProgres(true);
        const searchResult = await fetch(`${SEARCH_API}&q=${searchString}&start=0`);
        if (searchResult.ok) {
          const result = await searchResult.json();
          setSearchResults(result);
        }
        setSearchInProgres(false);
    }
  };
  
  return (
    <>
      <div className="max-w-xl mx-auto mt-4 flex flex-row gap-1">
        <input
          type="text"
          className="w-4/5 px-3 py-2 border text-gray-700 focus:outline-none focus:ring border-indigo-500
            rounded-full"
          placeholder="Enter a word to search on Google"
          onChange={handleChange}
        ></input>

        <button
          onClick={initiateSearch}
          type="button"
          className="w-1/5 bg-indigo-500 hover:bg-indigo-600 text-xl text-white font-bold py-2 px-4 focus:outline-none focus:border-indigo-700 rounded-full"
        >
          Submit
        </button>
      </div>
      <p> Search results are here : {searchResults.length}</p>
      <div className="mt-2">
        {searchInProgres && <p> Search In Progress </p>}
        {searchResults?.items.length && (
            <div className="ml-10 mr-10">

          <ul>
            {searchResults.items.map((result, index) => (
              <SearchResult key={index} {...result}></SearchResult>
            ))}
          </ul>
            </div>
        )}
      </div>
    </>
  );
}
