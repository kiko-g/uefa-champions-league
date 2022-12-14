import React, { Dispatch, SetStateAction } from 'react'
import { Bars4Icon } from '@heroicons/react/24/outline'

type Props = {
  value: boolean
  setValue: Dispatch<SetStateAction<boolean>>
}

const Toggler = ({ value, setValue }: Props) => {
  return (
    <button className="transition duration-100 hover:opacity-50 dark:hover:opacity-50" onClick={() => setValue(!value)}>
      <Bars4Icon className="h-4 w-4 md:h-5 md:w-5" />
    </button>
  )
}

export default Toggler
