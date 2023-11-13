import React from "react"
import styles from "./loading.module.css"

export default function Loading() {
	return (
		<div>
			<div className={styles.pin}></div>
			<div className={styles.pulse}></div>
		</div>
	)
}
