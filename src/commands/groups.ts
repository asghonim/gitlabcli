import {Command, flags} from '@oclif/command'
import http = require('http')
import https = require('https')
import util = require('util')

const httpGet = async function (options: {
  url: string,
  personal: string | undefined
}): Promise<http.IncomingMessage | string> {
  const url = options.url
  const personal = options.personal
  return new Promise<http.IncomingMessage | string>((resolve, reject) => {
    let data = ''
    const personalTokenHeader = personal ? {'Private-Token' : personal} : {}
    https.get(url, {
      headers: {
        ...personalTokenHeader
      }
    }, (res: http.IncomingMessage) => {
      res.on('error', () => reject(res))
        .on('data', chunk => {
          data += chunk
        })
        .on('end', () => {
          resolve(data)
        })
    })
  })
}

export default class Groups extends Command {
  static description = 'Get a list of visible groups for the authenticated user. When accessed without authentication, only public groups are returned.'

  static flags = {
    help: flags.help({char: 'h'}),
    server: flags.string({char: 's', description: 'gitlab server (defaults to https://gitlab.com/api/v4', default: 'https://gitlab.com/api/v4'}),
    personal: flags.string({char: 'p', description: 'personal access token for authentication'})
  }

  async run() {
    const {args, flags} = this.parse(Groups)
    const res = await httpGet(
      {
        url : `${flags.server}/groups`,
        personal: flags.personal
      })
    this.log(util.inspect(res, true))
  }
}
