export interface ObjectString<T> {
	[key: string]: T
}
export interface ObjectNumber<T> {
	[key: number]: T
}
export type ObjectConstructor<T> = {new(...any): T; };