import { HistoryIcon, HouseIcon, Settings2Icon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return ( 
    <nav className={styles.menu}>
      <a className={styles.menulink} href='#'>
        <HouseIcon />
      </a>
         <a className={styles.menulink} href='#'>
        <HistoryIcon />
      </a>
         <a className={styles.menulink} href='#'>
        <Settings2Icon/>
      </a>
         <a className={styles.menulink} href='#'>
        <SunIcon />
      </a>
    </nav>
  )
} 