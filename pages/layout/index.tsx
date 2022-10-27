import Helmet from "./Helmet"

type Props = {
  children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: Props) {
  return (
    <div className="layout">
      <Helmet />
      <div className="content">{children}</div>
    </div>
  )
}
