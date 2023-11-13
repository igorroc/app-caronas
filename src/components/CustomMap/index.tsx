import React from "react"
import styles from "./map.module.css"
import { useLoadScript, GoogleMap } from "@react-google-maps/api"

export default function CustomMap() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
	})
	const center = React.useMemo(() => ({ lat: -14.7935294, lng: -39.0356455 }), [])

	return (
		<div className={styles.map}>
			{!isLoaded ? (
				<h1>Carregando mapa...</h1>
			) : (
				<GoogleMap
					mapContainerClassName={styles.map_container}
					center={center}
					zoom={17}
					heading={50}
					tilt={47.5}
					options={{
						mapTypeControl: false,
						styles: [
							{ elementType: "geometry", stylers: [{ color: "#242f3e" }] },
							{ elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
							{ elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
							{
								featureType: "administrative.locality",
								elementType: "labels.text.fill",
								stylers: [{ color: "#d59563" }],
							},
							{
								featureType: "poi",
								elementType: "labels.text.fill",
								stylers: [{ color: "#d59563" }],
							},
							{
								featureType: "poi.park",
								elementType: "geometry",
								stylers: [{ color: "#263c3f" }],
							},
							{
								featureType: "poi.park",
								elementType: "labels.text.fill",
								stylers: [{ color: "#6b9a76" }],
							},
							{
								featureType: "road",
								elementType: "geometry",
								stylers: [{ color: "#38414e" }],
							},
							{
								featureType: "road",
								elementType: "geometry.stroke",
								stylers: [{ color: "#212a37" }],
							},
							{
								featureType: "road",
								elementType: "labels.text.fill",
								stylers: [{ color: "#9ca5b3" }],
							},
							{
								featureType: "road.highway",
								elementType: "geometry",
								stylers: [{ color: "#746855" }],
							},
							{
								featureType: "road.highway",
								elementType: "geometry.stroke",
								stylers: [{ color: "#1f2835" }],
							},
							{
								featureType: "road.highway",
								elementType: "labels.text.fill",
								stylers: [{ color: "#f3d19c" }],
							},
							{
								featureType: "transit",
								elementType: "geometry",
								stylers: [{ color: "#2f3948" }],
							},
							{
								featureType: "transit.station",
								elementType: "labels.text.fill",
								stylers: [{ color: "#d59563" }],
							},
							{
								featureType: "water",
								elementType: "geometry",
								stylers: [{ color: "#17263c" }],
							},
							{
								featureType: "water",
								elementType: "labels.text.fill",
								stylers: [{ color: "#515c6d" }],
							},
							{
								featureType: "water",
								elementType: "labels.text.stroke",
								stylers: [{ color: "#17263c" }],
							},
						],
					}}
				/>
			)}
		</div>
	)
}
