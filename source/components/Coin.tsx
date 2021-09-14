import React, { FC, useEffect, useState } from "react";
import { Box, Newline, Text } from "ink";
import axios from "axios";
import Spinner from "ink-spinner";
import Conf from "conf";

const config = new Conf();

const Coin: FC<{ coin: string }> = ({ coin = "bitcoin" }) => {
	const [data, setData] = useState([] as any);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios(
			`https://api.coinstats.app/public/v1/coins/${coin}?currency=${config.get(
				"currency"
			)}`
		)
			.then((response) => {
				setData(response.data.coin);
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
				<Box flexDirection="row">
					<Box width="20%">
						<Text color="blue">Name: </Text>
						<Text>{data.name}</Text>
					</Box>
					<Box width="10%">
						<Text color="blue">Rank: </Text>
						<Text>{data.rank}</Text>
					</Box>
					<Box width="35%">
						<Text color="blue">Price({config.get("currency")}): </Text>
						<Text>{data.price}</Text>
					</Box>
					<Box width="35%">
						<Text color="blue">Volume: </Text>
						<Text>{data.volume}</Text>
					</Box>
				</Box>
				<Box flexDirection="row">
					<Box width="33%">
						<Text color="blue">Market Cap: </Text>
						<Text>{data.marketCap}</Text>
					</Box>
					<Box width="33%">
						<Text color="blue">Available Supply: </Text>
						<Text>{data.availableSupply}</Text>
					</Box>
					<Box width="34%">
						<Text color="blue">Total Supply: </Text>
						<Text>{data.totalSupply}</Text>
					</Box>
				</Box>
				<Box flexDirection="row">
					<Box width="33%">
						<Text color="blue">1h Price Change: </Text>
						<Text>{data.priceChange1h}%</Text>
					</Box>
					<Box width="33%">
						<Text color="blue">24h Price Change: </Text>
						<Text>{data.priceChange1d}%</Text>
					</Box>
					<Box width="34%">
						<Text color="blue">1w Price Change: </Text>
						<Text>{data.priceChange1w}%</Text>
					</Box>
				</Box>
			</Box>
		</>
	);
};

module.exports = Coin;
export default Coin;
