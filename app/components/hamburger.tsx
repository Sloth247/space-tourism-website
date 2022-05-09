import Hamburger from '../../public/images/shared/icon-hamburger.svg';
import Cross from '../../public/images/shared/icon-close.svg';

export default function hamburger({
  handleClick,
  expanded,
}: {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  expanded: boolean;
}) {
  return (
    <button
      type="button"
      className="menu-btn"
      aria-expanded={expanded}
      onClick={handleClick}
      aria-controls="menu-container"
    >
      {!expanded ? (
        <img src={Hamburger} alt="open menu" />
      ) : (
        <img src={Cross} alt="close menu" />
      )}
    </button>
  );
}
