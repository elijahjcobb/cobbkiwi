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
import { Contact } from "../../contacts";

interface ProfileProps {
	contact: Contact;
}

interface ProfileState {

}

export class Profile extends React.Component <ProfileProps, ProfileState> {

	public constructor(props: ProfileProps) {

		super(props);

	}

	public render(): React.ReactNode {

		return (
			<a className={"profile"} href={`mailto:${this.props.contact.email}?subject=Kia%20Ora!`} target={"_self"}>
				<img className={"profilePicture"} src={this.props.contact.profile} alt={`${this.props.contact.name} profile`}/>
				<h3 className={"profileName"}>{this.props.contact.name}</h3>
			</a>
		);

	}

}