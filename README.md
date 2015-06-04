# mustache-cache
[![NPM](https://nodei.co/npm/mustache-cache.png)](https://nodei.co/npm/mustache-cache/)

Compile mustache templates into a requirable, callable function.

## Installation

```bash
$ npm install -g mustache-cache
```

## Usage

```
Usage: mustache-cache <template-file> [options]

Options:

  -h, --help            output usage information
  -V, --version         output the version number
  -o, --outfile <file>  Write cached template to this file. If unspecified, prints to stdout
```

## Example

Given the file `sayhi.tmpl`:

```mustache
Hello {{name}}
```

To compile, run the following

```bash
$ mustache-cache sayhi.tmpl -o sayhi.tmpl.js
```

## Using The Compiled Template

Require it like any local module file:

```js
var sayhiTmpl = require('./sayhi.tmpl');
var rendered = sayhiTmpl({name: 'Jess'});
console.log(rendered);
```

**Note**: The compiled template requires `mustache` to work. Ensure you have it
installed in your project with `npm install --save mustache`

# Contributing

Pull Requests are welcome!

This is a truly _open_ open source project: If your contributions are of a high
quality, I will give you push permissions to make direct changes in the future.

# Support Development

If you like this module, consider buying me a beer with Bitcoin:

[![3E9wqzjZSCdfpSSLqH5uL7FBrLFvqn58X8](http://zxing.org/w/chart?cht=qr&chs=230x230&chld=L&choe=UTF-8&chl=bitcoin%3A3E9wqzjZSCdfpSSLqH5uL7FBrLFvqn58X8%3Fmessage%3DDonation%2520for%2520mustache-cache%2520module)](bitcoin:3E9wqzjZSCdfpSSLqH5uL7FBrLFvqn58X8?message=Donation%20for%20mustache-cache%20module)

[**3E9wqzjZSCdfpSSLqH5uL7FBrLFvqn58X8**](bitcoin:3E9wqzjZSCdfpSSLqH5uL7FBrLFvqn58X8?message=Donation%20for%20mustache-cache%20module)
