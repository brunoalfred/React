// eslint-disable-next-line no-unused-vars
import React, {useState} from "react"

const SearchParams = () => {
    
    // eslint-disable-next-line no-undef
    const [location, updateLocation] = useState("Seattle, WA");

    return(
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    {location}
                    <input id="location" 
                    value={location} 
                    placeholder="Location"
                    onChange={event => updateLocation(event.target.value)}
                    />
                </label>
            </form>
        </div>
    );
}

export default SearchParams;