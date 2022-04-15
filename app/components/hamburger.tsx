import Hamburger from '../../public/images/shared/icon-hamburger.svg';
import Cross from '../../public/images/shared/icon-close.svg';

export default function hamburger({
  handleClick,
  expanded,
  clicked,
}: {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  expanded: boolean;
  clicked: boolean;
}) {
  return (
    <button
      type="button"
      className="menu-btn"
      aria-expanded={expanded}
      onClick={handleClick}
      aria-controls="menu-container"
    >
      {!clicked ? (
        <img src={Hamburger} alt="open menu" />
      ) : (
        <img src={Cross} alt="close menu" />
      )}
    </button>
  );
}
