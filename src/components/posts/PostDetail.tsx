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

		let dateString: string = this.props.entry.date;
		let dateComponents: string[] = dateString.split("-");

		const yearNum: number = parseInt(dateComponents[0]);
		const monthNum: number = parseInt(dateComponents[1]);
		const dayNum: number = parseInt(dateComponents[2]);

		const year: string = yearNum + "";
		const month: string = monthNum < 10 ? "" + monthNum : "" + monthNum;
		const day: string = dayNum < 10 ? "" + dayNum : "" + dayNum;

		const id: string = month + "-" + day + "-" + year;

		return (
			<div className={"postDetailContainer"}>
				<h2 className={"postDetailTitle"}>{this.props.entry.title}</h2>
				<span className={"postDetailDate"}>{id}</span>
				<iframe title={id} className={"postDetailRenderer"} src={`https://cobb.kiwi/pdf/${id.replace("2019", "19")}`} />
				<button className={"postDetailButton"} onClick={this.props.onClick}>Done</button>
			</div>
		);

	}

}