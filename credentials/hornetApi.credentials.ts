import {
    IAuthenticateGeneric, ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class hornet implements ICredentialType {
    name = 'hornetApi';
    displayName = 'hornet API';
    documentationUrl = 'https://cp.hornetsecurity.com/api/v0/docs/';
    properties: INodeProperties[] = [
        {
            displayName: 'hornet API URL',
            name: 'url',
            placeholder: "https://cp.hornetsecurity.com",
            type: 'string',
            default: '',
            required: true,
        },
        {
            displayName:
                "There's many " +
                "<a href='https://www.chatwoot.com/docs/contributing-guide/chatwoot-apis' target='_blank'></a><b>Access Token Types</b> in <b>ChatWoot</b></a>," +
                " so we just check that <code>{{url}}/api</code> is accessible without token.",
            default: '',
            name: 'operation',
            type: 'notice',
        },
        {
            displayName: 'CP-TOKEN',
            name: 'CP-TOKEN',
            type: 'string',
            placeholder: "00000000-0000-0000-0000-000000000000",
            default: '',
            required: true,
            typeOptions: {password: true},
        },
		{
            displayName: 'APP-VERSION',
            name: 'APP-VERSION',
            type: 'string',
            placeholder: "00000000-0000-0000-0000-000000000000",
            default: '',
            required: true,
            typeOptions: {password: true},
        },
		{
			displayName: 'Authorization',
            name: 'Authorization',
            type: 'string',
            placeholder: "00000000-0000-0000-0000-000000000000",
            default: '',
            required: true,
            typeOptions: {password: true},
        },
    ];

    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            headers: {
                'CP-TOKEN': '={{$credentials.CP-TOKEN}}',
				'Authorization': '={{$credentials.Authorization}}',
				'APP-VERSION': '={{$credentials.APP-VERSION}}'
            },
        },
    };

    test: ICredentialTestRequest = {
        request: {
            baseURL: '={{$credentials.url}}',
            url: '/api/v0/object/?name=symplasson',
        },
    };
}
