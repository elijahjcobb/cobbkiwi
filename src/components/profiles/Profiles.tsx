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
import { Contact, contacts } from "../../contacts";
import { Profile } from "./Profile";

interface ProfilesProps {

}

interface ProfilesState {

}

export class Profiles extends React.Component <ProfilesProps, ProfilesState> {

	public constructor(props: ProfilesProps) {

		super(props);

	}

	public render(): React.ReactNode {

		return (
			<section className="profilesContainer">
				<h2>Contact</h2>
				<div className={"profiles"}>
					{ contacts.map((contact: Contact, index: number) => {

						return <Profile key={index} contact={contact}/>;

					})}
				</div>
			</section>
		);

	}

}