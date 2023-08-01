type Something =
	| { a: string; maybe: true; c: string; d: string }
	| { a: string; maybe: false; c: string }
	| { a: number; b: string };

export function doSomething(something: Something): void {
	// @ts-expect-error
	something.c;

	// @ts-expect-error
	something.a + 5;
}
