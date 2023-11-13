import React from "react"
import styles from "./ofertar.module.css"

export default function Solicitar() {
	return (
		<>
			<h2>Olá, Igor</h2>
			<div className={styles.question}>
				<label htmlFor="origem">Origem</label>
				<input type="text" id="origem" />
			</div>
			<div className={styles.question}>
				<label htmlFor="destino">Destino</label>
				<input type="text" id="destino" />
			</div>
			<div className={styles.question}>
				<label htmlFor="horario">Horário de saída</label>
				<input type="time" id="horario" />
			</div>
			<button className={styles.submit}>Solicitar</button>
		</>
	)
}
