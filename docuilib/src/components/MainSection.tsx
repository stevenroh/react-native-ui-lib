import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './MainSection.module.scss';
import componentsStyles from '../css/Components.module.scss';
import mainCover from '@site/static/img/mainCover.jpg';
import GoldStarSvg from '@site/static/img/goldStar.svg';

export default () => {
  const {siteConfig} = useDocusaurusContext();

  return (
    <div className={styles.intro}>
      <img src={mainCover} alt="showcase" _className={styles.introCover}/>
      <div className={styles.introContent}>
        <p>
          <span className={styles.libName}>RNUI</span> is a UI Toolset & Components Library for React Native
        </p>
        <div className={styles.gitStars}>
          <GoldStarSvg width={16} height={16} style={{margin: 4}}/>
          <span>3.6k</span>
        </div>

        <div className={styles.buttons}>
          <Link to="/getting-started/setup">
            <button className={componentsStyles.btnDark}>View Docs</button>
          </Link>

          <a href={siteConfig.customFields.expoSnackLink} target="_blank" rel="noopener noreferrer">
            <button className={componentsStyles.btn}>Expo-Snack Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};
