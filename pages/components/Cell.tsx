import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

type Props = {
  blank?: boolean
  text?: string
  badge?: string
  teamName?: string
  twClasses?: string
}

const Cell = ({ blank, text, badge, teamName, twClasses }: Props) => {
  return (
    <div className={classNames('cell', twClasses ? twClasses : '', blank ? 'blank' : badge ? 'badge' : 'filled')}>
      {text ? <span>{text}</span> : null}
      {badge ? <Image src={badge} alt={`${teamName} badge`} width={32} height={32} /> : null}
    </div>
  )
}

export default Cell
