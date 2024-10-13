// global.d.ts
declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;  // используем 'export =' вместо 'export default'
}

declare module '*.png' {
    const content: string;
    export = content;  // используем 'export =' вместо 'export default'
}

declare module '*.svg' {
    const content: string;
    export = content;  // используем 'export =' вместо 'export default'
}
