import type { MetaFunction, LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts } from '@remix-run/react';

import { useLocation } from 'react-router-dom';

import globalStylesUrl from './styles/sass/global.css';

import faviconUrl from '../public/favicon-32x32.png';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/navbar';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Frontend Mentor | Space tourism website',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: globalStylesUrl },
  {
    as: 'style',
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: faviconUrl,
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    as: 'style',
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap',
  },
];

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  let pathName = location.pathname;
  console.log(pathName);
  return (
    <div
      className={
        pathName === '/'
          ? 'inner-container home'
          : pathName === '/destination'
          ? 'inner-container destination'
          : pathName === '/crew'
          ? 'inner-container crew'
          : 'inner-container tech'
      }
    >
      <header className="header">
        <Navbar pageName={pathName} />
      </header>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.main
          className="main"
          // initial={{ opacity: 0, y: '50%' }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          exit={{ transition: { duration: 1.5 }, opacity: 0, y: '100%' }}
          key={location.key}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <main className="main">
          <h1>Oops! Something Went Wrong...</h1>
          <p className="error-message">{error.message}</p>
        </main>
      </body>
    </html>
  );
}
