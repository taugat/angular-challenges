export class PersonUtilsDefinition {
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
export type PersonUtilsFunction = {
  [K in keyof PersonUtilsDefinition]: PersonUtilsDefinition[K] extends (
    ...args: any[]
  ) => any
    ? PersonUtilsDefinition[K]
    : never;
}[keyof PersonUtilsDefinition];

export type PersonUtilsArgs<PersonUtilsFunction> = PersonUtilsFunction extends (
  ...args: infer T extends any[]
) => any
  ? T
  : never;

export type PersonUtilsReturn<PersonUtilsFunction> =
  PersonUtilsFunction extends (...args: any) => infer T ? T : never;

export const PersonUtils = new PersonUtilsDefinition();
