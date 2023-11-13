import Header from "@/components/Header"
import styles from "./page.module.css"

export default function Home() {
	return (
		<main className={styles.main}>
			<Header />
			<h1>mapa</h1>
			<div className={styles.popup}>
				<h2>Crie sua oferta de carona</h2>
				<div className={styles.question}>
					<label htmlFor="origem">Origem</label>
					<input type="text" id="origem" />
				</div>
				<div className={styles.question}>
					<label htmlFor="destino">Destino</label>
					<input type="text" id="destino" />
				</div>
				<div className={styles.question}>
					<label htmlFor="vagas">Assentos disponíveis</label>
					<select name="" id="">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
				</div>
				<div className={styles.question}>
					<label htmlFor="horario">Horário de saída</label>
					<input type="time" id="horario" />
				</div>
				<button className={styles.submit}>Ofertar</button>
			</div>
		</main>
	)
}