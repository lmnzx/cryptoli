#!/usr/bin/env node
import chalk from "chalk";
import Conf from "conf";
import { render } from "ink";
import meow from "meow";
import React from "react";
import Coin from "./components/Coin";
import Default from "./components/Default";
import News from "./components/News";

(() => {
	const cli = meow(
		chalk`
		Usage
		$ cryptoli {green commands} {blue options}

		Commands
		<nothing>		{green Returns top 5 crypocurrencies with info}
		info <name of coin>		{green Detail info about that coin}
		news 		{green Popular Crypto News}

		Flags
		-h --help		{blue Help}
		-c --currency		{blue Set the default currency}

		Examples
		$ cryptoli -c USD
		$ cryptoli info bitcoin
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
	if (config.get("currency") === undefined) {
		config.set("currency", "USD");
	}

	if (
		cli.flags.currency !== undefined &&
		cli.flags.currency.toUpperCase() !== config.get("currency")
	) {
		config.set("currency", cli.flags.currency.toUpperCase());
	}

	cli.flags.help && cli.help;

	cli.input.length === 0 && render(<Default />);

	cli.input.includes("news") && render(<News />);

	cli.input.includes("info") && render(<Coin coin={cli.input[1] as string} />);
})();
