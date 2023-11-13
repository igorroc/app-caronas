"use client"

import React from "react"
import { BiMenu } from "react-icons/bi"

import styles from "./header.module.css"

import Profile from "@/../public/profile.png"
import Image from "next/image"

type HeaderProps = {
	activeTab: string
	setActiveTab: (tab: string) => void
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
	function changeTab(tab: string) {
		setActiveTab(tab)
	}

	return (
		<header className={styles.header}>
			<div className={styles.menu}>
				<BiMenu />
			</div>
			<div className={styles.actions}>
				<button
					className={styles.action}
					data-active={activeTab == "ofertar"}
					onClick={() => changeTab("ofertar")}
				>
					Ofertar
				</button>
				<button
					className={styles.action}
					data-active={activeTab == "solicitar"}
					onClick={() => changeTab("solicitar")}
				>
					Solicitar
				</button>
			</div>
			<div className={styles.profile}>
				<Image src={Profile} alt="Foto de perfil" className={styles.img} />
			</div>
		</header>
	)
}
