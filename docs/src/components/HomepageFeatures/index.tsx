import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  png?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    png: 'img/easy-to-use.png',
    description: (
      <>
        nestjs-cashify is very easy to use! Just install and import the module
        and use it in your services!
      </>
    ),
  },
  {
    title: 'Powered by NestJS',
    png: 'img/nestjs-cashify.png',
    description: (
      <>
        This module is built on top of nestjs framework which brings all
        you need to work with classes.
      </>
    ),
  },
  {
    title: 'Asnyc Configuration',
    png: 'img/hourglass.png',
    description: (
      <>
        Using nestjs async configuration, it's possible to configure it in an async way
        while importing.
      </>
    ),
  },
];

function Feature({title, png, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img width={90} src={png} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
