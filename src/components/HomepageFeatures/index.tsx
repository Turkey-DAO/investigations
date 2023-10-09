import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import imgInvestigate from '@site/static/img/icon-investigations.png';
import imgRecords from '@site/static/img/icon-records.png';
import imgContribute from '@site/static/img/icon-contribute.png';

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
        <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src={imgInvestigate} alt="Investigations" />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Incidents & Investigations</h3>
              <p>Explore Incidents & Investigations in Detail with their relationship to relevant blockchain assets</p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src={imgRecords} alt="Records" />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Records</h3>
              <p>View verified asset (wallet, address, contract) information related to investigations</p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src={imgContribute} alt="Contribute" />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Contribute</h3>
              <p>Get involved and provide more context to existing reports, verified asset information, or the details of an incident</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
