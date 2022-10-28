import Image from 'next/image'
import Layout from './layout'
import styles from '../styles/Probabilities.module.css'

export default function Probabilities() {
  return (
    <Layout>
      <div className={styles.probabilities}>
        <h3>Probabilities content</h3>
      </div>
    </Layout>
  )
}
