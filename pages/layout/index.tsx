import Helmet from './Helmet'
import Navigator from './Navigator'

type Props = {
  children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: Props) {
  return (
    <div
      className="flex min-h-screen flex-col overflow-clip bg-ice font-prose 
      font-medium text-gray-800 opacity-[99%] dark:bg-navy dark:text-white"
    >
      <Helmet />
      <main className="container flex w-full flex-col gap-x-3 gap-y-3 p-4 md:gap-x-4 md:p-8 lg:flex-row lg:gap-y-0">
        <Navigator />
        <div className="w-full rounded bg-light p-3 dark:bg-navyish">{children}</div>
      </main>
    </div>
  )
}
