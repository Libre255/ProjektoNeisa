import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'

interface Props{
  testerino:string;
}
const Home: NextPage<Props> = ({testerino}) => {
  return (
    <>
      
      <p>{testerino}</p>
      <h1>Hello Neisa</h1>
    </>
  )
}

export default Home
