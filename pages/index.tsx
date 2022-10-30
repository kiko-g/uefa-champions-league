import Link from 'next/link'
import Image from 'next/image'
import Layout from './layout'
import { Banner, Simulation, Groups, Probabilities } from '../public/images'

export default function Home() {
  return (
    <Layout>
      <div className="home">
        <div className="options">
          <Link href="/groups" className="link">
            <Image src={Groups} alt="Consult groups" className="image" />
          </Link>

          <Link href="/simulation" className="link">
            <Image src={Simulation} alt="Simulate draw" className="image" />
          </Link>

          <Link href="/probabilities" className="link">
            <Image src={Probabilities} alt="Draw Probabilities" className="image" />
          </Link>
        </div>
      </div>
    </Layout>
  )
}
