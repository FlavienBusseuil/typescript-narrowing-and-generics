type ObjA = { a: string; maybe: true; c: string; d: string };
type ObjB = { a: string; maybe: false; c: number };
type ObjC = { a: number; b: string };

type Something = ObjA | ObjB | ObjC;

function isObjA(something: Something): something is ObjA {
	return "d" in something;
}

function isObjB(something: Something): something is ObjB {
	return "c" in something;
}

function isObjC(something: Something): something is ObjC {
	return typeof something.a === "number";
}

export function doSomething(something: Something): void {
	if (isObjA(something) || isObjB(something)) {
		something.c;
		if (isObjB(something)) {
			something.c + 5;

			// @ts-expect-error
			something.d;
		}

		return;
	}

	something.a + 5;
}
