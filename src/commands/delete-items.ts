import {Command, Flags} from '@oclif/core'
import {SharedIniFileCredentials} from 'aws-sdk'
import {DocumentClient, ItemList} from 'aws-sdk/clients/dynamodb'

export default class DeleteItems extends Command {
  static description = 'Delete items with a specific attribute'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    tableName: Flags.string({char: 't', description: 'table name', required: true}),
    attribute: Flags.string({char: 'a', description: 'attribute name', required: true}),
    value: Flags.string({char: 'v', description: 'attribute value', required: true}),
    profile: Flags.string({char: 'p', description: 'aws profile', required: true}),
  }

  static args = []

  public async run(): Promise<void> {
    const {flags} = await this.parse(DeleteItems)

    // Set Credentials
    const credentials = new SharedIniFileCredentials({profile: flags.profile})
    const docClient = new DocumentClient({credentials: credentials, region: 'us-west-2'})

    const {tableName, attribute, value} = flags

    this.log(`deleting items from  ${tableName} from /Users/jefffinley/code/dynamo-cli/src/commands/delete-items.ts`)

    const data = await listItems(tableName, attribute, value, docClient)

    console.table(data)

    const results = []

    for (const item of data) {
      const id = item.id.toString()

      results.push(deleteItem(tableName, id, docClient))
    }

    await Promise.all(results)
  }
}

async function listItems(tableName: string, attribute: string, value: string, docClient: DocumentClient): Promise<ItemList> {
  const params = {
    TableName: tableName,
    FilterExpression: '#attr = :val',
    ExpressionAttributeNames: {'#attr': attribute},
    ExpressionAttributeValues: {':val': value},
  }

  try {
    const data = await docClient.scan(params).promise()

    return data.Items || []
  } catch (error) {
    console.error(error)

    throw error
  }
}

async function deleteItem(tableName: string, id: string, docClient: DocumentClient) {
  const params = {
    TableName: tableName,
    Key: {id},
  }

  try {
    await docClient.delete(params).promise()
  } catch (error) {
    console.error(error)

    throw error
  }
}
