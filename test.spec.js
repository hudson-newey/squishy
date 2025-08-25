import { expect, test, describe } from "vitest"
import { Squishy } from "./index.js"

test("Squishy", () => {
	expect(Squishy).toBe(Squishy);
});

test("Squishy.a", () => {
	expect(Squishy.a).toBe(Squishy);
});

test("Squishy.a.a.a.a", () => {
	expect(Squishy.a.a.a.a).toBe(Squishy);
});

test("Squishy.a().a.a", () => {
	expect(Squishy.a().a.a).toBe(Squishy);
});

test("Squishy.a().a().c.a().a.a", () => {
	expect(Squishy.a().a().c.a().a.a).toBe(Squishy);
});

describe("iteration", () => {
	test("Squishy.a(1, 2, ...Squishy).a().c.a().a.a", () => {
		expect(Squishy.a(1, 2, ...Squishy).a().c.a().a.a).toBe(Squishy);
	});

	test.skip("...Squishy", () => {
		expect(...Squishy).toBe(Squishy);
	});

	test.skip("...Squishy()", () => {
		expect(...Squishy()).toBe(Squishy);
	});

	test("for of Squishy", () => {
		for (const value of Squishy) {
			expect(value).toBe(Squishy);
		}
	});

	test("for in Squishy", () => {
		for (const value in Squishy) {
			expect(value).toBe(Squishy);
		}
	});
});

describe("async", () => {
	test("await Squishy", async () => {
		expect(await Squishy).toBe(Squishy);
	});

	test("await await Squishy", async () => {
		expect(await await Squishy).toBe(Squishy);
	});

	test("await Squishy.a", async () => {
		expect(await Squishy.a).toBe(Squishy);
	});

	test("await Squishy().a", async () => {
		expect(await Squishy().a).toBe(Squishy);
	});

	test("await new Squishy()", async () => {
		expect(await new Squishy()).toBe(Squishy);
	});

	test("await new Squishy().a", async () => {
		expect(await new Squishy().a).toBe(Squishy);
	});
});

describe("classes", () => {
	test("new Squishy()", () => {
		expect(new Squishy()).toBe(Squishy);
	});

	test.skip("...new Squishy()", () => {
		expect(...new Squishy()).toBe(Squishy);
	});

	test("mySquishyClass.a", () => {
		const MySquishyClass = new Squishy();
		expect(MySquishyClass.a).toBe(Squishy);
	});

	test("mySquishyClass().a", () => {
		const MySquishyClass = new Squishy();
		expect(MySquishyClass().a).toBe(Squishy);
	});

	test("mySquishyClass().a())", () => {
		const MySquishyClass = new Squishy();
		expect(MySquishyClass().a()).toBe(Squishy);
	});

	test("mySquishyClass().a().a)", () => {
		const MySquishyClass = new Squishy();
		expect(MySquishyClass().a()).toBe(Squishy);
	});
});

