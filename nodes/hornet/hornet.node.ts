import {INodeType, INodeTypeDescription} from 'n8n-workflow';
import {N8NPropertiesBuilder, N8NPropertiesBuilderConfig} from '@devlikeapro/n8n-openapi-node';
import * as doc from './openapi.json';

const config: N8NPropertiesBuilderConfig = {}
const parser = new N8NPropertiesBuilder(doc, config);
const properties = parser.build()

export class hornet implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'hornet',
        name: 'hornet',
        icon: 'file:logo.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with hornet API',
        defaults: {
            name: 'hornet',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'hornetApi',
                required: true,
            },
        ],
        requestDefaults: {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            baseURL: 'https://cp.hornetsecurity.com/api/v0',
        },
        properties: properties,
    };
}
