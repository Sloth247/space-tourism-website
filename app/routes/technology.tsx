import { json, LoaderFunction } from '@remix-run/node';
import { Link, useSearchParams } from '@remix-run/react';
import { motion } from 'framer-motion';

import data from '~/components/data/data.json';

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
      <motion.h1 className="technology__title" {...downAnimation}>
        <span>03</span>Space Launch 101
      </motion.h1>
      <div className="technology__container">
        <div className="technology__left-container">
          <motion.div className="technology__btn-container" {...upAnimation}>
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
          </motion.div>
          <section className="technology__text-container">
            <motion.h3 className="technology__sub-title" {...downAnimation}>
              The Terminology...
            </motion.h3>
            <motion.h2 className="technology__name" {...upAnimation}>
              {data.technology[pathId].name}
            </motion.h2>
            <motion.p className="technology__description" {...upAnimation}>
              {data.technology[pathId].description}
            </motion.p>
          </section>
        </div>
        <motion.picture className="technology__hero-container" {...upAnimation}>
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
        </motion.picture>
      </div>
    </>
  );
}
