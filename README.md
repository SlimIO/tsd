# tsd
![version](https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/SlimIO/tsd/master/package.json&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/SlimIO/github/commit-activity)
![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)
![dep](https://img.shields.io/david/SlimIO/tsd.svg)
![size](https://img.shields.io/github/repo-size/SlimIO/tsd.svg)

SlimIO TypeScript definition. This project contains definitions that are useful across many internal projects (his saves us from having to recreate the definitions multiple times).

## Requirements
- [Node.js](https://nodejs.org/en/) v10 or higher

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @slimio/tsd -D
```

> ⚠️ **-D** stand for **DevDependencies**.

## Usage example
To be able to use the **SlimIO** namespace, include a [Triple-Slash Directives](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html) at the top of your main project **d.ts** file.
```ts
/// <reference types="@slimio/tsd" />
```

You will now be able to use the namespace within your project

```ts
declare function getAlarm(cid: SlimIO.CID, severity?: SlimIO.AlarmSeverity): SlimIO.RawAlarm;
```

## API
Members of SlimIO Namespace.

### interfaces

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

### enum

<details><summary>SlimIO.AlarmSeverity</summary>
<br />

```ts
enum AlarmSeverity {
    Critical,
    Major,
    Minor
}
```
</details>

### types

<details><summary>SlimIO.CID</summary>
<br />

```ts
type CID = string | null;
```
</details>

<details><summary>SlimIO.CK</summary>
<br />

```ts
type CK = string | null;
```
</details>

## Dependencies
This project have no dependencies.

## License
MIT
