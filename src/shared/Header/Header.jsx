import React from 'react';
import Logo from '../../assets/img/logo.png';
import style from './Header.module.css';

const Header = ({path, changePage})=> {


	return (
		<header className={style.header}>
			<div className={style.logo}>
				<img src={Logo} alt="Logo" className={style.logo__img}/>
			</div>
			<div className={style.navbar}>
				<nav className={style.menu}>
					<ul className={style.menu__list}>
						{path.map((el, i)=> {
							return <li key={i} onClick={()=> changePage(el)} className={style.menu__item}>{el}</li>
						})}
					</ul>
				</nav>
			</div>
		</header>
	)
}
export default Header;