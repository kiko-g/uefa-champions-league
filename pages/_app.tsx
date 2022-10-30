import '../styles/globals.css'
import '../styles/home.css'
import '../styles/groups.css'
import '../styles/simulation.css'
import '../styles/probabilities.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
