type Something = string | number | (() => string) | boolean | undefined | null;

export function formatToString(something: Something): string {
	if (typeof something === "number") {
		return `Tape m'en ${something}`;
	}

	if (typeof something === "boolean") {
		return `C'est ${something === true ? "vrai" : "faux"} !`;
	}

	if (typeof something === "function") {
		return `${something()} Toovalu !`;
	}

	if (!something) {
		if (something === null) {
			return `C'est trop ${something}`;
		}

		if (something === undefined) {
			return `T'es ${something} ?`;
		}
	}

	return `Salut ${something}`;
}

console.log(formatToString("Code"));
console.log(formatToString(5));
console.log(formatToString(() => "Hello"));
console.log(formatToString(true));
console.log(formatToString(undefined));
console.log(formatToString(null));
