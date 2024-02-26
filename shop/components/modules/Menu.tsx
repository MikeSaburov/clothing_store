import { useLang } from '@/hooks/useLang'
import { useState } from 'react'

export const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyersList, setShowBuyersList] = useState(false)
  const [showContactsList, setShowContactsList] = useState(false)
  const { lang, translations } = useLang()
  return <div>Menu</div>
}
