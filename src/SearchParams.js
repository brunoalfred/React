// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  // eslint-disable-next-line no-undef
  const [location, updateLocation] = useState("Seattle, WA");
  const [animal, updateAnimal] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          {location}
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => updateLocation(event.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(event) => updateAnimal(event.target.value)}
            onBlur={(event) => updateAnimal(event.target.value)}
          >
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
