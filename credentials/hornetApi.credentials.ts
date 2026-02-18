import {
    IAuthenticateGeneric, ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class hornetApi implements ICredentialType {
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
            url: '/api/v0/object/',
        },
    };
}
