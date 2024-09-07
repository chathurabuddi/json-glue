import { MergeJson } from "../src/merge";

describe('MergeJson', () => {
    test('should merge two flat objects', () => {
        const target = { a: 1, b: 2 };
        const source = { b: 3, c: 4 };
        const result = MergeJson(target, source);
        expect(result).toEqual({ a: 1, b: 3, c: 4 });
    });

    test('should merge nested objects', () => {
        const target = { a: { x: 1 }, b: 2 };
        const source = { a: { y: 2 }, c: 4 };
        const result = MergeJson(target, source);
        expect(result).toEqual({ a: { x: 1, y: 2 }, b: 2, c: 4 });
    });

    test('should handle arrays correctly', () => {
        const target = { a: [1, 2] };
        const source = { a: [3, 4] };
        const result = MergeJson(target, source);
        expect(result).toEqual({ a: [3, 4] });
    });

    test('should overwrite values from source', () => {
        const target = { a: 1, b: { x: 10 } };
        const source = { a: 2, b: { x: 20, y: 30 } };
        const result = MergeJson(target, source);
        expect(result).toEqual({ a: 2, b: { x: 20, y: 30 } });
    });

    test('should handle null and undefined values', () => {
        const target = { a: null, b: undefined };
        const source = { a: 1, b: 2 };
        const result = MergeJson(target, source);
        expect(result).toEqual({ a: 1, b: 2 });
    });

    test('should handle empty source and target', () => {
        const target = {};
        const source = {};
        const result = MergeJson(target, source);
        expect(result).toEqual({});
    });

    test('should handle source being null or undefined', () => {
        const target = { a: 1 };
        const result1 = MergeJson(target, null as any);
        const result2 = MergeJson(target, undefined as any);
        expect(result1).toEqual({ a: 1 });
        expect(result2).toEqual({ a: 1 });
    });

    test('should handle deeply nested objects', () => {
        const target = { a: { b: { c: 1 } } };
        const source = { a: { b: { d: 2 } } };
        const result = MergeJson(target, source);
        expect(result).toEqual({ a: { b: { c: 1, d: 2 } } });
    });

    test('should assign object value from source to target when target value is not an object', () => {
        const target = { a: 1 };
        const source = { a: { x: 2 } };
        const result = MergeJson(target, source);
        expect(result).toEqual({ a: { x: 2 } });
    });
});

