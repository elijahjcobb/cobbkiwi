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
import { Profiles } from "./components/profiles/Profiles";
import { Posts } from "./components/posts/Posts";
import { Entry } from "./locations";
import { PostDetail } from "./components/posts/PostDetail";
import { Map } from "./components/map/Map";
import { Auth } from "./components/auth/Auth";

interface AppProps {

}

interface AppState {
	post: Entry | undefined;
	isAuthorized: boolean;
}

export class App extends React.Component <AppProps, AppState> {

	private returnId: string;

	public constructor(props: AppProps) {

		super(props);

		this.handlePostSelected = this.handlePostSelected.bind(this);
		this.handlePostClosed = this.handlePostClosed.bind(this);
		this.handlePasswordAuthorized = this.handlePasswordAuthorized.bind(this);
		this.returnId = "0";
		this.state = { post: undefined, isAuthorized: false };

	}

	public handlePostSelected(post: Entry): void {

		this.returnId = encodeURI(post.date + post.title);
		this.setState({ post });
		window.localStorage.setItem("visitedPost" + post.index + "-" + post.date, "t");

	}

	public handlePasswordAuthorized(): void {

		this.setState({ isAuthorized: true });

	}

	public handlePostClosed(): void {

		setTimeout(() => {
			const id: string = this.returnId;
			const item: HTMLElement | null = document.getElementById(id);
			if (item) item.scrollIntoView();
			else throw new Error(`Item ${id} does not exist.`);
		}, 250);

		this.setState({ post: undefined });

	}

	public render(): React.ReactNode {

		let element: React.ReactElement;

		if (this.state.isAuthorized) {

			if (this.state.post === undefined) {

				element = (
					<div>
						<div style={{
							background: `linear-gradient(rgba(3, 34, 121, 0.75), rgba(3, 24, 166, 0.1)), url("./img/background.jpg") no-repeat`,
							backgroundSize: "cover",
							backgroundPosition: "center"
						}} className={"header"}>
							<h2>The Cobbs' Adventures in New Zealand</h2>
							<span>Kia Ora!</span>
						</div>
						<section className="about">
							<h2>About</h2>
							<p>While we are in NZ we wanted a way to share our adventure with you, our friends and family. Below you can
								easily navigate to all of our social media accounts and see Laura's blog. We miss you all and can't wait
								to share our story with you.</p>
						</section>
						<Profiles/>
						<Map/>
						<Posts onClick={this.handlePostSelected}/>
						<footer>
							<span>Created by <a href={"https://elijahcobb.com"} target={"_blank"}>Elijah Cobb</a></span>
						</footer>
					</div>
				);

			} else {

				element = (
					<PostDetail entry={this.state.post} onClick={this.handlePostClosed} />
				);

			}

		} else {

			element = (
				<Auth onPasswordAuthorized={this.handlePasswordAuthorized}/>
			);

		}

		return (
			<div>
				<nav className="nav">
					<h1>cobb.kiwi</h1>
					<img alt={"NZ Flag"} src={"./img/flag.png"}/>
				</nav>
				{element}
			</div>
		);

	}

}