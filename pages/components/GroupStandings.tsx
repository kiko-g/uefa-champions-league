import React from 'react'

type Props = {}

const GroupStandings = ({}: Props) => {
  const groups = Array.from({ length: 8 }, (_, k) => k + 2)

  return (
    <div className="grid grid-cols-1 gap-x-0 gap-y-6 xl:grid-cols-2 xl:gap-x-6">
      {groups.map((group, index) => (
        <div className="h-[425px] w-full rounded bg-light px-4 py-2 dark:bg-light" key={`group-${index}`}>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            id={`sofa-standings-embed-146${group}-41897`}
            src={`https://www.sofascore.com/tournament/146${group}/41897/standings/tables/embed`}
          ></iframe>
        </div>
      ))}
    </div>
  )
}

export default GroupStandings
