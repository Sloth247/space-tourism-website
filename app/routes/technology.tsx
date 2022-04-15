import { json, LoaderFunction } from '@remix-run/node';
import { useState } from 'react';
import data from '~/components/data/data.json';

export const loader: LoaderFunction = async () => {
  console.log(data);
  return json(data);
};

export default function technology() {
  let [index, setIndex] = useState<number>(0);

  const handleClick = (id: number) => {
    setIndex(id);
  };
  return (
    <>
      <h1 className="technology__title">
        <span>03</span>Space Launch 101
      </h1>
      <div className="technology__hero-container">
        <img
          src={data.technology[index].images.landscape}
          alt=""
          aria-hidden="true"
          className="technology__hero-img"
        />
      </div>

      <div className="technology__btn-container">
        {data &&
          data.technology.map((tech) => (
            <button
              className={
                index === tech.id ? 'technology__btn active' : 'technology__btn'
              }
              key={tech.id}
              onClick={() => handleClick(tech.id)}
            >
              <span>{tech.id + 1}</span>
            </button>
          ))}
      </div>
      <h3 className="technology__sub-title">The Terminology...</h3>
      <h2 className="technology__name">{data.technology[index].name}</h2>
      <p className="technology__description">
        {data.technology[index].description}
      </p>
    </>
  );
}
