# GollumTS-ObjectType

Is a simple interface for replace "[key: string]: T" or "[key: number]: T"

## Install:

```
npm install --save gollumts-objecttype
```

## Example:

```typescript
	
	import { ObjectString, ObjectNumber } from 'gollumts-objecttype'
	
	const objectString: ObjectString<T> = {}; // replace "const objectString: [key: string]: T = {};"
	const objectNumber: ObjectNumber<T> = {}; // replace "const objectString: [key: number]: T = {};"
	
```