import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="search "
      type="text"
      placeholder="Search Movie..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;
