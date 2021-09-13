import React, { FC, useEffect, useState } from "react";
import { Newline, Text } from "ink";
import axios from "axios";
import Spinner from "ink-spinner";

const baseURL = `https://api.coinstats.app/public/v1/coins/?limit=5`;

const Default: FC = () => {
	const [data, setData] = useState([] as any);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios(baseURL)
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
			{/* <Newline /> */}
			<Text>{data[0].id}</Text>
			{/* {console.log(data[0].id)} */}
		</>
	);
};

module.exports = Default;
export default Default;
