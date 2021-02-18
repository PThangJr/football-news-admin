import React from 'react';

const Header = () => {
  const username = localStorage.getItem('username');
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__header">
          <span className="navbar__header-menu-icon">
            <i className="fas fa-bars"></i>
          </span>
          <h3 className="navbar__header-heading hide-on-mobile">ADMIN</h3>
        </div>
        <div className="search">
          <form className="search-box">
            <input type="text" className="search__input" placeholder="Search..." />
            <button type="submit" className=" btn--default search__icon">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div className="account">
          <div className="account-main">
            <span className="account__logo">
              <i className="fas fa-user-secret"></i>
            </span>
            <span className="account__name">{username}</span>
          </div>
          <ul className="account-sub">
            <li className="account-sub__item">
              <span className="account-sub__item-icon">
                <i className="fas fa-key"></i>
              </span>
              Đổi mật khẩu
            </li>
            <li className="account-sub__item">
              <span className="account-sub__item-icon">
                <i className="fas fa-sign-out-alt"></i>
              </span>
              Đăng xuất
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
