import type { Figure } from '@/interfaces/figure.interface';

export const figures: Figure[] = [
    {
        name: 'Cuadrado',
        attr: [{ name: 'Lado', tag: 'c', variable: 0 }],
        form: 'Área = c x c =',
        calc: (c: number): number => c * c,
    },
    {
        name: 'Rectángulo',
        attr: [
            { name: 'Base', tag: 'b', variable: 0 },
            { name: 'Altura', tag: 'a', variable: 0 },
        ],
        form: 'Área = b x a =',
        calc: (b: number, a: number) => b * a,
    },
    {
        name: 'Círculo',
        attr: [{ name: 'Radio', tag: 'r', variable: 0 }],
        form: 'Área = pi x r x r=',
        calc: (r: number) => Math.round(Math.PI * 100 * r * r) / 100,
    },
    {
        name: 'Triángulo',
        attr: [
            { name: 'Base', tag: 'b', variable: 0 },
            { name: 'Altura', tag: 'a', variable: 0 },
        ],
        form: 'Área = b x a / 2 =',
        calc: (b: number, a: number) => Math.round(b * a * 100) / 200,
    },
];
