import Link from 'next/link'
import Toggler from './Toggler'
import DarkModeSwitchMinimal from './DarkModeSwitchMinimal'
import { useState } from 'react'
import { BeakerIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/24/outline'

export default function Navigator() {
  const [toggle, setToggle] = useState(true)
  const nav = [
    { name: 'Tournament', route: '/', icon: GlobeEuropeAfricaIcon },
    { name: 'Custom Draw', route: '/', icon: BeakerIcon },
    { name: 'Over the years', route: '/', icon: BeakerIcon },
  ]

  return (
    <>
      {/* Mobile */}
      <div className="flex h-full flex-col rounded bg-light p-3 dark:bg-navyish lg:hidden">
        <div className={`flex w-full items-center justify-between rounded px-2 ${toggle ? 'mb-2' : 'mb-0'}`}>
          <h3 className="font-bold tracking-tight hover:underline hover:opacity-80">
            <Link href="/">UCL</Link>
          </h3>
          <div className="flex items-center gap-x-1">
            <Toggler value={toggle} setValue={setToggle} />
            <DarkModeSwitchMinimal />
          </div>
        </div>

        {toggle ? (
          <div className="flex flex-col gap-y-1">
            {nav.map((item, index) => (
              <Link href={item.route} key={`nav-${index}`}>
                <div
                  className="flex items-center justify-start gap-x-3 rounded 
                px-2 py-1.5 transition hover:bg-primary hover:text-white"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm">{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : null}
      </div>

      {/* Desktop */}
      <div className="hidden rounded bg-light p-3 dark:bg-navyish lg:flex">
        {toggle ? (
          <div className="flex min-w-[12rem] flex-col gap-y-1">
            <div className="mb-2 flex items-center justify-between rounded px-2">
              <h3 className="font-bold tracking-tight hover:underline hover:opacity-80">
                <Link href="/">UCL</Link>
              </h3>
              <div className="flex items-center gap-x-1">
                <Toggler value={toggle} setValue={setToggle} />
                <DarkModeSwitchMinimal />
              </div>
            </div>
            {nav.map((item, index) => (
              <Link href={item.route} key={`nav-${index}`}>
                <div
                  className="flex items-center justify-start gap-x-3 rounded 
                px-2 py-2 transition hover:bg-primary hover:text-white"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm">{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-y-1">
            <DarkModeSwitchMinimal />
            <Toggler value={toggle} setValue={setToggle} />

            <div className="mt-4 flex flex-col gap-y-1">
              {nav.map((item, index) => (
                <Link href={item.route} key={`nav-${index}`}>
                  <div
                    className="flex items-center justify-start gap-x-3 rounded 
                  px-2 py-2 transition hover:bg-primary hover:text-white hover:opacity-80"
                  >
                    <item.icon className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
