import { NavLink } from 'react-router-dom';
import './SubMenu.scss';

export default function SubMenu() {
  return (
    <div className="subMenu">
      <h4 className="subMenu__title">Additional information</h4>
      <ul className="subMenu__list">
        <li className="subMenu__item">
          <NavLink className="subMenu__link" to="cast">
            Cast
          </NavLink>
        </li>
        <li className="subMenu__item">
          <NavLink className="subMenu__link" to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}