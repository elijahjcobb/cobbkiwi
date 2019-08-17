/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 * Copyright 2019 Elijah Cobb
 *
 */

import * as React from "react";
import GoogleMapReact from "google-map-react";
import { locations, Location, Entry } from "../../locations";
import { MapPin } from "./MapPin";
import { MapDetailPicker } from "./MapDetailPicker";

interface MapProps {

}

interface MapState {
	location: Location | undefined;
}

export class Map extends React.Component <MapProps, MapState> {

	public constructor(props: MapProps) {

		super(props);

		this.handlePinClick = this.handlePinClick.bind(this);
		this.handleDoneClick = this.handleDoneClick.bind(this);
		this.state = { location: undefined };

	}

	public handlePinClick(location: Location): void {

		this.setState({ location });

	}

	public handleDoneClick(): void {

		this.setState({ location: undefined });

	}

	public render(): React.ReactNode {

		let element: React.ReactNode;

		if (this.state.location) {

			let items: {index: number, entry: Entry}[] = [];

			for (let i: number = 0; i < this.state.location.posts.length; i ++) {

				let entry: Entry = this.state.location.posts[i];
				items.push({ index: entry.index as number, entry: entry });
			}

			element = (
				<div className={"mapDetailContainer"}>
					<h3 className={"mapDetailTitle"}>{this.state.location.title}</h3>
					<MapDetailPicker onSelected={this.handleDoneClick} entries={items}/>
					<button className={"mapDetailButton"} onClick={this.handleDoneClick}>Cancel</button>
				</div>
			);

		}

		return (
			<section className={"mapContainer"}>
				<h2>Map</h2>
				<div className={"gMapContainer"}>
					<GoogleMapReact
						bootstrapURLKeys={{key: "AIzaSyBfe2GX7C5GpVbnmTXk98jqVgoXdLSOMYE"}}
						defaultCenter={ {lat: -40.956670, lng: 174.007102 } }
						defaultZoom={ 5.8 }
					>
						{locations.map((location: Location, index: number) => {
							return <MapPin index={index + 1} onClick={this.handlePinClick} key={index} lat={location.lat} lng={location.lng} location={location}/>;
						})}
					</GoogleMapReact>
					{ element }
				</div>
			</section>
		);

	}

}