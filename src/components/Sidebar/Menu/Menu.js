// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string,
    filepath?: string,
  }[],
};

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      <li className={styles['menu__list-item']}>
        <Link
          to="/"
          className={styles['menu__list-item-link']}
          activeClassName={styles['menu__list-item-link--active']}
        >
          Introduction
        </Link>
      </li>
      <li className={styles['menu__list-item']}>
        <a
          href="/Soyeon_Kim_Curriculum_Vitae.pdf"
          target="_blank"
          className={styles['menu__list-item-link']}
          activeClassName={styles['menu__list-item-link--active']}
        >
          Curriculum Vitae
        </a>
      </li>
      <li className={styles['menu__list-item']}>
        <a
          href="/Soyeon_Kim_Writing_Sample_Masters_thesis.pdf"
          target="_blank"
          className={styles['menu__list-item-link']}
          activeClassName={styles['menu__list-item-link--active']}
        >
          Masters Thesis
        </a>
      </li>
      <li className={styles['menu__list-item']}>
        <Link
          to="/pages/experiences"
          className={styles['menu__list-item-link']}
          activeClassName={styles['menu__list-item-link--active']}
        >
          Professional & overseas experiences
        </Link>
      </li>
      <li className={styles['menu__list-item']}>
        <Link
          to="/pages/more"
          className={styles['menu__list-item-link']}
          activeClassName={styles['menu__list-item-link--active']}
        >
          More about me
        </Link>
      </li>
      {/* {menu.map(item => (
        <li className={styles['menu__list-item']} key={item.path}>
          <Link
            to={item.path}
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
          >
            {item.label}
          </Link>
        </li>
      ))} */}
    </ul>
  </nav>
);

export default Menu;
