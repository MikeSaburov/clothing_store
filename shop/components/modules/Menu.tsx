import { $menuIsOpen } from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import { useUnit } from 'effector-react'
import { useState } from 'react'

export const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyersList, setShowBuyersList] = useState(false)
  const [showContactsList, setShowContactsList] = useState(false)
  const { lang, translations } = useLang()
  const menuIsOpen = useUnit($menuIsOpen)

  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <h1>Menu</h1>
    </nav>
  )
}
