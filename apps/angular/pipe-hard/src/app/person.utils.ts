class PersonUtilsDefinition {
  showName(name: string, index: number) {
    // very heavy computation
    return `${name} - ${index}`;
  }

  isAllowed(age: number, isFirst: boolean, activityAge: number) {
    if (isFirst) {
      return 'always allowed';
    } else {
      return age > activityAge ? 'allowed' : 'declined';
    }
  }
}

type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

export type PersonUtilsFunctionName = {
  [K in keyof PersonUtilsDefinition]: PersonUtilsDefinition[K] extends (
    ...args: any[]
  ) => any
    ? K
    : never;
}[keyof PersonUtilsDefinition];

export type PersonUtilsArgs<F extends keyof PersonUtilsDefinition> =
  PersonUtilsDefinition[F] extends (...args: infer T extends any[]) => any
    ? T
    : never;

export type PersonUtilsReturn<F extends keyof PersonUtilsDefinition> =
  PersonUtilsDefinition[F] extends (...args: any) => infer T ? T : never;

export const PersonUtils = new PersonUtilsDefinition();
