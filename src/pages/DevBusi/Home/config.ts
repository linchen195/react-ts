
export interface PanelItem {
  title: string,
  icon: string,
  path: string
}
export const PANELS: PanelItem[] = [
  {
    title: '活动追踪量',
    icon: require('@/assets/dev_busi/panel_active.png'),
    path: ''
  },
  {
    title: '续保追踪',
    icon: require('@/assets/dev_busi/panel_renewal.png'),
    path: ''
  },
  {
    title: '运营提醒',
    icon: require('@/assets/dev_busi/panel_operate.png'),
    path: ''
  }
]
