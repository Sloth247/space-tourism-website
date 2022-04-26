import data from '~/components/data/data.json';

import { json, LoaderFunction } from '@remix-run/node';
// import { useState } from 'react';
import { Link, useSearchParams } from '@remix-run/react';

export const loader: LoaderFunction = async () => {
  console.log(data);
  return json(data);
};

export default function crew() {
  // let [index, setIndex] = useState<number>(0);

  // const handleClick = (id: number) => {
  //   setIndex(id);
  // };
  const [searchParams] = useSearchParams();
  const pathId = Number(searchParams.get('id'));

  return (
    <>
      <h1 className="crew__title">
        <span>02</span>Meet your crew
      </h1>

      <div className="crew__inner-container">
        <div className="crew__hero-container">
          <img
            src={data.crew[pathId].images.png}
            alt=""
            aria-hidden="true"
            className="crew__hero-img"
          />
        </div>

        <div className="crew__text-container">
          <div className="crew__btn-container">
            {data &&
              data.crew.map((crew) => (
                <Link
                  to={`?id=${crew.id}`}
                  className={
                    pathId === crew.id ? 'crew__btn active' : 'crew__btn'
                  }
                  key={crew.id}
                  aria-current={pathId === crew.id ? 'page' : 'false'}
                >
                  <span className="sr-only">{crew.id}</span>
                </Link>
              ))}
          </div>

          <div className="crew__content">
            <h3 className="crew__role">{data.crew[pathId].role}</h3>
            <h2 className="crew__name">{data.crew[pathId].name}</h2>
            <p className="crew__bio">{data.crew[pathId].bio}</p>
          </div>
        </div>
      </div>
    </>
  );
}
