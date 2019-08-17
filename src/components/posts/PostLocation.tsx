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
import {  Location, Entry } from "../../locations";
import { Post } from "./Post";

interface PostLocationProps {
	location: Location;
	onClick: (entry: Entry) => void;
}

interface PostLocationState {

}

export class PostLocation extends React.Component <PostLocationProps, PostLocationState> {

	public constructor(props: PostLocationProps) {

		super(props);

	}

	public render(): React.ReactNode {

		return (
			<li className={"locationListItem"}>
				<h3 className={"locationTitle"}>{this.props.location.title}</h3>
				<ul className={"locationPosts"}>
					{
						this.props.location.posts.map((entry: Entry, index: number) => {
							entry.index = index;
							return <Post key={index} entry={entry} id={`post${index}`} onClick={this.props.onClick}/>;
						})
					}
				</ul>
			</li>
		);

	}

}