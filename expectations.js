let payload = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:AddThis>
         <tem:x>5</tem:x>
         <tem:y>10</tem:y>
      </tem:AddThis>
   </soapenv:Body>
</soapenv:Envelope>`;

let responseXml = `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
   <soap:Body>
      <AddThisResponse xmlns="http://tempuri.org/">
         <AddThisResult>15</AddThisResult>
      </AddThisResponse>
   </soap:Body>
</soap:Envelope>`

mockServerClient('localhost', 1080).mockSimpleResponse('/simple', { name: 'value' }, 203);

/*
mockServerClient('localhost', 1080).mockAnyResponse(
    {
        'httpRequest': {
            'method': 'POST',
            'path': '/raiderajatapahtuma',
            'body': {
            	'type': 'STRING',
        		'value': payload
            }
        },
        'httpResponse': {
		    'statusCode': 200,
		    'headers': [
		        {
		            'name': 'Content-Type',
		            'values': ['application/xml; charset=utf-8']
		        },
		    ],
		    'body': responseXml,
		    'delay': {
		        'timeUnit': 'SECONDS',
		        'value': 1
		    }
		},
        'times': {
            'remainingTimes': 1,
            'unlimited': false
        }
    }
);
*/