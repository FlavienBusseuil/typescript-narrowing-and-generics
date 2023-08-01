type Something =
	| { a: string; maybe: true; c: string; d: string }
	| { a: string; maybe: false; c: number }
	| { a: number; b: string };

export function doSomething(something: Something): void {
	if ("maybe" in something) {
		something.c;
		if (typeof something.c === "number") {
			something.c + 5;

			// @ts-expect-error
			something.d;
		}

		return;
	}

	something.a + 5;
}
