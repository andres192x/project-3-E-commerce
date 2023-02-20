import logo from '../../Assets/logo.png';
import cartIcon from '../../Assets/cartIcon.png';
import Auth from '../../utils/auth'

export default function Header({page, handlePageRender}) {

  const logout = () => {
    handlePageRender('home')

    Auth.logout();
  }

    return (
      <header className="nav">
        <nav className='nav-card'>
          <h1><a onClick={() => handlePageRender('home')} href='#home'>On Code</a></h1>
          <div><img className='logo' src={logo} alt='onCode Logo' /></div>
          <ul className="nav-links">
            <li className="nav-item"><a onClick={() => handlePageRender('about-us')} >About Us</a></li>
            <li className="nav-item"><a onClick={() => handlePageRender('collection')} >Collection</a></li>

            {Auth.loggedIn() ? 
            <li className="nav-item"><a onClick={logout}>Logout</a></li> 
            :
            <li className="nav-item"><a onClick={() => handlePageRender('login')}>Login</a></li>
            }
            
            
            <li className="nav-item"><a href='#cart'><img className='cart-icon' onClick={() => handlePageRender('cart')} src={cartIcon} alt='Shopping Cart Icon' /></a></li>
          </ul>
        </nav>
      </header>
    )
  }