oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dynamo-cli
$ dynamo COMMAND
running command...
$ dynamo (--version)
dynamo-cli/0.0.0 darwin-x64 node-v16.15.0
$ dynamo --help [COMMAND]
USAGE
  $ dynamo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dynamo hello PERSON`](#dynamo-hello-person)
* [`dynamo hello world`](#dynamo-hello-world)
* [`dynamo help [COMMAND]`](#dynamo-help-command)
* [`dynamo plugins`](#dynamo-plugins)
* [`dynamo plugins:install PLUGIN...`](#dynamo-pluginsinstall-plugin)
* [`dynamo plugins:inspect PLUGIN...`](#dynamo-pluginsinspect-plugin)
* [`dynamo plugins:install PLUGIN...`](#dynamo-pluginsinstall-plugin-1)
* [`dynamo plugins:link PLUGIN`](#dynamo-pluginslink-plugin)
* [`dynamo plugins:uninstall PLUGIN...`](#dynamo-pluginsuninstall-plugin)
* [`dynamo plugins:uninstall PLUGIN...`](#dynamo-pluginsuninstall-plugin-1)
* [`dynamo plugins:uninstall PLUGIN...`](#dynamo-pluginsuninstall-plugin-2)
* [`dynamo plugins update`](#dynamo-plugins-update)

## `dynamo hello PERSON`

Say hello

```
USAGE
  $ dynamo hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/quickliketurtle/dynamo-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `dynamo hello world`

Say hello world

```
USAGE
  $ dynamo hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `dynamo help [COMMAND]`

Display help for dynamo.

```
USAGE
  $ dynamo help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for dynamo.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `dynamo plugins`

List installed plugins.

```
USAGE
  $ dynamo plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ dynamo plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `dynamo plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dynamo plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ dynamo plugins add

EXAMPLES
  $ dynamo plugins:install myplugin 

  $ dynamo plugins:install https://github.com/someuser/someplugin

  $ dynamo plugins:install someuser/someplugin
```

## `dynamo plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ dynamo plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ dynamo plugins:inspect myplugin
```

## `dynamo plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dynamo plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ dynamo plugins add

EXAMPLES
  $ dynamo plugins:install myplugin 

  $ dynamo plugins:install https://github.com/someuser/someplugin

  $ dynamo plugins:install someuser/someplugin
```

## `dynamo plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ dynamo plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ dynamo plugins:link myplugin
```

## `dynamo plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dynamo plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dynamo plugins unlink
  $ dynamo plugins remove
```

## `dynamo plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dynamo plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dynamo plugins unlink
  $ dynamo plugins remove
```

## `dynamo plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dynamo plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dynamo plugins unlink
  $ dynamo plugins remove
```

## `dynamo plugins update`

Update installed plugins.

```
USAGE
  $ dynamo plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
