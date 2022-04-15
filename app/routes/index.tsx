import { Link } from '@remix-run/react';

export default function Home() {
  return (
    <>
      <h2 className="main__sub-title">So, you want to travel to</h2>
      <h1 className="main__title">Space</h1>
      <p className="main__description">
        Let&apos;s face it; if you want to go to space, you might as well
        genuinely go to outer space and not hover kind of on the edge of it.
        Well sit back, and relax because we&apos;ll give you a truly out of this
        world experience!
      </p>
      <Link to="/destination" className="explore-btn">
        <span>Explore</span>
      </Link>
    </>
  );
}
