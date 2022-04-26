import { json, LoaderFunction } from '@remix-run/node';
import { Link, useSearchParams } from '@remix-run/react';

import data from '~/components/data/data.json';

export const loader: LoaderFunction = async () => {
  console.log(data);
  return json(data);
};

export default function technology() {
  // let [index, setIndex] = useState<number>(0);
  const [searchParams] = useSearchParams();
  const pathId = Number(searchParams.get('id'));
  // console.log(pathId);

  // const handleClick = (id: number) => {
  //   setIndex(id);
  // };
  return (
    <>
      <h1 className="technology__title">
        <span>03</span>Space Launch 101
      </h1>
      <div className="technology__container">
        <picture className="technology__hero-container">
          <source
            srcSet={data.technology[pathId].images.portrait}
            media="(min-width: 62.5em)"
          />
          <img
            src={data.technology[pathId].images.landscape}
            alt=""
            aria-hidden="true"
            className="technology__hero-img"
          />
        </picture>

        <div className="technology__btn-container">
          {data &&
            data.technology.map((tech) => (
              <Link
                to={`?id=${tech.id}`}
                className={
                  pathId === tech.id
                    ? 'technology__btn active'
                    : 'technology__btn'
                }
                aria-current={pathId === tech.id ? 'page' : 'false'}
                key={tech.id}
                // onClick={() => handleClick(tech.id)}
              >
                <span>{tech.id + 1}</span>
              </Link>
            ))}
        </div>
        <section className="technology__text-container">
          <h3 className="technology__sub-title">The Terminology...</h3>
          <h2 className="technology__name">{data.technology[pathId].name}</h2>
          <p className="technology__description">
            {data.technology[pathId].description}
          </p>
        </section>
      </div>
    </>
  );
}
