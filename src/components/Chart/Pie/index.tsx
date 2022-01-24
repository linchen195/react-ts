
import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

import { percentage } from '@/utils/num'
import { initLegend, computedPercent } from './util'

interface Props {
  className?: string,
  loading?: boolean,
  data?: any[],
}

const Pie: React.FC<Props> = (props) => {
  const colors: string[] = ['#5b8ff9', '#5ad8a6', '#f6bd16', '#e86452', '#945fb9', '#5d7092']

  let width = 0
  const height = 300
  const outerRadius = 75
  const innerRadius = 45
  const pivotRadius = 100

  const pie = useRef<HTMLDivElement>(null)

  let slices: any[] = []
  const endPoints: any[] = []

  useEffect(() => {
    if (pie.current) {
      width = pie.current.offsetWidth
    }

    const generator = d3.pie().sort(null).value((d: any) => {
      return d.value
    })
    const data = computedPercent(props.data || [])
    slices = generator(data)

    const svg = d3
      .select(pie.current)
      .append('svg')
      .attr('width', '100%')
      .attr('height', height)

    const innerArc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)

    initCircle(svg, innerArc) // 圆
    initLines(svg) // 连接线
    initLabels(svg) // 文字
    initLegend(svg, slices, colors) // 图例
  }, [])

  // 初始化饼
  const initCircle = (svg: any, innerArc: any) => {
    svg.append('g').attr('class', 'slices')
    const slice = svg.select('.slices').selectAll('path').data(slices)
    slice.enter()
      .append('path')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)
      .attr('d', (d: any, i: number) => innerArc(slices[i]))
      .attr('fill', (d: any, i: number) => colors[i % (colors.length)])
    slice.exit().remove()
  }

  // 初始化链接线
  const initLines = (svg: any) => {
    svg.append('g').attr('class', 'lines')

    const pivotArc = d3.arc().innerRadius(outerRadius).outerRadius(pivotRadius)
    const line = svg.select('.lines').selectAll('polyline').data(slices)
    line.enter()
      .append('polyline')
      .attr('points', (d: any, i: number) => {
        const slice = slices[i]

        const innerCentroid = d3.arc().innerRadius(outerRadius).outerRadius(outerRadius).centroid(slice)

        const x1 = innerCentroid[0] + width / 2
        const y1 = innerCentroid[1] + height / 2

        const pivotPoint = pivotArc.centroid(slice)
        const x2 = pivotPoint[0] + width / 2
        const y2 = pivotPoint[1] + height / 2

        const midAngle = getMidAngle(slice)
        const x3 = x2 + (midAngle > Math.PI ? -100 : 100)
        const y3 = y2

        endPoints[i] = [x2, y3]

        return `${x1},${y1} ${x2},${y2} ${x3},${y3}`
      })
      .attr('fill', 'none')
      .attr('stroke', '#d4dbe2')

    line.exit().remove()
    // arc
    //   .append('path')
    //   .attr('fill', function(d: any, i: number) {
    //     return colors[i]
    //   })
    //   .attr('d', function(d: any) {
    //     return pivotArc(d) // 使用弧生成器获取路径
    //   })
    // arc
    //   .append('line')
    //   .attr('stroke', 'black')
    //   .attr('x1', (d: any) => {
    //     return pivotArc.centroid(d)[0] * 2
    //   })
    //   .attr('y1', (d: any) => {
    //     return pivotArc.centroid(d)[1] * 2
    //   })
    //   .attr('x2', (d: any) => {
    //     return pivotArc.centroid(d)[0] * 2.2
    //   })
    //   .attr('y2', (d: any) => {
    //     return pivotArc.centroid(d)[1] * 2.2
    //   })
    // arc
    //   .append('line')
    //   .style('stroke', 'black')
    //   .each((d: any) => {
    //     d.textLine = {
    //       x1: 0,
    //       y1: 0,
    //       x2: 0,
    //       y2: 0,
    //     }
    //   })
    //   .attr('x1', (d: any) => {
    //     d.textLine.x1 = pivotArc.centroid(d)[0] * 2.2
    //     return d.textLine.x1
    //   })
    //   .attr('y1', (d: any) => {
    //     d.textLine.y1 = pivotArc.centroid(d)[1] * 2.2
    //     return d.textLine.y1
    //   })
    //   .attr('x2', (d: any) => {
    //     // console.log("d.data[0]:  "+d.data[0]);//产商名
    //     const strLen = getPixelLength(d.data[0].value, 11) * 1.5
    //     const bx = pivotArc.centroid(d)[0] * 2.2
    //     d.textLine.x2 = bx >= 0 ? bx + strLen : bx - strLen
    //     return d.textLine.x2
    //   })
    //   .attr('y2', (d: any) => {
    //     d.textLine.y2 = pivotArc.centroid(d)[1] * 2.2
    //     return d.textLine.y2
    //   })
  }
  // const getPixelLength = (str: any, fontsize: any) => {
  //   let curLen = 0
  //   for (let i = 0; i < str.length; i += 1) {
  //     const code = str.charCodeAt(i)
  //     const pixelLen = code > 255 ? fontsize : fontsize / 2
  //     curLen += pixelLen
  //   }
  //   return curLen
  // }
  // 初始化文字
  const initLabels = (svg: any) => {
    svg.append('g').attr('class', 'labels')
    const label = svg.select('.labels').selectAll('text').data(slices)
    label.enter()
      .append('text')
      .text((d: any) => {
        return `${percentage(d.data.percentage)}（${d.value}）`
      })
      .attr('transform', (d: any, i: number) => {
        const x = endPoints[i][0] + (getMidAngle(d) > Math.PI ? -10 : 20)
        const y = endPoints[i][1] - 5

        return `translate(${x}, ${y})`
      })
      .attr('text-anchor', (d: any) => {
        const midAngle = getMidAngle(d)
        return midAngle > Math.PI ? 'end' : 'start'
      })
      .attr('fill', '#2c3542')
      .style('font-size', '.12rem')

    label.exit().remove()
  }

  // 左半边还是右半边
  const getMidAngle = (d: any) => {
    return (d.endAngle + d.startAngle) / 2
  }

  return (
    <div className={props.className} ref={pie}></div>
  )
}

Pie.defaultProps = {
  data: []
}

export default Pie
