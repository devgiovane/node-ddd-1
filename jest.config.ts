export default {
	bail: true,
	clearMocks: true,
	coverageProvider: "v8",
	preset: 'ts-jest',
	roots: [
		"<rootDir>"
	],
	testMatch: [
		"**/__tests__/**/*.[jt]s?(x)",
		"**/?(*.)+(spec|test).[tj]s?(x)"
	]
};
