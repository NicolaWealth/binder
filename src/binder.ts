export const binderFactory = (bindNorm: (bind: string) => string = x => x) =>
  ({value, binds}: { value: string, binds?: Record<string, string> }) =>
    value.replace(/\$\{([^{}]+?)}/g, (_, ...g) => {
      const bindName = bindNorm(g[0]);
      return binds?.[bindName] ?? `?{${bindName}}`;
    });

export type binderType = ReturnType<typeof binderFactory>;
