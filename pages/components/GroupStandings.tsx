import React from 'react'

type Props = {}

const GroupStandings = ({}: Props) => {
  const groups = Array.from({ length: 8 }, (_, k) => k + 2)

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
      {groups.map((group, index) => (
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          key={`group-${index}`}
          id={`sofa-standings-embed-146${group}-41897`}
          src={`https://www.sofascore.com/tournament/146${group}/41897/standings/tables/embed`}
        ></iframe>
      ))}
    </div>
  )
}

export default GroupStandings
