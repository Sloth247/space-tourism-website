import { json, LoaderFunction } from '@remix-run/node';
import { Link, useSearchParams } from '@remix-run/react';
// import { useState } from 'react';

import data from '~/components/data/data.json';

export const loader: LoaderFunction = async () => {
  console.log(data);
  return json(data);
};

export default function destination() {
  // let [index, setIndex] = useState<number>(0);
  const [searchParams] = useSearchParams();
  const pathId = Number(searchParams.get('id'));

  return (
    <>
      <h1 className="destination__title">
        <span>01</span> Pick your destination
      </h1>
      <div className="destination__inner">
        <div className="destination__hero-container">
          <img
            src={data.destinations[pathId].images.png}
            alt=""
            aria-hidden="true"
            className="destination__hero-img"
          />
        </div>
        <section className="destination__text-container">
          <div className="destination__button-container">
            {data &&
              data.destinations.map((destination) => (
                <Link
                  to={`?id=${destination.id}`}
                  className={
                    pathId === destination.id
                      ? 'destination__planet-btn active'
                      : 'destination__planet-btn'
                  }
                  key={destination.id}
                  aria-current={pathId === destination.id ? 'page' : 'false'}
                >
                  {destination.name}
                </Link>
              ))}
          </div>
          <h2 className="destination__planet-name">
            {data.destinations[pathId].name}
          </h2>
          <p className="destination__description">
            {data.destinations[pathId].description}
          </p>
          <div className="destination__stats-container">
            <div className="destination__distance-container">
              <h3>Avg. distance</h3>
              <p>{data.destinations[pathId].distance}</p>
            </div>
            <div className="destination__time-container">
              <h3>Est. travel time</h3>
              <p>{data.destinations[pathId].travel}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
