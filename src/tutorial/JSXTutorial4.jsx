/**
 * This source code provides a comprehensive example for
 * conditionally rendering JSX statements using if/else statments.
 *
 * Objectives: - Write conditional statement using if/else
 *             - Call component to render filtered list
 */

import { useState } from 'react';
import { SportsFigures } from './SportsFigures.js';

/*
 * If 'filteredFigures' size greater than 0, return sports figures.
 * Else return, 'No sports figures found for the selected sport'.
 * **/

const SelectedFigures = ({ filteredFigures }) => {
  if (filteredFigures.length > 0) {
    return (
      <>
        {filteredFigures.map(({ id, name, sport }) => (
          <li key={id}>
            <span>{name}</span>: <span>{sport}</span>
          </li>
        ))}
      </>
    );
  } else {
    return <p>No sports figures found for the selected sport.</p>;
  }
};

const JSXTutorial4 = () => {
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
      <ul>
        <SelectedFigures filteredFigures={filteredFigures} />
      </ul>
    </div>
  );
};

export default JSXTutorial4;
