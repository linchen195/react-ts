
// 为空
export function empty(num: number):boolean {
  return typeof num === 'undefined' || num === null
}
// 千分位
export function thousands(num: number, bits: number):string {
  if (empty(num)) return '-'
  const bitNum = typeof bits === 'undefined' ? 2 : bits
  const x:number = Math.pow(10, bitNum)
  const r:number = Math.round(num * x) / x
  return r.toString().replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
}

// 百分比
export function percentage(num: number, bits: number):string {
  if (empty(num)) return '-'
  const bitNum = typeof bits === 'undefined' ? 1 : bits
  const x = Math.pow(10, bitNum)
  const r = Math.round(num * (100 * x)) / x
  return r.toFixed(bitNum) + '%'
}
