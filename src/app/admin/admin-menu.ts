import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Аналитика',
    icon: 'pie-chart-outline',
    children: [
    ],
  },
  {
    title: 'Мероприятия',
    icon: 'grid-outline',
    link: '/admin/tables/tree-grid',
    // children: [
    //   {
    //     title: 'Smart Table',
    //     link: '/admin/tables/smart-table',
    //   },
    //   {
    //     title: 'Tree Grid',
    //     link: '/admin/tables/tree-grid',
    //   },
    // ],
  },
];
