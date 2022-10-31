import { useState } from 'react'
import { PotTeam } from '../types'
import Image from 'next/image'
import Layout from './layout'
import Last16 from '../data/last16.json'
import { PlayIcon } from '@heroicons/react/24/solid'

export default function Simulation() {
  const pot1: PotTeam[] = Last16.pot1
  const pot2: PotTeam[] = Last16.pot2
  const [matches, setMatches] = useState<any>([])

  const simulate = () => {
    const newMatches = []
    for (let i = 0; i < 8; i++) {
      newMatches.push([pot1[i], pot2[i]])
    }

    setMatches([...newMatches])
  }

  return (
    <Layout>
      <div className="simulation">
        {/* Staging */}
        <div className="staging">
          <div className="teams">
            <div className="pot">
              <h3>1st seed teams</h3>
              <ul>
                {pot1.map((team, teamIdx) => (
                  <li key={`pot-1-team-${teamIdx}`}>
                    <Image src={team.badge} alt={`${team.name} badge`} width={24} height={24} />
                    <p>{team.name}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pot">
              <h3>2nd seed teams</h3>
              <ul>
                {pot2.map((team, teamIdx) => (
                  <li key={`pot-2-team-${teamIdx}`}>
                    <Image src={team.badge} alt={`${team.name} badge`} width={24} height={24} />
                    <p>{team.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button className="run" onClick={simulate}>
            <span>Run</span>
            <PlayIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Matches */}
        <div className="matches">
          {matches.length !== 0 ? (
            <div className="display">
              {matches.map((match: any, matchIdx: number) => (
                <div key={`match-${matchIdx}`} className="match">
                  <div className="side">
                    <Image src={match[0].badge} alt={`${match[0].name} badge`} width={24} height={24} />
                    <span>{match[0].name}</span>
                  </div>

                  <div className="side">
                    <span>{match[1].name}</span>
                    <Image src={match[1].badge} alt={`${match[1].name} badge`} width={24} height={24} />
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  )
}
