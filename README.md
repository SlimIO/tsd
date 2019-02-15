# tsd
![V0.1.0](https://img.shields.io/badge/version-0.1.0-blue.svg)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/SlimIO/github/commit-activity)
![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)

SlimIO TypeScript definition

## Getting started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @slimio/tsd -D
```

## Usage example
Include the ref in your project `d.ts` files !
```ts
/// <reference types="@slimio/tsd" />
```

## Members

<details><summary>SlimIO.RawEntity</summary>
<br />

```ts
interface RawEntity {
    name: string;
    description: string;
    descriptors?: {
        [key: string]: string;
    };
    parent?: number;
}
```
</details>

<details><summary>SlimIO.RawIdentityCard</summary>
<br />

```ts
interface RawIdentityCard {
    unit: string;
    entityId: number;
    description?: string;
    max?: number;
    interval?: number;
}
```
</details>

<details><summary>SlimIO.RawAlarm</summary>
<br />

```ts
interface RawAlarm {
    message: string;
    entityId: number;
    correlateKey: string;
    severity: number;
}
```
</details>

<details><summary>SlimIO.CID</summary>
<br />

```ts
type CID = string;
```
</details>

## License
MIT
