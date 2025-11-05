type UnwrapArray<T> = T extends (infer U)[] ? U : T
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T
type DeepUnwrap<T> = T extends Promise<infer U> ? DeepUnwrap<U> :
                    T extends (infer U)[] ? DeepUnwrap<U> : T;

type A = UnwrapArray<string[]>;        // string
type B = UnwrapPromise<Promise<number>>; // number
type C = DeepUnwrap<Promise<string[]>>;  // string
type D = DeepUnwrap<Promise<Promise<number[]>>>; // number
