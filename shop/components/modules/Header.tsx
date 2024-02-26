'use client'

import { useLang } from '@/hooks/useLang'
import { Logo } from '../elements/Logo/Logo'
import Link from 'next/link'
import '@/app/globalStyles/header.css'
import { Menu } from './Menu'
import { openMenu } from '@/context/modals'

export const Header = () => {
  const { lang, translations } = useLang()

  const handleOpenMenu = () => {
    openMenu()
  }

  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger'>
          {translations[lang].header.menu_btn}
        </button>
        <Menu />
        <div className='header__logo'>
          <Logo />
        </div>

        <ul className='header__links list-reset'>
          <li className='header__links__item'>
            <button className='btn-reset header__links__item__btn header__links__item__btn--search'></button>
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--favorites'
            ></Link>
          </li>
          <li className='header__links__item'>
            <Link
              href='/comparison'
              className='header__links__item__btn header__links__item__btn--compare'
            ></Link>
          </li>
          <li className='header__links__item'>
            <Link
              href='/cart'
              className='header__links__item__btn header__links__item__btn--cart'
            ></Link>
          </li>
          <li className='header__links__item header__links__item--profile'>
            <Link
              href='/profile'
              className='header__links__item__btn header__links__item__btn--profile'
            ></Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
