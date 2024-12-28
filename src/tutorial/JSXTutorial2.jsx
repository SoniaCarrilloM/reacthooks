import { SportsFigures } from './SportsFigures';

const JSXTutorial2 = () => {
  return (
    <>
      <h1>My Favorite Sports Figures</h1>
      <ul>
        {SportsFigures.map(({ id, name, sport }) => (
          <li key={id}>
            <span>{name}</span> : <span>{sport}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default JSXTutorial2;
