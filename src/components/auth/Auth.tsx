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
import "./Auth.css";

interface AuthProps {
	onPasswordAuthorized: () => void;
}

interface AuthState {
	password: string;
	badPassword: boolean;
}

export class Auth extends React.Component <AuthProps, AuthState> {

	public constructor(props: AuthProps) {

		super(props);

		this.onChange = this.onChange.bind(this);
		this.onDoneAction = this.onDoneAction.bind(this);
		this.onKeyPress = this.onKeyPress.bind(this);
		this.state = { password: "", badPassword: false };

	}

	public onChange(event: React.ChangeEvent<HTMLInputElement>): void {

		this.setState({ password: event.target.value });

	}

	public onKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void {

		if (event.key === "Enter") this.onDoneAction();

	}

	public onDoneAction(): void {

		if (this.state.password === "nz2019cobb") {

			this.props.onPasswordAuthorized();

		} else {

			this.setState({ badPassword: true});

		}

		this.setState({ password: ""});

	}

	public render(): React.ReactNode {

		return (
			<div className={"authContainer"}>
				<h2>Sign In</h2>
				<span>Sorry for the inconvenience but we feel safer having our pictures and contact information private.
					Please enter the password the Cobbs provided. If you need help, contact <a href={"mailto:elijah@elijahcobb.com"}>Elijah</a>.</span>
				<input style={{borderColor: this.state.badPassword ? "red" : "lightgray"}} onKeyPress={this.onKeyPress} onChange={this.onChange} placeholder={"Password"} type={"password"} value={this.state.password}/>
				<button onClick={this.onDoneAction}>Sign In</button>
			</div>
		);

	}

}