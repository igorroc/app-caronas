import React from "react"
import styles from "./map.module.css"
import { useLoadScript, GoogleMap } from "@react-google-maps/api"

type CustomMapProps = {
	address: string
}

export default function CustomMap(props: CustomMapProps) {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.GOOGLE_API_KEY as string,
	})
	const center = React.useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), [])

	return (
		<div className={styles.map}>
			{!isLoaded ? (
				<h1>Carregando mapa...</h1>
			) : (
				<GoogleMap mapContainerClassName="map-container" center={center} zoom={10} />
			)}
		</div>
	)
}
