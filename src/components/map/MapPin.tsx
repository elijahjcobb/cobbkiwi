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
import { Location } from "../../locations";

interface MapPinProps {
	lat: number;
	lng: number;
	location: Location;
	index: number;
	onClick: (location: Location) => void;
}

interface MapPinState {

}

export class MapPin extends React.Component <MapPinProps, MapPinState> {

	public constructor(props: MapPinProps) {

		super(props);

		this.onClick = this.onClick.bind(this);

	}

	public onClick(): void {

		this.props.onClick(this.props.location);

	}

	public render(): React.ReactNode {

		return (
			<svg className={"mapPin"} onClick={this.onClick} width={30} height={50} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
				<rect stroke={"none"} fill={"#999"} x={13} y={10} width={4} height={40} rx={2}/>
				<circle stopColor={"none"} fill={"#032279"} cx={15} cy={15} r={15}/>
				<text style={{dominantBaseline: "middle"}} fill={"#eee"} x={"50%"} y={15} fontWeight={"bold"} textAnchor={"center"} fontSize={"18px"}>
					<tspan x={"50%"} textAnchor={"middle"}>{this.props.index}</tspan>
				</text>
			</svg>
		);

	}

}