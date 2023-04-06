import './Header.css'
import logo from '../../../public/logo.png'

const Header = () => {
  return (
    <section className='container-fluid'>
      <div className="flexCenter paddings  h-container">
        <img src={logo} alt="Logo" width={100} />

        <div className="flexCenter h-menu">
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className='button'>
            <a href="">Contact</a>
            </button>
        </div>
      </div>
    </section>
  )
}

export default Header
