import data from '~/components/data/data.json';

import { json, LoaderFunction } from '@remix-run/node';
import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

export const loader: LoaderFunction = async () => {
  console.log(data);
  return json(data);
};

export default function crew() {
  let [index, setIndex] = useState<number>(0);

  const handleClick = (id: number) => {
    setIndex(id);
  };

  console.log(index);

  return (
    <>
      <h1 className="crew__title">
        <span>02</span>Meet your crew
      </h1>

      <div className="crew__hero-container">
        <img
          src={data.crew[index].images.png}
          alt=""
          className="crew__hero-img"
        />
      </div>

      <div className="crew__btn-container">
        {data &&
          data.crew.map((crew) => (
            <button
              className={index === crew.id ? 'crew__btn active' : 'crew__btn'}
              key={crew.id}
              onClick={() => handleClick(crew.id)}
            >
              <span className="sr-only">{crew.id}</span>
            </button>
          ))}
      </div>

      <div className="crew__content">
        <h3 className="crew__role">{data.crew[index].role}</h3>
        <h2 className="crew__name">{data.crew[index].name}</h2>
        <p className="crew__bio">{data.crew[index].bio}</p>
      </div>
    </>
  );
}
