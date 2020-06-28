export type Optional<T> = T | undefined;

enum NonEmptyArrayTag {
    Tag,
}
/**
 * Simple Array extension requiring at least one element.
 */
export class NonEmptyArray<T> extends Array<T> {
    constructor(firstItem: T, ...items: T[]) {
        super(firstItem, ...items);
    }

    static fromArray<T>(array: Array<T>): Optional<NonEmptyArray<T>> {
        if (array.length < 1) {
            return undefined;
        }
        const firstItem = array.shift();
        if (firstItem === undefined) {
            return undefined;
        }
        const result = new NonEmptyArray<T>(firstItem);
        array.forEach((item) => {
            result.push(item);
        });
        return result;
    }

    protected readonly _tag: NonEmptyArrayTag = NonEmptyArrayTag.Tag;
}

export enum CompareValue {
    LT = -1,
    EQ = 0,
    GT = 1,
}

export interface Comparable<T> {
    compareTo(other: T): CompareValue;
}
