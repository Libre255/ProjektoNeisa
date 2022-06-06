import type { NextPage } from 'next'
import styles from '../styles/Home/Home.module.css';

interface Props{
  testerino:string;
}
const Home: NextPage<Props> = ({testerino}) => {
  return (
    <div className={`${styles.HomePage} container-fluid`}>
      
      <div className="container mt-6">
        <h1>Hjälp oss att hjälpa</h1>
      </div>
    </div>
  )
}

export default Home
