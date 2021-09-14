import React, { FC, useEffect, useState } from "react";
import { Box, Newline, Text } from "ink";
import axios from "axios";
import Spinner from "ink-spinner";
import Conf from "conf";

const config = new Conf();

const Default: FC = () => {
	const [data, setData] = useState([] as any);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios(
			`https://api.coinstats.app/public/v1/coins/?limit=5&currency=${config.get(
				"currency"
			)}`
		)
			.then((response) => {
				setData(response.data.coins);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading)
		return (
			<Text>
				<Newline />
				<Text color="green">
					<Spinner type="dots" />
				</Text>
				{" Loading"}
			</Text>
		);

	return (
		<>
			<Box borderStyle="round" borderColor="blue" flexDirection="column">
				<Box paddingBottom={1}>
					<Box width="30%">
						<Text>Name</Text>
					</Box>

					<Box width="10%">
						<Text>Symbol</Text>
					</Box>

					<Box width="35%">
						<Text>Price({config.get("currency")})</Text>
					</Box>
					<Box width="25%">
						<Text>24h Change</Text>
					</Box>
				</Box>
				{data.map((coin: any) => (
					<Box key={coin.id}>
						<Box width="30%">
							<Text color="blue">{coin.id}</Text>
						</Box>

						<Box width="10%">
							<Text color="cyan">{coin.symbol}</Text>
						</Box>

						<Box width="35%">
							<Text color="green">{coin.price}</Text>
						</Box>

						<Box width="25%">
							<Text color="green">{coin.priceChange1d}%</Text>
						</Box>
					</Box>
				))}
			</Box>
		</>
	);
};

module.exports = Default;
export default Default;
