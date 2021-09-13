import React, { FC, useEffect, useState } from "react";
import { Box, Newline, Text } from "ink";
import axios from "axios";
import Spinner from "ink-spinner";

const News: FC = () => {
	const [data, setData] = useState([] as any);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios(`https://api.coinstats.app/public/v1/news/handpicked?skip=0&limit=5`)
			.then((response) => {
				setData(response.data.news);
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
			{data.map((article: any) => (
				<Box
					key={article.id}
					borderStyle="round"
					borderColor="blue"
					flexDirection="column"
				>
					<Box flexDirection="row" paddingBottom={1}>
						<Box width="30%">
							<Text color="blue">{article.source}</Text>
						</Box>

						<Box width="70%">
							<Text color="cyan">{article.title}</Text>
						</Box>
					</Box>

					<Box>
						<Text color="green">{article.description}</Text>
					</Box>
					<Box paddingTop={1}>
						<Text color="blue">Link: </Text>
						<Text>{article.link}</Text>
					</Box>
				</Box>
			))}
		</>
	);
};

module.exports = News;
export default News;
