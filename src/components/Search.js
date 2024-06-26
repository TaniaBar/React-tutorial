import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Search.css";

function useQuery() {
  // Use the URLSearchParams API to extract the query parameters
  // useLocation().search will have the query parameters eg: ?foo=bar&a=b
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const query = useQuery();
  const term = query.get("term");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    //prevent the default form submission
    e.preventDefault();

    //extract search term using refs.
    const searchValue = inputRef.current.value;
    navigate(`?term=${searchValue}`);
  };

  return (
    <div className="search-bar">
      <form action="" onSubmit={formSubmitHandler}>
        <input type="text" name="term" className="input-search" ref={inputRef} />
        <input type="submit" value="Search" className="btn-search"/>
        {/* Display the search term if it is present */}
        {term && <h2>Results for '{term}'</h2>}
      </form>
    </div>
  );
};

export default Search;
