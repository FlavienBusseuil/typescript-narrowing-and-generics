// On types
export type WithValue<T> = T & { value: number };

const props: WithValue<{ name: string }> = {
	name: "Name",
	value: 11,
};

// With constraints and default props
export type Data<D extends number | string = number> = {
	name: string;
	values: D[];
};

const data: Data = { name: "", values: [1, 2, 3] };

// Multiple Generics

export type ComplexeType<T extends Data<number | string>, D = T> = {
	values: D;
};

// On functions
export function identity<Type>(arg: Type): Type {
	return arg;
}

export const inlineFunc = <T>(arg: T): void => {};

// Infered
const num1 = identity(1);

// Declared
const num2 = identity<number>(2);
