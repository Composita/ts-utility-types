export type Optional<T> = T | undefined;

export type Constructable0<T> = { new (): T };
export type Constructable1<T, P1> = { new (p1: P1): T };
export type Constructable2<T, P1, P2> = { new (p1: P1, p2: P2): T };
export type Constructable3<T, P1, P2, P3> = { new (p1: P1, p2: P2, p3: P3): T };
export type Constructable4<T, P1, P2, P3, P4> = { new (p1: P1, p2: P2, p3: P3, p4: P4): T };
export type Constructable5<T, P1, P2, P3, P4, P5> = { new (p1: P1, p2: P2, p3: P3, p4: P4, p5: P5): T };
export type Constructable6<T, P1, P2, P3, P4, P5, P6> = { new (p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6): T };
export type Constructable7<T, P1, P2, P3, P4, P5, P6, P7> = {
    new (p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7): T;
};
export type Constructable8<T, P1, P2, P3, P4, P5, P6, P7, P8> = {
    new (p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8): T;
};
export type Constructable9<T, P1, P2, P3, P4, P5, P6, P7, P8, P9> = {
    new (p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9): T;
};

export class Sleep {
    static async forMilliseconds(ms: number): Promise<void> {
        await new Promise<NodeJS.Timeout>((resolve) => setTimeout(resolve, ms));
    }

    static async forSeconds(s: number): Promise<void> {
        await this.forMilliseconds(s * 1000);
    }
}

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
