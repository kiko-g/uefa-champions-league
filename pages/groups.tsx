import Image from 'next/image'
import Layout from './layout'
import styles from '../styles/Groups.module.css'
import GroupStandings from './components/GroupStandings'

export default function Groups() {
  return (
    <Layout>
      <div className={styles.groups}>
        <GroupStandings />
      </div>
    </Layout>
  )
}
