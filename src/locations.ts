/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 *
 * Copyright 2019 Elijah Cobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

export type Entry = {
	title: string;
	date: string;
	index?: number;
};

export type Location = {
	lat: number;
	lng: number;
	title: string;
	posts: Entry[];
};

export let locations: Location[] = [
	{
		title: "Auckland International Airport",
		lat: -37.003422,
		lng: 174.784317,
		posts: [
			{
				title: "Arrival",
				date: "2018-12-31",
			}
		]
	},
	{
		title: "Auckland I",
		lat: -36.621011,
		lng: 174.729984,
		posts: [
			{
				title: "Seek the Treasure",
				date: "2019-1-1",
			},
			{
				title: "Essence of Life",
				date: "2019-1-2",
			},
			{
				title: "Collective Spirit",
				date: "2019-1-3",
			},
			{
				title: "Another is Remade",
				date: "2019-1-4",
			},
			{
				title: "The White Heron Flies",
				date: "2019-1-5",
			},
			{
				title: "Guardians and Stewards",
				date: "2019-1-6",
			},
			{
				title: "We are One",
				date: "2019-1-7",
			},
			{
				title: "Maori Blessing",
				date: "2019-1-8",
			},
			{
				title: "Good Home",
				date: "2019-1-9",
			}
		]
	},
	{
		title: "Whangarei",
		lat: -35.768637,
		lng: 174.480389,
		posts: [
			{
				title: "Bertie",
				date: "2019-1-10",
			},
			{
				title: "Karakia",
				date: "2019-1-11",
			},
			{
				title: "Persistence",
				date: "2019-1-12",
			}
		]
	},
	{
		title: "Wellington I",
		lat: -41.283770,
		lng: 174.776908,
		posts: [
			{
				title: "Koa",
				date: "2019-1-13",
			}
		]
	},
	{
		title: "Christchurch I",
		lat: -43.526296,
		lng: 172.603645,
		posts: [
			{
				title: "Heading South",
				date: "2019-1-14",
			},
			{
				title: "A Meaningful Life",
				date: "2019-1-15",
			},
			{
				title: "Good Things",
				date: "2019-1-16",
			},
			{
				title: "Low Rider",
				date: "2019-1-17",
			}
		]
	},
	{
		title: "Dunedin",
		lat: -45.890203,
		lng: 170.490876,
		posts: [
			{
				title: "Haunted",
				date: "2019-1-18",
			},
			{
				title: "The Secret Door",
				date: "2019-1-19",
			},
			{
				title: "Veni Vidi Amavi",
				date: "2019-1-20",
			},
			{
				title: "Adventure or Nothing",
				date: "2019-1-21",
			}
		]
	},
	{
		title: "Manapouri",
		lat: -45.565346,
		lng: 167.615559,
		posts: [
			{
				title: "All Your Heart",
				date: "2019-1-22",
			},
			{
				title: "Dorito Pancakes",
				date: "2019-1-23",
			},
			{
				title: "Kepler I",
				date: "2019-1-24",
			},
			{
				title: "Doubtful Sound",
				date: "2019-1-25",
			},
			{
				title: "The Bush",
				date: "2019-1-26",
			},
			{
				title: "Kepler II",
				date: "2019-1-27",
			},
			{
				title: "Gratitude",
				date: "2019-1-28",
			}
		]
	},
	{
		title: "Invercargill",
		lat: -46.432320,
		lng: 168.389600,
		posts: [
			{
				title: "Gemstone",
				date: "2019-1-29",
			},
			{
				title: "Behind the Hedge",
				date: "2019-1-30",
			},
			{
				title: "Wonder and Peace",
				date: "2019-1-31",
			},
			{
				title: "Sticky Fingers",
				date: "2019-2-1",
			},
			{
				title: "Chicago",
				date: "2019-2-2",
			}
		]
	},
	{
		title: "Lake Hawea",
		lat: -44.615317,
		lng: 169.272428,
		posts: [
			{
				title: "Remarkables",
				date: "2019-2-3",
			},
			{
				title: "Phil",
				date: "2019-2-4",
			},
			{
				title: "Cricket",
				date: "2019-2-5",
			},
			{
				title: "Dessert",
				date: "2019-2-6",
			},
			{
				title: "Eye of the Tiger",
				date: "2019-2-7",
			},
			{
				title: "Presence of Eternity",
				date: "2019-2-8",
			},
			{
				title: "BRRRRRR!",
				date: "2019-2-9",
			}
		]
	},
	{
		title: "Christchurch II",
		lat: -43.523548,
		lng: 172.583004,
		posts: [
			{
				title: "Fire and Water",
				date: "2019-2-10"
			},
			{
				title: "Spite Malice",
				date: "2019-2-11"
			},
			{
				title: "Fire Up the Barbie",
				date: "2019-2-12"
			},
			{
				title: "Les Mills",
				date: "2019-2-13"
			},
			{
				title: "185 Empty Chairs",
				date: "2019-2-14"
			},
			{
				title: "Valentines",
				date: "2019-2-15"
			},
			{
				title: "Spark",
				date: "2019-2-16"
			}
		]
	},
	{
		title: "Wanaka",
		lat: -44.684630,
		lng: 169.152461,
		posts: [
			{
				title: "Kurzgesaat",
				date: "2019-2-17"
			},
			{
				title: "Mount Iron",
				date: "2019-2-18"
			},
			{
				title: "Timeline",
				date: "2019-2-19"
			},
			{
				title: "Overheat",
				date: "2019-2-20"
			},
			{
				title: "Eely Point",
				date: "2019-2-21"
			},
			{
				title: "Opakapaka",
				date: "2019-2-22"
			},
			{
				title: "Popcorn Justification",
				date: "2019-2-23"
			},
			{
				title: "Roy's Peak",
				date: "2019-2-24"
			},
			{
				title: "No Pain No Gain",
				date: "2019-2-25"
			},
			{
				title: "Our Budding Chef",
				date: "2019-2-26"
			},
			{
				title: "Marvel Mania",
				date: "2019-2-27"
			},
			{
				title: "Rob Roy Glacier",
				date: "2019-2-28"
			},
			{
				title: "Git'er Done",
				date: "2019-3-1"
			},
			{
				title: "Haast Highway Reunion",
				date: "2019-3-2"
			}
		]
	},
	{
		title: "Greymouth",
		lat: -42.486108,
		lng: 171.182861,
		posts: [
			{
				title: "$18 Chicken Sandwich",
				date: "2019-3-3"
			}
		]
	},
	{
		title: "Collingwood",
		lat: -40.676697,
		lng: 172.683297,
		posts: [
			{
				title: "Low Tide",
				date: "2019-3-4"
			},
			{
				title: "Golden Bay",
				date: "2019-3-5"
			},
			{
				title: "Rainbow's Glory",
				date: "2019-3-6"
			},
			{
				title: "Sacred Springs",
				date: "2019-3-7"
			}
		]
	},
	{
		title: "Portage",
		lat: -41.193470,
		lng: 174.033289,
		posts: [
			{
				title: "Second Chance Starfish",
				date: "2019-3-8"
			},
			{
				title: "Reunited",
				date: "2019-3-9"
			},
			{
				title: "Boat Taxi",
				date: "2019-3-10"
			},
			{
				title: "Kicked It",
				date: "2019-3-11"
			}

		]
	},
	{
		title: "Whanganui",
		lat: -39.831897,
		lng: 174.637048,
		posts: [
			{
				title: "Black Sand Beach",
				date: "2019-3-12"
			},
			{
				title: "Dam or not to Dam",
				date: "2019-3-13"
			}
		]
	},
	{
		title: "New Plymouth",
		lat: -39.060888,
		lng: 174.060195,
		posts: [
			{
				title: "Flight of the Flies",
				date: "2019-3-14"
			},
			{
				title: "#neveragain",
				date: "2019-3-15"
			}
		]
	},
	{
		title: "Whitianga I",
		lat: -36.811933,
		lng: 175.699936,
		posts: [
			{
				title: "Buffalo Beach",
				date: "2019-3-16"
			},
			{
				title: "Cathedral Cove",
				date: "2019-3-17"
			},
			{
				title: "Stoked",
				date: "2019-3-18"
			},
			{
				title: "Mexican Feast",
				date: "2019-3-19"
			}
		]
	},
	{
		title: "Whitianga II",
		lat: -36.820447,
		lng: 175.698633,
		posts: [
			{
				title: "Easy Does It",
				date: "2019-3-20"
			},
			{
				title: "Zombie Samurai",
				date: "2019-3-21"
			},
			{
				title: "First Chair",
				date: "2019-3-22"
			},
			{
				title: "Blazing Saddles",
				date: "2019-3-23"
			},
			{
				title: "The Kids Host",
				date: "2019-3-24"
			},
			{
				title: "Super Rebels",
				date: "2019-3-25"
			},
			{
				title: "Squeaky Sand",
				date: "2019-3-26"
			},
			{
				title: "Spoons",
				date: "2019-3-27"
			},
			{
				title: "Grease and Rain",
				date: "2019-3-28"
			},
			{
				title: "Dig, dig, dig...",
				date: "2019-3-29"
			},
			{
				title: "Girl's Day",
				date: "2019-3-30"
			},
			{
				title: "Rabbit Hole",
				date: "2019-3-31"
			},
			{
				title: "Sunrise",
				date: "2019-4-1"
			},
			{
				title: "Carpe Diem",
				date: "2019-4-2"
			}
		]
	},
	{
		title: "Russell I",
		lat: -35.300849,
		lng: 174.179229,
		posts: [
			{
				title: "Welcome to the Hut",
				date: "2019-4-3"
			},
			{
				title: "Why Did the Weka Cross the Road?",
				date: "2019-4-4"
			},
			{
				title: "A Sense of Vision",
				date: "2019-4-5"
			},
			{
				title: "Each Step - Hold Breath",
				date: "2019-4-6"
			},
			{
				title: "Pounamu",
				date: "2019-4-7"
			},
			{
				title: "Bare Foot is Better",
				date: "2019-4-8"
			}
		]
	},
	{
		title: "Russell II",
		lat: -35.261953,
		lng: 174.125971,
		posts: [
			{
				title: "Pokarekare Ana",
				date: "2019-4-9"
			},
			{
				title: "Unified",
				date: "2019-4-10"
			},
			{
				title: "Serendipity",
				date: "2019-4-11"
			},
			{
				title: "Hell of a View",
				date: "2019-4-12"
			},
			{
				title: "Alpha Crucis",
				date: "2019-4-13"
			},
			{
				title: "Palm Sunday",
				date: "2019-4-14"
			},
			{
				title: "Dancing Waves",
				date: "2019-4-15"
			},
			{
				title: "Roots and Wings",
				date: "2019-4-16"
			},
			{
				title: "Light and Darkness",
				date: "2019-4-17"
			},
			{
				title: "Good Friday",
				date: "2019-4-18"
			},
			{
				title: "Connected",
				date: "2019-4-19"
			},
			{
				title: "A Horse With No Name",
				date: "2019-4-20"
			},
			{
				title: "He Has Risen Indeed",
				date: "2019-4-21"
			}
		]
	},
	{
		title: "Rotorua",
		lat: -38.175986,
		lng: 176.240003,
		posts: [
			{
				title: "Top Deck",
				date: "2019-4-22"
			},
			{
				title: "Safe Arrival",
				date: "2019-4-23"
			},
			{
				title: "The Wisdom of Trees",
				date: "2019-4-24"
			},
			{
				title: "Holy Cheese",
				date: "2019-4-25"
			},
			{
				title: "Hangi",
				date: "2019-4-26"
			},
			{
				title: "Glowworm Grotto",
				date: "2019-4-27"
			},
			{
				title: "Fern Magic",
				date: "2019-4-28"
			},
			{
				title: "RWTW",
				date: "2019-4-29"
			},
			{
				title: "There and Back Again",
				date: "2019-4-30"
			},
			{
				title: "All or Nothing",
				date: "2019-5-1"
			}
		]
	},
	{
		title: "Auckland II",
		lat: -36.742249,
		lng: 174.758438,
		posts: [
			{
				title: "Fortunately and Unfortunately",
				date: "2019-5-2"
			},
			{
				title: "Welcomed Sun",
				date: "2019-5-3"
			},
			{
				title: "Unproductive",
				date: "2019-5-4"
			},
			{
				title: "The Missing Key",
				date: "2019-5-5"
			},
			{
				title: "Sheep World",
				date: "2019-5-6"
			},
			{
				title: "Northwind",
				date: "2019-5-7"
			},
			{
				title: "Taonga",
				date: "2019-5-8"
			}
		]
	},
	{
		title: "Gisbourne",
		lat: -38.666270,
		lng: 178.032501,
		posts: []
	},
	{
		title: "Napier",
		lat: -39.500629,
		lng: 176.893427,
		posts: []
	},
	{
		title: "Wellington II",
		lat: -41.287996,
		lng: 174.764739,
		posts: []
	},
	{
		title: "Auckland III",
		lat: -36.905451,
		lng: 174.672404,
		posts: []
	}
];