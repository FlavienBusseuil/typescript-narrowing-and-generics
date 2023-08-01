type Something = string | number | (() => string) | boolean | undefined | null;

export function formatToString(something: Something): string {
	// @ts-expect-error
	return something;
}

console.log(formatToString("Code"));
console.log(formatToString(5));
console.log(formatToString(() => "Hello"));
console.log(formatToString(true));
console.log(formatToString(undefined));
console.log(formatToString(null));
