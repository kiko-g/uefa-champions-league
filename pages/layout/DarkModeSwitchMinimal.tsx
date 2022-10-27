import React from 'react'
import { Switch } from '@headlessui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import useDarkMode from '../../hooks/useDarkMode'

const DarkModeSwitchMinimal = () => {
  const [enabled, setEnabled] = useDarkMode()

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch
          className={`${enabled ? 'animate-dark' : 'animate-light'} rounded-full`}
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        >
          {enabled ? (
            <MoonIcon
              className="ease block h-4 w-4 text-blue-300 transition duration-100 hover:text-blue-300/75 md:h-5 md:w-5"
              aria-hidden="true"
            />
          ) : (
            <SunIcon
              className="ease block h-4 w-4 text-orange-400 transition duration-100 hover:text-orange-400/80 md:h-5 md:w-5"
              aria-hidden="true"
            />
          )}
        </Switch>
      </div>
    </Switch.Group>
  )
}

export default DarkModeSwitchMinimal
