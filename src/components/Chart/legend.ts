
export const initLegend = (svg: any, data: any[], colors: string[]) => {
  //绘制图例区域
  const legendArea = svg.append('g')
    .attr('transform', 'translate(0, 270)')

  let com_x = 0
  //绑定数据，设置每个图例的位置
  const legend = legendArea.selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('transform', function (d: any) {
      const x = com_x

      const labelWidth = d.data.label.length * 11 + 12
      com_x = com_x + labelWidth + 20
      return `translate(${ x },0)`
    })
  //添加图例的矩形色块
  legend.append('rect')
    .attr('width', 6)
    .attr('height', 6)
    .attr('rx', 3)
    .attr('ry', 3)
    .attr('y', -7)
    .style('fill', function (d: any, i: number) {
      return colors[i]
    })

  //添加图例文字
  legend.append('text')
    .attr('x', 10)
    .style('fill', '#2c3542')
    .style('font-size', '.11rem')
    .text(function (d: any) {
      return d.data.label
    })
}
