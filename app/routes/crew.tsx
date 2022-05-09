import data from '~/components/data/data.json';

import { json, LoaderFunction } from '@remix-run/node';
// import { useState } from 'react';
import { Link, useSearchParams } from '@remix-run/react';

import { motion } from 'framer-motion';

const downAnimation = {
  key: 'down',
  initial: { opacity: 0, y: '-200%' },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.5, ease: 'easeInOut' },
};
const upAnimation = {
  key: 'up',
  initial: { opacity: 0, y: '50%' },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.5, ease: 'easeInOut' },
};

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
      <motion.h1 className="crew__title" {...downAnimation}>
        <span>02</span>Meet your crew
      </motion.h1>

      <div className="crew__inner-container">
        <div className="crew__text-container">
          <motion.div
            className="crew__btn-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, type: 'linear' }}
          >
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
          </motion.div>

          <div className="crew__content">
            <motion.h3
              className="crew__role"
              key="down"
              initial={{ opacity: 0, y: '-200%' }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              {data.crew[pathId].role}
            </motion.h3>
            <motion.h2 className="crew__name" {...upAnimation}>
              {data.crew[pathId].name}
            </motion.h2>
            <motion.p className="crew__bio" {...upAnimation}>
              {data.crew[pathId].bio}
            </motion.p>
          </div>
        </div>
        <motion.div className="crew__hero-container" {...upAnimation}>
          <img
            src={data.crew[pathId].images.png}
            alt=""
            aria-hidden="true"
            className="crew__hero-img"
          />
        </motion.div>
      </div>
    </>
  );
}
