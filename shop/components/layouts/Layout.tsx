import { Header } from '../modules/Header'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <div className='' />
    </>
  )
}
