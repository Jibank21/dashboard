import React from 'react'
import styles from './sidebar.module.css'
import MenuLink from './menuLink/MenuLink'
import { Analytics, AttachMoney, Dashboard, HelpCenter, Logout, People, Settings, ShoppingBag, SupervisedUserCircle, Work } from '@mui/icons-material'
const menuItems = [
  {
    title:"Pages",
    list:[
      {
        title:"Dashboard",
        path:"/dashboard",
        icon:<Dashboard />
      },
      {
        title:"Users",
        path:"/dashboard/users",
        icon:<SupervisedUserCircle />
      },
      {
        title:"Products",
        path:"/dashboard/products",
        icon:<ShoppingBag />
      },
      {
        title:"Transactions",
        path:"/dashboard/transactions",
        icon:<AttachMoney />
      }

    ]
  },
  {
    title:"Analytics",
    list:[
      {
        title:"Revenue",
        path:"/dashboard/revenue",
        icon:<Work />
      },
      {
        title:"Reports",
        path:"/dashboard/reports",
        icon:<Analytics />
      },
      {
        title:"Teams",
        path:"/dashboard/teams",
        icon:<People />
      },
    ]
  },
  {
    title:"User",
    list:[
      {
        title:"Settings",
        path:"/dashboard/settings",
        icon:<Settings />
      },
      {
        title:"Help",
        path:"/dashboard/help",
        icon:<HelpCenter />
      },
    ]
  }
]
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div className={styles.userDetails}>
          <span className={styles.username}>
            Jeevan Khadka
          </span>
          <span className={styles.userTitle}>
              Adminastrator 
          </span>
        </div>
      </div>
      <ul className={styles.list}>
      {
  menuItems.map(cat => (
    <li key={cat.title}>
      <span className={styles.cat}>
        {cat.title}
      </span>
      {cat.list.map(item => (
       
        <MenuLink item={item} key={item.title} />
       
      ))}
    </li>
  ))
}

      </ul>
      <button className={styles.logout}>
        <Logout/>
        Logout
      </button>
    </div>
  )
}

export default Sidebar