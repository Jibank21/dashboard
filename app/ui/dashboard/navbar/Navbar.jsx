"use client"
import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import { Chat, Notifications, Public, Search } from '@mui/icons-material'
const Navbar = () => {

  const pathName = usePathname()
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathName.split("/").pop()}</div>
      <div className={styles.menu}>
          <div className={styles.search}>
            <Search />
            <input type="text" placeholder='search...' className={styles.input}/>
          </div>
          <div className={styles.icons}>
              <Chat />
              <Notifications  />
              <Public />
          </div>
      </div>
    </div>
  )
}

export default Navbar