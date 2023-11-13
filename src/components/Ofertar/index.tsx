import React from "react"
import styles from "./ofertar.module.css"
import axios, { AxiosError } from "axios"
import { toast } from "react-toastify"

export default function Ofertar() {
	function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault()

		const formData = new FormData(ev.currentTarget)

		const jsonData = {
			origin: formData.get("origem"),
			destination: formData.get("destino"),
			available_seats: formData.get("vagas"),
			time: formData.get("horario"),
		}

		const id = toast.loading("Criando oferta...")

		axios
			.post("/api/offer", jsonData)
			.then(({ data }) => {
				console.log("RESULTADO:", data)
				toast.update(id, {
					render: "Oferta criada com sucesso!",
					type: "success",
					isLoading: false,
					autoClose: 5000,
				})
			})
			.catch((err) => {
				if (err instanceof AxiosError) {
					const error = err.response?.data
					if (error.code == 1) {
						toast.update(id, {
							render: "Preencha todos os campos.",
							type: "error",
							isLoading: false,
							autoClose: 5000,
						})
					} else {
						toast.update(id, {
							render: "Erro ao criar oferta, tente novamente.",
							type: "error",
							isLoading: false,
							autoClose: 5000,
						})
					}
				}
			})
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
