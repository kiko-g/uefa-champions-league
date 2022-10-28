import Image from 'next/image'
import Layout from './layout'
import styles from '../styles/Simulation.module.css'

export default function Simulation() {
  return (
    <Layout>
      <div className={styles.simulation}>
        <h3>Simulation content</h3>
      </div>
    </Layout>
  )
}
