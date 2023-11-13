"use client"

import Header from "@/components/Header"
import styles from "./page.module.css"
import { useState } from "react"
import Ofertar from "@/components/Ofertar"
import Solicitar from "@/components/Solicitar"

export default function Home() {
	const [activeTab, setActiveTab] = useState("ofertar")

	return (
		<main className={styles.main}>
			<Header activeTab={activeTab} setActiveTab={setActiveTab} />
			<h1>mapa</h1>
			<div className={styles.popup}>
				{activeTab == "ofertar" ? <Ofertar /> : <Solicitar />}
			</div>
		</main>
	)
}
