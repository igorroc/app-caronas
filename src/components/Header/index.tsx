"use client"

import React from "react"
import { BiMenu } from "react-icons/bi"

import styles from "./header.module.css"

import Profile from "@/../public/profile.png"
import Image from "next/image"
import { toast } from "react-toastify"

type HeaderProps = {
	activeTab: string
	setActiveTab: (tab: string) => void
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
	function changeTab(tab: string) {
		setActiveTab(tab)
	}

	function notImplemented() {
		toast.warn("Funcionalidade não implementada")
	}

	return (
		<header className={styles.header}>
			<div className={styles.menu} onClick={notImplemented}>
				<BiMenu size={32} />
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
			<div className={styles.profile} onClick={notImplemented}>
				<Image src={Profile} alt="Foto de perfil" className={styles.img} />
			</div>
		</header>
	)
}
