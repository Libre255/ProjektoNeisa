import React from 'react'

interface Props{
    children?:React.ReactNode;
}
const Layout :React.FC<Props> = ({children}) => {
 
  return(
    <div>
        <h1>Kappa</h1>
       {React.cloneElement(children as React.ReactElement<any>, {testerino:"OOla mundo"})}
    </div>
  )
}

export default Layout 