<h1 align="center">
  cryptoli
</h1>
<p align="center">A simple cli for all your cryptocurrency needs.</p>

<p align="center">
<a href="https://github.com/snxk/cryptoli/releases" target="_blank">
<img alt="npm" src="https://img.shields.io/npm/v/cryptoli?style=for-the-badge"></a>
<a href="https://nodejs.org/"><img alt="node" src="https://img.shields.io/badge/version-Node%2014.17.6-green?style=for-the-badge"></a>
<img alt="NPM" src="https://img.shields.io/npm/l/cryptoli?style=for-the-badge">
 </p>

## Install

```bash
$ npm install --global cryptoli
```

## CLI

```
$ cryptoli -h

  Usage
  $ cryptoli commands options

  Commands
  <nothing>             Returns top 5 crypocurrencies with info
  info <name of coin>   Detail info about that coin
  news                  Popular Crypto News

  Flags
  -h --help             Help
  -c --currency         Set the default currency

  Examples
  $ cryptoli -c USD
  $ cryptoli info bitcoin

```
