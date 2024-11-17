import { FiEye } from "react-icons/fi";
import { IoMdArrowUp, IoMdArrowDown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { MdPeopleOutline } from "react-icons/md";

export const DASHBOARD = [
  { id: 1, subName: 'eCommerce' },
  { id: 2, subName: 'Analytics', col: '#778295', pro: 'Pro' },
  { id: 3, subName: 'Marketing', pro: 'Pro' },
  { id: 4, subName: 'CRM', pro: 'Pro' },
  { id: 5, subName: 'Stocks', pro: 'Pro' }
]

export const TASK = [
  { id: 1, subName: 'List', pro: 'Pro' },
  { id: 2, subName: 'Kanban', pro: 'Pro' }
]

export const FORM = [
  { id: 1, subName: 'Form Element' },
  { id: 2, subName: 'Pro Form Element', pro: 'Pro' },
  { id: 3, subName: 'Form Layout' },
  { id: 4, subName: 'Pro Form Layout', pro: 'Pro' },
]

export const TABLES = [
  { id: 1, subName: 'Tables' },
  { id: 2, subName: 'Pro Tables', pro: 'Pro' },
]

export const PAGE = [
  { id: 1, subName: 'Settings' },
  { id: 2, subName: 'File Manager', pro: 'Pro' },
  { id: 3, subName: 'Data Tables', pro: 'Pro' },
  { id: 4, subName: 'Pricing Tables', pro: 'Pro' },
  { id: 5, subName: 'Error Page', pro: 'Pro' },
  { id: 6, subName: "Faq's", pro: 'Pro' },
  { id: 7, subName: 'Teams', pro: 'Pro' },
  { id: 8, subName: 'Terms & Conditions', pro: 'Pro' },
  { id: 9, subName: 'Mail Success', pro: 'Pro' },
]

export const CHART = [
  { id: 1, subName: 'Basic Chart' },
  { id: 2, subName: 'Advanced Chart', pro: 'Pro' },
]

export const UI_ELEMENTS = [
  { id: 1, subName: 'Accordian', pro: 'Pro' },
  { id: 2, subName: 'Alerts' },
  { id: 3, subName: 'Avatars', pro: 'Pro' },
  { id: 4, subName: 'List', pro: 'Pro' },
  { id: 5, subName: 'Breadcrumbs', pro: 'Pro' },
]

export const AUTHENTICATION = [
  { id: 1, subName: 'Sign In' },
  { id: 2, subName: 'Sign Up' },
  { id: 3, subName: 'Reset Password', pro: 'Pro' },
  { id: 4, subName: 'Coming Soon', pro: 'Pro' },
  { id: 5, subName: '2 Step Verification', pro: 'Pro' },
]

export const MESSAGE_PRO = [
  { id: 1, pro: '5' },
  { id: 2, pro: 'Pro' }
]

export const STATS = [
  { id: 1, logo: <FiEye />, stats: '$3.456K', total: 'Total views', percent: 0.43, arrow: <IoMdArrowUp /> },
  { id: 2, logo: <FiShoppingCart />, stats: '$45,2K', total: 'Total Profit', percent: 4.35, arrow: <IoMdArrowUp /> },
  { id: 3, logo: <LiaShoppingBagSolid />, stats: '2.450', total: 'Total Product', percent: 2.59, arrow: <IoMdArrowUp /> },
  { id: 4, logo: <MdPeopleOutline />, stats: '3.456', total: 'Total Users', percent: 0.95, arrow: <IoMdArrowDown /> }
]

export const LINE_CHART = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 100,
  },
}

export const LINE_CHART_SERIES = [
  {
    name: 'Product One',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
  },

  {
    name: 'Product Two',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
  },
]

export const BAR_CHART = {
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'bar',
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: '25%',
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: '25%',
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    fontFamily: 'Satoshi',
    fontWeight: 500,
    fontSize: '14px',

    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};

export const BAR_CHART_SERIES = [
  {
    name: 'Sales',
    data: [44, 55, 41, 67, 22, 43, 65],
  },
  {
    name: 'Revenue',
    data: [13, 23, 20, 8, 13, 27, 15],
  },
]


