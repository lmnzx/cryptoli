#!/usr/bin/env node
// import { render } from "ink";
// import Help from "./components/help";
import meow from "meow";
import chalk from "chalk";
// import App from "./ui";
// import parseArge from "minimist";
// import React from "react";

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

console.log(cli.help);
// console.log(cli.flags.help);

// render(<App name={cli.flags.name}/>);

// interface ParsedArgs {
// 	_: string[];
// 	help?: boolean;
// 	h?: boolean;
// }

// (() => {
// 	const argv: ParsedArgs = parseArge(process.argv.slice(2), {
// 		boolean: ["help"],
// 		alias: { h: "help" },
// 	});

// 	if (argv.h) {
// 		render(<Help />);
// 	}

// 	render(<App name={argv._[0]} />);
// })();
