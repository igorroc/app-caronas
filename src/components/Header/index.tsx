import React from "react"
import { BiMenu } from "react-icons/bi"

import styles from "./header.module.css"

import Profile from "@/../public/profile.png"
import Image from "next/image"

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.menu}>
				<BiMenu />
			</div>
			<div className={styles.actions}>
				<button>Ofertar</button>
				<button>Solicitar</button>
			</div>
			<div className={styles.profile}>
				<Image src={Profile} alt="Foto de perfil" className={styles.img} />
			</div>
		</header>
	)
}
