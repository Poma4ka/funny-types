
export type Join<Array extends string[], Separator extends string> =
    Array extends []
        ? ""
        : Array extends [string]
        ? Array[0]
        : Array extends [string,...infer NewArray]
            ? NewArray extends string[]
                ?`${Array[0]}${Separator}${Join<NewArray, Separator>}`
                : never
            : never;


export type Trim<String extends string> =
    String extends " "
        ? ""
        : String extends (` ${infer NewString}` | `\t${infer NewString}` | `\n${infer NewString}`)
        ? Trim<NewString>
        : String extends (`${infer NewString} ` | `${infer NewString}\t` | `${infer NewString}\n`)
                ? Trim<NewString>
                : String;
