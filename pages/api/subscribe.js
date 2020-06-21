export default async (req, res) => {
   const email = req.body.emailAddress;
   const secret =
      'Basic ' + new Buffer('anystring:d0daea8dbc19e249d662d596d5912e9c').toString('base64');

   try {
      const response = await fetch('https://us10.api.mailchimp.com/3.0/lists/1bb4f63838/members', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: secret,
         },
         body: JSON.stringify({
            email_address: email,
            status: 'subscribed',
         }),
      });
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
