// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div className={styles['author']}>
    <Link to="/">
      <img
        src="http://localhost:8000/profile-pic.jpg"
        className={styles['author__photo']}
        width="110"
        height="100"
        alt="Tyler Ivie"
      />
    </Link>

    { isIndex === true ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">Tyler Ivie</Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">Tyler Ivie</Link>
      </h2>
    )}
    <p className={styles['author__subtitle']}>Welcome to my blog! Consume at your own pleasure.</p>
  </div>
);

export default Author;
