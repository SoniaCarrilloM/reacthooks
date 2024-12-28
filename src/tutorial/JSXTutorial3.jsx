/**
 * This source code provides a comprehensive example of
 * implementing filtering functionality in a React application.
 *
 * Objectives: - Write filter expression
 *             - Write JSX code to dynamically render filtered list
 */

import { useState } from 'react';
import { SportsFigures } from './SportsFigures.js';

const FilteredFigures = ({ filteredFigures }) => {
  return (
    <>
      {filteredFigures.map(({ id, name, sport }) => (
        <li key={id}>
          <span>{name}</span>: <span>{sport}</span>
        </li>
      ))}
    </>
  );
};

const JSXTutorial3 = () => {
  const [selectedSport, setSelectedSport] = useState('all');

  const handleSportChange = (event) => {
    setSelectedSport(event.target.value);
  };

  /**
   * TODO: - add filtering code based on selected value
   */
  const filteredFigures =
    selectedSport === 'all'
      ? SportsFigures
      : SportsFigures.filter((sport) => sport.sport === selectedSport);

  return (
    <div>
      <h1>Sports Figures</h1>
      <label htmlFor="sportFilter">Filter by Sport: </label>
      <select id="sportFilter" value={selectedSport} onChange={handleSportChange}>
        <option value="all">All</option>
        <option value="NBA">NBA</option>
        <option value="NFL">NFL</option>
        <option value="EPL">EPL</option>
        <option value="MLB">MLB</option>
        <option value="NHL">NHL</option>
      </select>
      <hr />
      <ul>
        <FilteredFigures filteredFigures={filteredFigures} />
      </ul>
    </div>
  );
};

export default JSXTutorial3;
