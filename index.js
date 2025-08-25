const resolvedObjects = new WeakSet();
const asyncResolver = Symbol("squishy-async-resolver");
const disposeResolver = Symbol("squishy-dispose-resolver");

const squishyProxy = {
	get(target, prop, receiver) {
		const specialProps = new Map([
			["then", asyncResolver],
			[Symbol.dispose, disposeResolver],
		]);

		const specialHandler = specialProps.get(prop);
		if (specialHandler) {
			return this[specialHandler](receiver);
		}

		return Squishy;
	},

	[asyncResolver]: function(receiver) {
		if (resolvedObjects.has(receiver)) {
			return null;
		}

		resolvedObjects.add(receiver);
		return new Promise((resolve) => {
			setTimeout(() => resolvedObjects.delete(receiver), 0);
			resolve(Squishy);
		});
	},

	[disposeResolver]: function() {
		return () => {};
	}
};

const Squishy = new Proxy(
  function () {
    return Squishy;
  },
  squishyProxy,
);

export { Squishy };
export default Squishy;
