export const camelToSnakeCase = (str: string) => {
    const t = str.replace(/[A-Z]/g, (letter: string) => `_${letter.toLowerCase()}`);
    if (t.startsWith("_")) {
        return t.slice(1);
    } else {
        return t;
    }
}

