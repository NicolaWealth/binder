export const binderFactory = (bindNormalizer: (bind: string) => string = x => x) =>
  ({value, binds}: { value: string, binds?: Record<string, string> }) =>
    value.replace(/\$\{([^{}]+?)}/g, (_, ...g) => {
      const bindName = bindNormalizer(g[0]);
      return binds?.[bindName] ?? `?{${bindName}}`;
    });

export type binderType = ReturnType<typeof binderFactory>;
