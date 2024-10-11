import styles from './InputTask.module.scss';

export const InputTask = () => {
  return (
    <div className={styles.inputContainer}>
      <button className={styles.arrowBtn}></button>
      <input type="text" className={styles.input} />
    </div>
  );
};
