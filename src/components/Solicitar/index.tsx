import React from "react"
import styles from "./ofertar.module.css"

export default function Solicitar() {
	function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault()

		console.log("solicitar")
	}

	return (
		<>
			<h2>Olá, Igor</h2>
			<form onSubmit={handleSubmit} className={styles.form}>
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
			</form>
		</>
	)
}
