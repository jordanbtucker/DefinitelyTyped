// Type definitions for tap 12.6
// Project: http://node-tap.org/
// Definitions by: Jordan Tucker <https://github.com/jordanbtucker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable } from "stream";

declare interface Extra {
    todo?: boolean | string
    skip?: boolean | string
    diagnostic?: boolean
    grep: RegExp[]
    [propName: string]: any
}

declare interface Options extends Extra {
    timeout?: number
    bail?: boolean
    autoend?: boolean
    buffered?: boolean
    jobs?: number
    grep?: RegExp[]
    only?: boolean
    runOnly?: boolean
}

declare class Tap extends Test {
    mocha: Mocha
    mochaGlobals(): void
}

declare interface Mocha {
    describe(name?: string, fn?: () => any): void
    it(name?: string, fn?: () => any): void
    global(): void
}

declare class Test extends Readable {
    test(name: string, fn: (t: Test) => any): Promise<Test>
    test(name: string, options: Options, fn: (t: Test) => any): Promise<Test>
    test(name: string): Promise<Test>
    test(fn: (t: Test) => any): Promise<Test>
    test(options: Options, fn: (t: Test) => any): Promise<Test>

    todo(name: string, fn: (t: Test) => any): Promise<Test>
    todo(name: string, options: Options, fn: (t: Test) => any): Promise<Test>
    todo(name: string): Promise<Test>
    todo(fn: (t: Test) => any): Promise<Test>
    todo(options: Options, fn: (t: Test) => any): Promise<Test>

    skip(name: string, fn: (t: Test) => any): Promise<Test>
    skip(name: string, options: Options, fn: (t: Test) => any): Promise<Test>
    skip(name: string): Promise<Test>
    skip(fn: (t: Test) => any): Promise<Test>
    skip(options: Options, fn: (t: Test) => any): Promise<Test>

    only(name: string, fn: (t: Test) => any): Promise<Test>
    only(name: string, options: Options, fn: (t: Test) => any): Promise<Test>
    only(name: string): Promise<Test>
    only(fn: (t: Test) => any): Promise<Test>
    only(options: Options, fn: (t: Test) => any): Promise<Test>

    runOnly: boolean
    jobs: number
    tearDown(): any
    beforeEach(done: () => void): any
    afterEach(done: () => void): any
    plan(n: number): void
    end: () => void
    bailout(reason?: string): void
    passing: () => void
    comment(message: string): void
    fail(message: string, extra: Extra): void
    pass(message: string): void
    pragma(set: any): void
    threw(err: Error): void
    autoend(value: any): void

    ok(obj: any, message?: string, extra?: Extra): void
    true(obj: any, message?: string, extra?: Extra): void
    assert(obj: any, message?: string, extra?: Extra): void

    notOk(obj: any, message?: string, extra?: Extra): void
    false(obj: any, message?: string, extra?: Extra): void
    assertNot(obj: any, message?: string, extra?: Extra): void

    error(obj: any, message?: string, extra?: Extra): void
    ifErr(obj: any, message?: string, extra?: Extra): void
    ifError(obj: any, message?: string, extra?: Extra): void

    rejects(promise: Promise<any>, expectedError?: Error, message?: string, extra?: Extra): void
    rejects(fn: () => any, expectedError?: Error, message?: string, extra?: Extra): void

    resolves(promise: Promise<any>, message?: string, extra?: Extra): void
    resolves(fn: () => any, message?: string, extra?: Extra): void

    resolveMatch(promise: Promise<any>, wanted: any, message?: string, extra?: Extra): void

    throws(fn: () => any, expectedError?: Error, message?: string, extra?: Extra): void
    throw(fn: () => any, expectedError?: Error, message?: string, extra?: Extra): void

    doesNotThrow(fn: () => any, message?: string, extra?: Extra): void
    notThrow(fn: () => any, message?: string, extra?: Extra): void

    equal(found: any, wanted: any, message?: string, extra?: Extra): void
    equals(found: any, wanted: any, message?: string, extra?: Extra): void
    isEqual(found: any, wanted: any, message?: string, extra?: Extra): void
    is(found: any, wanted: any, message?: string, extra?: Extra): void
    strictEqual(found: any, wanted: any, message?: string, extra?: Extra): void
    strictEquals(found: any, wanted: any, message?: string, extra?: Extra): void
    strictIs(found: any, wanted: any, message?: string, extra?: Extra): void
    isStrict(found: any, wanted: any, message?: string, extra?: Extra): void
    isStrictly(found: any, wanted: any, message?: string, extra?: Extra): void

