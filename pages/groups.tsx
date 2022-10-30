import Image from 'next/image'
import Layout from './layout'
import GroupStandings from './components/GroupStandings'

export default function Groups() {
  return (
    <Layout>
      <div className="groups">
        <GroupStandings />
      </div>
    </Layout>
  )
}
