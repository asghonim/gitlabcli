gitlabcli
=========

CLI for the Gitlab API

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gitlabcli.svg)](https://npmjs.org/package/gitlabcli)
[![Downloads/week](https://img.shields.io/npm/dw/gitlabcli.svg)](https://npmjs.org/package/gitlabcli)
[![License](https://img.shields.io/npm/l/gitlabcli.svg)](https://github.com/asghonim/gitlabcli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g gitlabcli
$ gitlabcli COMMAND
running command...
$ gitlabcli (-v|--version|version)
gitlabcli/0.0.0 darwin-x64 node-v12.13.0
$ gitlabcli --help [COMMAND]
USAGE
  $ gitlabcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gitlabcli groups [FILE]`](#gitlabcli-groups-file)
* [`gitlabcli help [COMMAND]`](#gitlabcli-help-command)

## `gitlabcli groups [FILE]`

describe the command here

```
USAGE
  $ gitlabcli groups [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/groups.ts](https://github.com/asghonim/gitlabcli/blob/v0.0.0/src/commands/groups.ts)_

## `gitlabcli help [COMMAND]`

display help for gitlabcli

```
USAGE
  $ gitlabcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_
<!-- commandsstop -->
