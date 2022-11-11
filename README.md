# About Pineapple

Australia's First Financial Wellbeing Wallet is Here!

We at [Pineapple][1] believe managing your money can be made simple and easy, changing the way 
you spend, save, borrow and repay to get on top and get ahead.

That is why we have created Australia’s first financial wellbeing wallet. Be better with money 
and save yourself a Pineapple a week.

# About the Pineapple API

The [Pineapple API][2] can be used to access data held by Pineapple.

To aid developers integrating with the Pineapple API, SDKs are available to encapsulate the 
requirements for using the API. The Pineapple API SDK is available in the following languages:

- Javascript (Typescript) - This repo. Can be used by both server (node) projects and 
  front-end applications.

# Using the Pineapple API

| :memo: | The SDK is currently in development. Therefore parts may change. |
|--------|:-----------------------------------------------------------------|

## Setup

```shell
$ npm install @pineapple/api-sdk
```

The SDK has the following core design philosophies.

1. Technology agnostic. Different browser applications may have different technology
   choices and an SDK shouldn't force an application to depend on a different
   technology stack as this bloats the build and increases complexity.

2. Swappable. Don't like a particular implementation of a part in the
   SDK, then swap it out for another object that "implements" the correct
   interface.

The SDK comprises:
- An API layer which knows how to communicate with the WPay API
- An authentication abstraction layer.

Applications have the flexibility to plug in different implementations of
the interfaces to allow particular technology choices (eg: choice of
HTTP client library). This makes it very easy to use the SDK in an
existing project, without necessarily introducing extra dependencies.

### Authentication layer

In order to access protected APIs, the SDK will need to know how to
authenticate with the API or a gateway that protects the API. The
`ApiAuthenticator` interface abstracts how the SDK authenticates from
the rest of the API interface. Applications that have a preexisting
authentication workflow can either update the relevant classes to implement the
`ApiAuthenticator` interface, or provide an [Adapter](https://en.wikipedia.org/wiki/Adapter_pattern#Java)
to make the existing authentication details available to the SDK.

Injecting an `ApiAuthenticator` allows the SDK to be used by Customer applications which 
require the Pineapple customer to authorise the application or by Pineapple Partners where 
the SDK is being used in a "server to server" interaction.

TODO: Document using Auth0

### HTTP layer

As the Pineapple API SDK uses the [api-sdk-creator][3] project, the HTTP stack is injected 
when the SDK is created.

## Versioning

The SDK follows [Semantic Versioning](https://semver.org/) principles. As such if the API 
specification changes in a way that introduces breaking changes (eg: path change or data 
changes) the major version of the SDK will be increased.

<!-- TODO: set spec version from metadata -->
The SDK currently supports version 0.1.0 of the API spec.

## Getting started

Read the [📘 SDK reference docs](/docs/index.html) for more information on the different types
in the SDK.

### Examples

TODO

[1]: https://www.addpineapple.com/
[2]: https://cloud-down-au.github.io/pineapple-oas/api.html
[3]: https://github.com/RedCrewOS/api-sdk-creator-js
