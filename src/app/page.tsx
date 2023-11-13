"use client"

import Header from "@/components/Header"
import styles from "./page.module.css"
import { useState } from "react"
import Ofertar from "@/components/Ofertar"
import Solicitar from "@/components/Solicitar"
import CustomMap from "@/components/CustomMap"

export default function Home() {
	const [activeTab, setActiveTab] = useState("")

	return (
		<main className={styles.main}>
			<Header activeTab={activeTab} setActiveTab={setActiveTab} />
			<CustomMap />
			<div className={styles.popup}>
				{activeTab == "ofertar" && <Ofertar />}
				{activeTab == "solicitar" && <Solicitar />}
				{activeTab == "" && (
					<>
						<h2>Olá, Igor!</h2>
						<p>O que deseja fazer?</p>
						<button className={styles.button} onClick={() => setActiveTab("ofertar")}>
							Ofertar
						</button>
						<button className={styles.button} onClick={() => setActiveTab("solicitar")}>
							Solicitar
						</button>
					</>
				)}
			</div>
		</main>
	)
}
