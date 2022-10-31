import { useState } from 'react'
import Layout from './layout'
import Cell from './components/Cell'
import Last16 from '../data/last16.json'
import { PotTeam } from '../types'
import { PlayIcon } from '@heroicons/react/24/solid'
import { simulate } from '../utils'

export default function Probabilities() {
  const amount = 10000
  const pot1: PotTeam[] = Last16.pot1
  const pot2: PotTeam[] = Last16.pot2
  const [probabilities, setProbabilities] = useState(Array(8).fill(Array(8).fill('0.00')))
  const [processing, setProcessing] = useState(false)

  const runSimulations = (amount: number) => {
    setProcessing(true)
    const results = []
    for (let i = 0; i < amount; i++) {
      const result = simulate(pot1, pot2)
      results.push(result)
    }

    console.log(results)
    setTimeout(() => setProcessing(false), 500)
  }

  return (
    <Layout>
      <div className="probabilities">
        <div className="combinations">
          <div className="column">
            <div className="top-cell">
              <button onClick={() => runSimulations(amount)} disabled={processing}>
                <PlayIcon className="h-5 w-5" />
              </button>
            </div>
            {pot1.map((team, teamIdx) => (
              <Cell
                key={`pot1-team-${teamIdx}`}
                badge={team.badge}
                teamName={team.name}
                twClasses={`${teamIdx === pot1.length - 1 ? 'rounded-bl' : ''}`}
              />
            ))}
          </div>

          {pot2.map((team, teamIdx) => (
            <div className="column" key={`pot2-team-${teamIdx}`}>
              <Cell badge={team.badge} teamName={team.name} twClasses={`${teamIdx === pot2.length - 1 ? 'rounded-tr' : ''}`} />
              {probabilities[teamIdx].map((prob: string, probIdx: number) =>
                probIdx === teamIdx || team.country === pot1[probIdx].country ? (
                  <Cell blank key={`prob-${teamIdx}-${probIdx}`} />
                ) : (
                  <Cell
                    text={prob}
                    key={`prob-${teamIdx}-${probIdx}`}
                    twClasses={teamIdx === pot2.length - 1 && probIdx === probabilities[teamIdx].length - 1 ? 'rounded-br' : ''}
                  />
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
