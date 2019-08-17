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

interface PostDetailProps {
	entry: Entry;
	onClick: () => void;
}

interface PostDetailState {

}

export class PostDetail extends React.Component <PostDetailProps, PostDetailState> {

	public constructor(props: PostDetailProps) {

		super(props);

	}

	public render(): React.ReactNode {

		let date: Date = new Date(this.props.entry.date);

		let options: object = { month: "short", day: "numeric", year: "numeric" };
		let value: string = new Intl.DateTimeFormat("en-US", options).format(date);

		const year: string = (date.getFullYear() + "").substring(2);
		const id: string = (date.getMonth() + 1) + "-" + date.getDate() + "-" + year;

		return (
			<div className={"postDetailContainer"}>
				<h2 className={"postDetailTitle"}>{this.props.entry.title}</h2>
				<span className={"postDetailDate"}>{value}</span>
				<iframe title={id} className={"postDetailRenderer"} src={`https://cobb.kiwi/pdf/${id}`} />
				<button className={"postDetailButton"} onClick={this.props.onClick}>Done</button>
			</div>
		);

	}

}