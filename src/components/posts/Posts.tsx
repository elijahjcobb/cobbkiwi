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
import { locations, Location, Entry } from "../../locations";
import "./Posts.css";
import { PostLocation } from "./PostLocation";

interface PostsProps {
	onClick: (entry: Entry) => void;
}

interface PostsState {

}

export class Posts extends React.Component <PostsProps, PostsState> {

	public constructor(props: PostsProps) {

		super(props);

		this.onButtonClick = this.onButtonClick.bind(this);

	}

	public onButtonClick(): void {

		window.localStorage.clear();
		this.forceUpdate();

	}

	public render(): React.ReactNode {

		return (
			<section className="locationsContainer">
				<ul className={"locationsList"}>{ locations.map((location: Location, index: number) => {
					return <PostLocation onClick={this.props.onClick} key={index} location={location} />;
				})}
				</ul>
				<button onClick={this.onButtonClick}>Clear View History</button>
			</section>
		);

	}

}