export default async (req, res) => {
	const email = req.body.emailAddress;
	const secret = 'Bearer ' + 'keyVhyObfMsV33jCY';

	try {
		const response = await fetch(
			`https://api.airtable.com/v0/appNbHqBbSFpE8ksE/emails`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: secret
				},
				body: JSON.stringify({
					fields: {
						email
					}
				})
			}
		);
		console.log(response);
		if (response.status === 200) {
			res.statusCode = 200;
			res.end();
		} else {
			res.statusCode = 400;
			res.end();
		}
	} catch (error) {
		res.statusCode = 400;
		res.end();
	}
};
