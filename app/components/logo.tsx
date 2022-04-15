import { Link } from '@remix-run/react';
import Logo from '../../public/images/shared/logo.svg';

export default function logo() {
  return (
    <Link to="/" className="logo-container">
      <img src={Logo} alt="space tourism" />
    </Link>
  );
}
