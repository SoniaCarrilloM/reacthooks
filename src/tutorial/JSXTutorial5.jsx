/**
 * This source code provides a comprehensive example for
 * conditionally rendering JSX statements using the terenary operator
 *
 * Objectives: - Write conditional statement using ternary operator
 *             - Call component to render filtered list
 */

import { useState } from 'react';
import { SportsFigures } from './SportsFigures.js';

const SelectedFigures = ({ filteredFigures }) => {
  return (
    <ul>
      {filteredFigures.map(({ id, name, sport }) => (
        <li key={id}>
          <span>{name}</span>: <span>{sport}</span>
        </li>
      ))}
    </ul>
  );
};

const JSXTutorial5 = () => {
  const [selectedSport, setSelectedSport] = useState('all');

  const handleSportChange = (event) => {
    setSelectedSport(event.target.value);
  };

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
      {filteredFigures.length > 0 ? (
        <SelectedFigures filteredFigures={filteredFigures} />
      ) : (
        <p>No sports figures found for the selected sport.</p>
      )}
    </div>
  );
};

export default JSXTutorial5;
