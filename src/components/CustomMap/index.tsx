import React from "react"
import styles from "./map.module.css"
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api"

import MarkerIgor from "@/../../public/marker_igor.png"

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
					tilt={47.5}
					heading={50}
					options={{
						mapTypeControl: false,
						styles: [
							{
								elementType: "geometry",
								stylers: [
									{
										color: "#212121",
									},
								],
							},
							{
								elementType: "labels",
								stylers: [
									{
										visibility: "off",
									},
								],
							},
							{
								elementType: "labels.icon",
								stylers: [
									{
										visibility: "off",
									},
								],
							},
							{
								elementType: "labels.text.fill",
								stylers: [
									{
										color: "#757575",
									},
								],
							},
							{
								elementType: "labels.text.stroke",
								stylers: [
									{
										color: "#212121",
									},
								],
							},
							{
								featureType: "administrative",
								elementType: "geometry",
								stylers: [
									{
										color: "#757575",
									},
									{
										visibility: "off",
									},
								],
							},
							{
								featureType: "administrative.country",
								elementType: "labels.text.fill",
								stylers: [
									{
										color: "#9e9e9e",
									},
								],
							},
							{
								featureType: "administrative.land_parcel",
								stylers: [
									{
										visibility: "off",
									},
								],
							},
							{
								featureType: "administrative.locality",
								elementType: "labels.text.fill",
								stylers: [
									{
										color: "#bdbdbd",
									},
								],
							},
							{
								featureType: "administrative.neighborhood",
								stylers: [
									{
										visibility: "off",
									},
								],
							},
							{
								featureType: "poi",
								stylers: [
									{
										visibility: "off",
									},
								],
							},
							{
								featureType: "poi",
								elementType: "labels.text.fill",
								stylers: [
									{
										color: "#757575",
									},
								],
							},
							{
								featureType: "poi.park",
								elementType: "geometry",
								stylers: [
									{
										color: "#181818",
									},
								],
							},
							{
								featureType: "poi.park",
								elementType: "labels.text.fill",
								stylers: [
									{
										color: "#616161",
									},
								],
							},
							{
								featureType: "poi.park",
								elementType: "labels.text.stroke",
								stylers: [
									{
										color: "#1b1b1b",
									},
								],
							},
							{
								featureType: "road",
								elementType: "geometry.fill",
								stylers: [
									{
										color: "#2c2c2c",
									},
								],
							},
							{
								featureType: "road",
								elementType: "labels.icon",
								stylers: [
									{
										visibility: "off",
									},
								],
							},
							{
								featureType: "road",
								elementType: "labels.text.fill",
								stylers: [
									{
										color: "#8a8a8a",
									},
								],
							},
							{
								featureType: "road.arterial",
								elementType: "geometry",
								stylers: [
									{
										color: "#373737",
									},
								],
							},
							{
								featureType: "road.highway",
								elementType: "geometry",
								stylers: [
									{
										color: "#3c3c3c",
									},
								],
							},
							{
								featureType: "road.highway.controlled_access",
								elementType: "geometry",
								stylers: [
									{
										color: "#4e4e4e",
									},
								],
							},
							{
								featureType: "road.local",
								elementType: "labels.text.fill",
								stylers: [
									{
										color: "#616161",
									},
								],
							},
							{
								featureType: "transit",
								stylers: [
									{
										visibility: "off",
									},
								],
							},
							{
								featureType: "transit",
								elementType: "labels.text.fill",
								stylers: [
									{
										color: "#757575",
									},
								],
							},
							{
								featureType: "water",
								elementType: "geometry",
								stylers: [
									{
										color: "#000000",
									},
								],
							},
							{
								featureType: "water",
								elementType: "labels.text.fill",
								stylers: [
									{
										color: "#3d3d3d",
									},
								],
							},
						],
					}}
				>
					<Marker
						position={center}
						icon={MarkerIgor.src}
						options={{
							visible: true,
						}}
					/>
				</GoogleMap>
			)}
		</div>
	)
}
