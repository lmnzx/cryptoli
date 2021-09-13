#!/usr/bin/env node
import chalk from "chalk";
import { render } from "ink";
import meow from "meow";
import React from "react";
import Default from "./components/default";

(() => {
	const cli = meow(
		chalk`
		Usage
			$ cryptoli {green.bold input}

		Options
			--help  Your name

		Examples
			$ cryptoli --name=Jane
			Hello, Jane
	`,
		{
			flags: {
				help: {
					type: "boolean",
					alias: "h",
				},
			},
		}
	);

	if (cli.flags.help) {
		cli.help;
	}
	if (cli.input.length === 0) {
		render(<Default />);
	}
})();
