#!/usr/bin/env node
import chalk from "chalk";
import Conf from "conf";
import { render } from "ink";
import meow from "meow";
import React from "react";
import Default from "./components/Default";
import News from "./components/News";

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
				currency: {
					type: "string",
					alias: "c",
				},
			},
		}
	);

	const config = new Conf();
	// Default Condition
	// console.log("cli", config.path);

	if (config.get("currency") === undefined) {
		config.set("currency", "USD");
	}

	if (
		cli.flags.currency !== config.get("currency") &&
		cli.flags.currency !== undefined
	) {
		config.set("currency", cli.flags.currency);
	}

	cli.flags.help && cli.help;

	cli.input.length === 0 && render(<Default />);

	cli.input.includes("news") && render(<News />);
})();
