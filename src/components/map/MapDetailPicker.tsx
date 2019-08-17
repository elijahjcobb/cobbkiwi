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
import { Entry } from "../../locations";

interface MapDetailPickerProps {
	entries: {index: number, entry: Entry}[];
	onSelected: () => void;
}

interface MapDetailPickerState {

}

export class MapDetailPicker extends React.Component <MapDetailPickerProps, MapDetailPickerState> {

	public constructor(props: MapDetailPickerProps) {

		super(props);

		this.onClick = this.onClick.bind(this);

	}

	public onClick(id: string): void {

		let object: HTMLElement | null = document.getElementById(id);
		if (object) object.scrollIntoView();
		else throw new Error(`Tried to scroll to element ${id} but it does not exist.`);
		this.props.onSelected();

	}

	public render(): React.ReactNode {

		if (this.props.entries.length === 0) {

			return <p>No Entries</p>;

		}

		return (
			<ul className={"mapDetailPicker"} >
				{
					this.props.entries.map((post: {index: number, entry: Entry}, i: number) => {

						return (
							<li key={i} value={ post.entry.date } className={"mapDetailPickerRow"} onClick={(): void => this.onClick(encodeURI(post.entry.date + post.entry.title))}>
								<span className={"mapDetailPickerRowTitle"}>{post.entry.title}</span>
								<span className={"mapDetailPickerRowDate"}>{post.entry.date}</span>
							</li>
						);

					})
				}
			</ul>
		);

	}

}