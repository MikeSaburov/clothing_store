import Link from 'next/link'

export const Logo = () => (
  <Link className='logo' href='/'>
    <img src='/img/logo.svg' alt='Logo' className='logo__im' />
  </Link>
)
