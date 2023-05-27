import React from 'react';
import styles from '../styles/Global';

const Button = ({ assetUrl, link }) => {
  return (
    <a
      href="https://expo.dev/@tripti.033/my-app?serviceTType=classic&distribution=expo-go"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btnBlack}
    >
      <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} />
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
        <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
      </div>
    </a>
  );
}

export default Button;