    notEqual(found: any, wanted: any, message?: string, extra?: Extra): void
    inequal(found: any, wanted: any, message?: string, extra?: Extra): void
    notEquals(found: any, wanted: any, message?: string, extra?: Extra): void
    notStrictEqual(found: any, wanted: any, message?: string, extra?: Extra): void
    notStrictEquals(found: any, wanted: any, message?: string, extra?: Extra): void
    isNotEqual(found: any, wanted: any, message?: string, extra?: Extra): void
    isNot(found: any, wanted: any, message?: string, extra?: Extra): void
    doesNotEqual(found: any, wanted: any, message?: string, extra?: Extra): void
    isInequal(found: any, wanted: any, message?: string, extra?: Extra): void

    same(found: any, wanted: any, message?: string, extra?: Extra): void
    equivalent(found: any, wanted: any, message?: string, extra?: Extra): void
    looseEqual(found: any, wanted: any, message?: string, extra?: Extra): void
    looseEquals(found: any, wanted: any, message?: string, extra?: Extra): void
    deepEqual(found: any, wanted: any, message?: string, extra?: Extra): void
    deepEquals(found: any, wanted: any, message?: string, extra?: Extra): void
    isLoose(found: any, wanted: any, message?: string, extra?: Extra): void
    looseIs(found: any, wanted: any, message?: string, extra?: Extra): void

    notSame(found: any, notWanted: any, message?: string, extra?: Extra): void
    inequivalent(found: any, notWanted: any, message?: string, extra?: Extra): void
    looseInequal(found: any, notWanted: any, message?: string, extra?: Extra): void
    notDeep(found: any, notWanted: any, message?: string, extra?: Extra): void
    deepInequal(found: any, notWanted: any, message?: string, extra?: Extra): void
    notLoose(found: any, notWanted: any, message?: string, extra?: Extra): void
    looseNot(found: any, notWanted: any, message?: string, extra?: Extra): void

    strictSame(found: any, wanted: any, message?: string, extra?: Extra): void
    strictEquivalent(found: any, wanted: any, message?: string, extra?: Extra): void
    strictDeepEqual(found: any, wanted: any, message?: string, extra?: Extra): void
    sameStrict(found: any, wanted: any, message?: string, extra?: Extra): void
    deepIs(found: any, wanted: any, message?: string, extra?: Extra): void
    isDeeply(found: any, wanted: any, message?: string, extra?: Extra): void
    isDeep(found: any, wanted: any, message?: string, extra?: Extra): void
    strictDeepEquals(found: any, wanted: any, message?: string, extra?: Extra): void

    strictNotSame(found: any, notWanted: any, message?: string, extra?: Extra): void
    strictInequivalent(found: any, notWanted: any, message?: string, extra?: Extra): void
    strictDeepInequal(found: any, notWanted: any, message?: string, extra?: Extra): void
    notSameStrict(found: any, notWanted: any, message?: string, extra?: Extra): void
    deepNot(found: any, notWanted: any, message?: string, extra?: Extra): void
    notDeeply(found: any, notWanted: any, message?: string, extra?: Extra): void
    strictDeepInequals(found: any, notWanted: any, message?: string, extra?: Extra): void
    notStrictSame(found: any, notWanted: any, message?: string, extra?: Extra): void

    match(found: any, pattern: any, message?: string, extra?: Extra): void
    has(found: any, pattern: any, message?: string, extra?: Extra): void
    hasFields(found: any, pattern: any, message?: string, extra?: Extra): void
    matches(found: any, pattern: any, message?: string, extra?: Extra): void
    similar(found: any, pattern: any, message?: string, extra?: Extra): void
    like(found: any, pattern: any, message?: string, extra?: Extra): void
    isLike(found: any, pattern: any, message?: string, extra?: Extra): void
    includes(found: any, pattern: any, message?: string, extra?: Extra): void
    include(found: any, pattern: any, message?: string, extra?: Extra): void
    contains(found: any, pattern: any, message?: string, extra?: Extra): void

    notMatch(found: any, pattern: any, message?: string, extra?: Extra): void
    dissimilar(found: any, pattern: any, message?: string, extra?: Extra): void
    unsimilar(found: any, pattern: any, message?: string, extra?: Extra): void
    notSimilar(found: any, pattern: any, message?: string, extra?: Extra): void
    unlike(found: any, pattern: any, message?: string, extra?: Extra): void
    isUnlike(found: any, pattern: any, message?: string, extra?: Extra): void
    notLike(found: any, pattern: any, message?: string, extra?: Extra): void
    isNotLike(found: any, pattern: any, message?: string, extra?: Extra): void
    doesNotHave(found: any, pattern: any, message?: string, extra?: Extra): void
    isNotSimilar(found: any, pattern: any, message?: string, extra?: Extra): void
    isDissimilar(found: any, pattern: any, message?: string, extra?: Extra): void

    type(obj: any, type: any, message?: string, extra?: Extra): void
    isa(obj: any, type: any, message?: string, extra?: Extra): void
    isA(obj: any, type: any, message?: string, extra?: Extra): void
}

declare const tap: Tap

export = tap
