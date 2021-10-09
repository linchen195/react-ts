
// 是否不为空
export function notEmpty(str:string):boolean {
  return (typeof str !== 'undefined' && str !== null && str !== '')
}
