import React, { useState } from 'react'
import Footer from './Footer';
import Header from './Header';
import { English} from '../Language/Languages';

interface Props{
    children?:React.ReactNode;
}

const Layout :React.FC<Props> = ({children}) => {
  const [Language, setLanguage] = useState(English)
  
  return(
    <>
      <Header useLanguage={[Language, setLanguage]}/>

      <main>
      {React.cloneElement(children as React.ReactElement<any>, {testerino:"OOla mundo"})}
      </main>
      
      <Footer/>
    </>
  )
}

export default Layout 