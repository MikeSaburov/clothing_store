'use client'

import { useLang } from '@/hooks/useLang'
import { Logo } from '../elements/Logo/Logo'
import Link from 'next/link'

export const Header = () => {
  const { lang, translations } = useLang()

  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger'>
          {translations[lang].header.menu_btn}
        </button>
        <div className='header__logo'>
          <Logo />
        </div>

        <ul className='header__links list-reset'>
          <li className='header__links_item'>
            <button className='btn-reset header__links_item__btn header__links_item__btn--search'></button>
          </li>
          <li className='header__links_item'>
            <Link
              href='/favorites'
              className='header__links_item__btn header__links_item__btn--favorites'
            ></Link>
          </li>
          <li className='header__links_item'>
            <Link
              href='/comparison'
              className='header__links_item__btn header__links_item__btn--compare'
            ></Link>
          </li>
          <li className='header__links_item'>
            <Link
              href='/cart'
              className='header__links_item__btn header__links_item__btn--cart'
            ></Link>
          </li>
          <li className='header__links_item'>
            <Link
              href='/profile'
              className='header__links_item__btn header__links_item__btn--profile'
            ></Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
