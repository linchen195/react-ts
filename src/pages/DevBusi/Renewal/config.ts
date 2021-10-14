
export interface TraceItem {
  title: string,
  code: string
}
export const TRACE_OPTION: TraceItem[] = [
  {
    title: '本月总待续保单',
    code: 'a'
  },
  {
    title: '沟通中',
    code: 'b'
  },
  {
    title: '有风险',
    code: 'c'
  },
  {
    title: '会续保',
    code: 'd'
  }
]
