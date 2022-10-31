import { PotTeam } from '../types'

export const filterSet = (target: PotTeam, teams: PotTeam[]) => {
  const set: PotTeam[] = []

  for (let team of teams) {
    if (team.country !== target.country && team.group !== target.group) {
      set.push(team)
    }
  }

  return set
}

export const simulate = (pot1: PotTeam[], pot2: PotTeam[]) => {
  let valid = true
  let newMatches = []

  do {
    newMatches = []
    const set1 = JSON.parse(JSON.stringify(pot1))
    const set2 = JSON.parse(JSON.stringify(pot2))

    for (let i = 0; i < 8; i++) {
      const randomIndexA = Math.floor(Math.random() * set1.length)
      const teamA = set1[randomIndexA]
      set1.splice(randomIndexA, 1) // remove team A from set 1

      const curatedSet2 = filterSet(teamA, set2) // apply restrictions
      const randomIndexB = Math.floor(Math.random() * curatedSet2.length)
      const teamB = set2[randomIndexB]
      set2.splice(randomIndexB, 1) // remove team B from set 2

      newMatches.push([teamA, teamB])
    }

    valid = newMatches
      .map((pair) => pair[0].country === pair[1].country || pair[0].group === pair[1].group)
      .every((item) => item === false)
  } while (!valid)

  return JSON.parse(JSON.stringify(newMatches))
}
