export interface Figure {
    name: string;
    attr: Attr[];
    form: string;
    calc: (...values: number[]) => number;
}

interface Attr {
    name: string;
    tag: string;
    variable: number;
}
