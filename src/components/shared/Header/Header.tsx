import Logo from '@/assets/images/Logo.png'
import styles from './styles.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="Logo" className={styles.logo} />
    </div>
  )
}

export default Header