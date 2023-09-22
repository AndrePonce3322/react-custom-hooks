import CustomHooks from '../utils/customhooks.json';
import { CustomHooksType } from '../interfaces/interface';

export function GetCode(): string[] {
  const hookCategories = Object.keys(CustomHooks) as (keyof CustomHooksType)[];
  const code: any = []

  hookCategories.map((category) => {
    CustomHooks[category].map((hook) => {
      code.push(hook.codigo)
    })
  })

  return code
}