import { useState } from "react";
import SearchResult from "./SearchResult";

const SEARCH_API =
  `https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_API_KEY}&cx=${import.meta.env.VITE_SEARCH_ENGINE_ID}&fields=items(title,link,snippet),queries(previousPage/startIndex,nextPage/startIndex)`;

export default function Search() {
  const [searchResults, setSearchResults] = useState(null);
  const [searchString, setSearchString] = useState();
  const [searchInProgres, setSearchInProgres] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setSearchString(e.target.value)
  };

  const initiateSearch = async function (searchType) {
    if(searchString && searchString.trim()){
        setSearchInProgres(true);
        let startIndex = 0; 
        let pageNumberToSet = 1;
        if (searchType === 'previous'){
            startIndex = searchResults ? searchResults?.queries?.previousPage[0]?.startIndex : 0;
            pageNumberToSet = pageNumber - 1;
        }else if(searchType === 'next'){
            startIndex = searchResults ? searchResults?.queries?.nextPage[0]?.startIndex : 0;
            pageNumberToSet = pageNumber + 1;
        }
        try{
          const searchResult = await fetch(`${SEARCH_API}&q=${searchString}&start=${startIndex}`);
          if (searchResult.ok) {
            const result = await searchResult.json();
            setSearchResults(result);
            setPageNumber(pageNumberToSet);
            setError(null);
          }else{
              const result = await searchResult.json();
              setError(result.error.message);
              setSearchResults(null);
          }
        }catch(error){
          setError(error?.message || 'Failed to fetch the API');
        }
        setSearchInProgres(false);
    }else{
        alert('Enter a search string');
    }
  };
  const disablePrevious = !searchResults?.queries?.previousPage;
  const disableNext = !searchResults?.queries?.nextPage;
  
  return (
    <>
        {searchInProgres &&
            <div className="flex justify-center items-center h-screen fixed left-[50%]">
                <div className="w-[60px] h-[60px] animate-ping border-2 border-indigo-500 rounded-full">
                </div>
            </div>
        
        }
      <div className="max-w-xl mx-auto mt-4 flex flex-row gap-1">
        <input
          type="text"
          className="w-4/5 px-3 py-2 border text-gray-700 focus:outline-none focus:ring border-indigo-500
            rounded-full"
          placeholder="Enter a word to search on Google"
          onChange={handleChange}
        ></input>

        <button
          onClick={() => initiateSearch('base')}
          type="button"
          className="w-1/5 bg-indigo-500 hover:bg-indigo-600 text-xl text-white font-bold py-2 px-4 focus:outline-none focus:border-indigo-700 rounded-full"
        >
          Submit
        </button>
      </div>
      {error && <p className="font-bold text-red-400 mt-2 ml-5"> { error }</p>}
      { searchResults?.items?.length && <div className="mt-2 ">
        <div className="max-h-[600px] overflow-x-hidden overflow-y-scroll">
        <div className="ml-10 mr-10">

          <ul>
            {searchResults.items.map((result, index) => (
              <SearchResult key={index} {...result}></SearchResult>
            ))}
          </ul>
            </div>
        </div>
        <div className="flex flex-row gap-10 justify-center items-center">
            <button 
                type="button" 
                className={`text-indigo-500 font-bold ${disablePrevious ? 'cursor-not-allowed text-gray-500' : 'cursor-pointer'}`} 
                disabled={disablePrevious}
                onClick={() => initiateSearch('previous')}> Previous </button>
            <button type="button" className="text-indigo-500 font-bold cursor-default"> Page {pageNumber} </button>
            <button 
                type="button" 
                className={`text-indigo-500 font-bold ${disableNext ? 'cursor-not-allowed text-gray-500' : 'cursor-pointer'}`} 
                disabled={disableNext}
                onClick={() => initiateSearch('next')}> Next </button>
        </div>
      </div>}

    </>
  );
}
