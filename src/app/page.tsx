"use client"

import Header from "@/components/Header"
import styles from "./page.module.css"
import { useState } from "react"
import Ofertar from "@/components/Ofertar"
import Solicitar from "@/components/Solicitar"
import CustomMap from "@/components/CustomMap"

export default function Home() {
	const [activeTab, setActiveTab] = useState("ofertar")

	return (
		<main className={styles.main}>
			<Header activeTab={activeTab} setActiveTab={setActiveTab} />
			<CustomMap />
			<div className={styles.popup}>
				{activeTab == "ofertar" ? <Ofertar /> : <Solicitar />}
			</div>
		</main>
	)
}
