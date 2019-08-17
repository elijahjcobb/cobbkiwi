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

interface PostProps {
	entry: Entry;
	id: string;
	onClick: (entry: Entry) => void;
}

interface PostState {

}

export class Post extends React.Component <PostProps, PostState> {

	public constructor(props: PostProps) {

		super(props);

		this.onClick = this.onClick.bind(this);

	}

	public onClick(): void {

		this.props.onClick(this.props.entry);

	}

	public render(): React.ReactNode {

		let dateString: string = this.props.entry.date;
		let dateComponents: string[] = dateString.split("-");

		const yearNum: number = parseInt(dateComponents[0]);
		const monthNum: number = parseInt(dateComponents[1]);
		const dayNum: number = parseInt(dateComponents[2]);

		const year: string = yearNum + "";
		const month: string = monthNum < 10 ? "" + monthNum : "" + monthNum;
		const day: string = dayNum < 10 ? "" + dayNum : "" + dayNum;

		const readStatus: string | null = window.localStorage.getItem("visitedPost" + this.props.entry.index + "-" + this.props.entry.date);
		let backgroundColor: string = readStatus === "t" ? "white" : "#032279";

		const id: string = month + "-" + day + "-" + year;
		const imageUrl: string = `./img/thumbnails/${id}.jpg`;

		return (
			<li id={encodeURI(this.props.entry.date + this.props.entry.title)} className={"post"} onClick={this.onClick}>
				<img className={"postImage"} src={imageUrl} alt={"entry"}/>
				<h3 className={"postTitle"}>{this.props.entry.title}</h3>
				<div className={"postProgress"} style={{ backgroundColor }}/>
				<span className={"postDate"}>{this.props.entry.date}</span>
			</li>
		);

	}

}