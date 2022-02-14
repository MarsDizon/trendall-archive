import React from "react";
import { SearchHeader } from ".";
import SearchResults from "./search_elements/SearchResults";

function FacetedSearch() {
    return (
        <div className="search-results">
            <SearchHeader />
            <SearchResults/>
        </div>
    );
}

export default FacetedSearch;