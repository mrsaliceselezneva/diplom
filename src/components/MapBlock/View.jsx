import { forwardRef } from 'react';
import styles from './styles.module.scss';

const View = forwardRef((props, ref) => <div ref={ref} className={styles.map} />)

export default View;
