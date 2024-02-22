import { useLang } from '@/hooks/useLang'

export const Header = () => {
  const { lang, translations } = useLang()

  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger'></button>
      </div>
    </header>
  )
}
