import Logo from '@/assets/images/Logo.png'
import style from './styles.module.css'

const Header = () => {
  return (
    <div className={style.header}>
      <img src={Logo} alt="Logo" className={style.logo} />
    </div>
  )
}

export default Header