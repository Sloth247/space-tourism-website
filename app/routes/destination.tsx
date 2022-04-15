import { json, LoaderFunction } from '@remix-run/node';
import { useState } from 'react';

import data from '~/components/data/data.json';

export const loader: LoaderFunction = async () => {
  console.log(data);
  return json(data);
};

export default function destination() {
  let [index, setIndex] = useState<number>(0);

  const handleClick = (id: number) => {
    setIndex(id);
  };

  return (
    <>
      <h1 className="destination__title">
        <span>01</span> Pick your destination
      </h1>
      <div className="destination__hero-container">
        <img
          src={data.destinations[index].images.png}
          alt=""
          aria-hidden="true"
          className="destination__hero-img"
        />
      </div>
      <div className="destination__button-container">
        {data &&
          data.destinations.map((destination) => (
            <button
              className={
                index === destination.id
                  ? 'destination__planet-btn active'
                  : 'destination__planet-btn'
              }
              key={destination.id}
              onClick={() => handleClick(destination.id)}
            >
              {destination.name}
            </button>
          ))}
      </div>
      <h2 className="destination__planet-name">
        {data.destinations[index].name}
      </h2>
      <p className="destination__description">
        {data.destinations[index].description}
      </p>
      <div className="destination__distance-container">
        <h3>Avg. distance</h3>
        <p>{data.destinations[index].distance}</p>
      </div>
      <div className="destination__time-container">
        <h3>Est. travel time</h3>
        <p>{data.destinations[index].travel}</p>
      </div>
    </>
  );
}
