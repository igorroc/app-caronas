import React from "react"
import styles from "./ofertar.module.css"
import axios from "axios"

export default function Ofertar() {
	function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault()

		const formData = new FormData(ev.currentTarget)

		const jsonData = Object.fromEntries(formData)

		axios.post("/api/offer", jsonData)
	}
	return (
		<>
			<h2>Crie sua oferta de carona</h2>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.question}>
					<label htmlFor="origem">Origem</label>
					<input type="text" id="origem" name="origem" />
				</div>
				<div className={styles.question}>
					<label htmlFor="destino">Destino</label>
					<input type="text" id="destino" name="destino" />
				</div>
				<div className={styles.question}>
					<label htmlFor="vagas">Assentos disponíveis</label>
					<select name="vagas" id="vagas">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
				</div>
				<div className={styles.question}>
					<label htmlFor="horario">Horário de saída</label>
					<input type="time" id="horario" name="horario" />
				</div>
				<button type="submit" className={styles.submit}>
					Ofertar
				</button>
			</form>
		</>
	)
}
