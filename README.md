![Tests Passing](https://github.com/NicolaWealth/binder/actions/workflows/auto_test_main_badge.yml/badge.svg)
![Code Cov](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fnicolawealth%2Fbinder%2Fraw%2Fmain%2Fcodecov/badge.json&query=%24.message&label=Code%20Coverage&color=%24.color)

# Introduction
The `binder` package provides functionality to create a (customizable) binding function which takes a template literal and a value for the variable part of the string, normalizes it, and returns the binded string. 

# Installation
This package should be installed via npm. You must have npm installed first. The following can be run on the commandline to install the `binder` package with npm:

`npm install @nicolawealth/binder`

# Usage
The `binder` package is designed to dynamically replace placeholders in strings from provided binding objects which is useful in generating content which adapts to different contexts or inputs. 

Some common use cases include:
* Templating systems
* Configuration files
* Email generation
* Customizable notifications
* Report generation
* etc.

# Interface
The package exports function `binderFactory(bindNormalizer)` of exported type `binderType` where `bindNormalizer` is an optional string normalizing function which takes in a string and returns a string (i.e. `toUpperCase()`).
`binderFactory(bindNormalizer)` returns a function which consumes `({value, binds})` where `value` is a template literal (i.e. a string which contains at least one expression of the form `${...}` where `...` is replaced by some placeholder string value).
Here `binds` is a key-value paired object which contains keys corresponding to the placeholder parts of `value` and values which will replace the placeholder parts after binding takes place. If `binds` is not provided or the appropriate key is not provided within `binds`, 
the message returned will indicate so by returning `?{...}` in the binded string where `...` remains the original placeholder in the template literal. If a normalizing function is specified as `bindNormalizer`, the string function will be applied to the placeholder value before it's compared to the provided keys.

## Sample Function Calls

### Providing a Normalizing Function
`binderFactory(b=>b.toLowerCase())({value:"My name is ${USERNAME}.", binds:{username:"Bob"}})` returns `"My name is Bob."`

### Multiple Placeholders
`binderFactory()({value:"This is a ${func} function with ${number} templated values.", binds:{func: "binder", number: "two"}})` returns `"This is a binder function with two templated values."`

### Failing to Provide a KVP
`binderFactory()({value:"My name is ${username}.", binds:{age: "50"}})` returns `"My name is ?{username}."`

# Testing
Tests can be found in `binder.test.ts` located in `binder/src` and should be run with sinon, mocha and nyc.
