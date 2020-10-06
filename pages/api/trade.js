export default async (req, res) => {
	const body = req.body;

	const route = 'https://paper-api.alpaca.markets';
	const additionalInfo = '/v2/orders';
	const apiKey = 'PKI6SLPRCO0XUJUCRGQR';
	const secret = 'zHAHKzdwHtE7O5DCijwHAlnZb1UAA44Penaw6IGu';
	try {
		const response = await fetch(route + additionalInfo, {
			method: 'POST',
			body: {
				symbol: 'GOOGL',
				qty: 1,
				side: 'buy',
				type: 'market',
				time_in_force: 'day'
			},
			headers: {
				'APCA-API-KEY-ID': apiKey,
				'APCA-API-SECRET-KEY': secret
			}
		});
		console.log(response);
		if (response.status == 401) {
			return res.send(401);
		}
		return res.send(JSON.parse(response));
	} catch (error) {
		return res.send(400);
	}
};
