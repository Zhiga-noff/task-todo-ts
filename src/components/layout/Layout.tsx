import { FC, ReactElement } from 'react';
import { InputTask } from '../input-task/InputTask';
import { NavigateBar } from '../navigate-bar/NavigateBar';
import styles from './Layout.module.scss';

interface ILayout {
  children: ReactElement;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <main className={styles.container}>
      <div className={styles.background}>
        <InputTask />
        {children}
        <NavigateBar />
      </div>
    </main>
  );
};
