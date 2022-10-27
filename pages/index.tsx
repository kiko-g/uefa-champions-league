import Head from "next/head"
import Image from "next/image"
import Layout from "./layout"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        UEFA Champions League Simulator
      </div>
    </Layout>
  )
}
