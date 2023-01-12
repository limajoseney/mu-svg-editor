import { IAttrParops } from '../types/attrType';
import { IToolProps } from '../types/toolType';

export const attr: IAttrParops = {
    text: '',
    icon: '',
    class: '',
    style: {
        fill: '#FFFFFF',
        fill_opacity: 1,
        stroke: '#166FFF',
        stroke_width: 2,
        stroke_dasharray: 0,
        stroke_opacity: 1,
        stroke_animation: '',
    },
    transform: {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
    },
    hidden: true,
};

const dragAttr = {
    ...attr,
    style: {
        ...attr.style,
        width: 50,
        height: 50,
    }
};

export const draw: IToolProps = {
    title: '基本绘制',
    child: [
        {
            type: 'select',
            name: '选择',
            icon: 'send-outlined',
            path: 'M13 3 L40 25 L30 28 L37 40 L29 45 L22 32 L13 40 Z',
            attr: {},
            event: 1,
        },
        {
            type: 'line',
            name: '直线',
            tips: '按住 "Shift"键 绘制水平 或 垂直线条！',
            path: 'M4 20 L46 20 L46 30 L4 30 Z',
            icon: 'line-outlined',
            attr: {
                ...attr,
                style: {
                    ...attr.style,
                    // x1: 0,
                    // y1: 0,
                    x: 0,
                    y: 0,
                    x2: 50,
                    y2: 50,
                    stroke_width: 2,
                    stroke_linecap: 'butt',
                },
            },
            event: 1,
        },
        {
            type: 'pencil',
            name: '画笔',
            path: 'M6.34,35.96 V43.62 h7.65 L36.59,21.03 l-7.65,-7.65 L6.34,35.96 zM42.51,15.11 c0.79,-0.79 0.79,-2.08 0,-2.87 l-4.77,-4.77 c-0.79,-0.79 -2.08,-0.79 -2.87,0 l-3.73,3.73 l7.65,7.65 l3.73,-3.73 z',
            icon: 'stock-outlined',
            attr: {
                ...attr,
                style: {
                    ...attr.style,
                    fill: 'rgba(0%, 0%, 0%, 0)',
                    stroke_linecap: 'butt',
                },
                points: '',
            },
            event: 1,
        },
        {
            type: 'rect',
            name: '矩形',
            tips: '按住 "Shift"键 绘制正方形！',
            icon: 'border-outlined',
            path: 'M6 8 L44 8 L44 42 L6 42 Z',
            attr: {
                ...attr,
                style: {
                    ...attr.style,
                    x: 0,
                    y: 0,
                    rx: 0,
                    ry: 0,
                    width: 50,
                    height: 50,
                },
            },
            event: 1,
        },
        {
            type: 'polyline',
            name: '钢笔',
            tips: '点击鼠标键开始绘制，点击右键结束绘制！',
            icon: 'node-index-outlined',
            path: 'M21.78,3.33 c0,-0.69 1.87,0 1.87,0 V26.77 a2.83,2.51 0 1 0 1.91,0 V3.33 s1.89,-0.69 1.89,0 c0,13.19 11.38,22.62 11.38,22.62 l-7.08,15.88 h-14.28 l-7.11,-15.88 s11.38,-9.43 11.38,-22.62 zM11.97,47.12 v-3.87 h24.68 v3.87 z',
            attr: {
                ...attr,
                style: {
                    ...attr.style,
                    fill: 'rgba(0%, 0%, 0%, 0)',
                    stroke_linecap: 'butt',
                },
                points: '',
            },
            event: 1,
        },
        {
            // type: 'circle', 
            type: 'ellipse',
            name: '圆形',
            tips: '按住 "Shift"键 绘制正圆！',
            icon: 'loading3-quarters-outlined',
            path: 'M5 5 m20 0 a 20 20 0 1 0 1 0 Z',
            attr: {
                ...attr,
                style: {
                    ...attr.style,
                    cx: 0,
                    cy: 0,
                    // r: 50,
                    rx: 50,
                    ry: 50,
                },
            },
            event: 1,
        },
        {
            type: 'straw',
            name: '吸管',
            tips: '先选中要填充的组件后，再进行颜色吸取!',
            icon: 'bg-colors-outlined',
            path: 'M43.52,11.60 l-4.91,-4.91 c-0.81,-0.81 -2.14,-0.81 -2.96,0 l-6.55,6.55 l-4.05,-4.01 l-2.96,2.96 l2.98,2.98 L6.34,33.90 V43.88 h9.97 l18.72,-18.72 l2.98,2.98 l2.96,-2.96 l-4.03,-4.03 l6.55,-6.55 c0.83,-0.83 0.83,-2.16 0.02,-2.98 zM14.57,39.68 L10.54,35.65 l16.92,-16.92 l4.03,4.03 L14.57,39.68 z',
            attr: {
                ...attr,
            },
            event: 1,
        },
        {
            type: 'text',
            name: '文本',
            icon: 'font-size-outlined',
            path: 'M8 8 h35 v8 h-13 v27 h-8 v-27 h-14 Z',
            attr: {
                ...attr,
                style: {
                    ...attr.style,
                    x: 0,
                    y: 0,
                    fill: '#166FFF',
                    font_size: 12,
                    font_family: 'Microsoft YaHei',
                    stroke_width: 0,
                    text_anchor: 'middle',
                    dominant_baseline: 'auto'
                }
            },
            event: 1,
            // template: '<text x="0" y="0" :fill="attr.style.fill">{{attr.text}}</text>'
            // template: {
            //     template: '<text x="0" y="0" fill="red">文本文本文本</text>'
            // },
            template: '<text x="0" y="0" fill="red">文本文本文本</text>',
        },
    ],
    forEach: function (arg0: (o: any) => any) {
        throw new Error('Function not implemented.');
    },
    filter: function (arg0: (o: any) => boolean) {
        throw new Error('Function not implemented.');
    }
};

export const shape = {
    title: '预设形状',
    child: [
        {
            type: 'path',
            name: '几何',
            icon: '',
            path: 'M2.44,19.51 L19.24,19.51 L24.44,3.55 L29.63,19.51 L46.44,19.51 L32.84,29.38 L38.03,45.35 L24.44,35.48 L10.84,45.35 L16.03,29.38 L2.44,19.51 z',
            attr: {
                ...dragAttr,
            },
            event: 2,
            child: [
                {
                    type: 'path',
                    name: '星形',
                    icon: '',
                    path: 'M2.44,19.51 L19.24,19.51 L24.44,3.55 L29.63,19.51 L46.44,19.51 L32.84,29.38 L38.03,45.35 L24.44,35.48 L10.84,45.35 L16.03,29.38 L2.44,19.51 z',
                    attr: {
                        ...dragAttr,
                    },
                    event: 2,
                },
                {
                    type: 'path',
                    name: '三角形',
                    icon: '',
                    path: 'M2.47,44.11 L25.04,5.49 L47.61,44.11 L2.47,44.11 z',
                    attr: {
                        ...dragAttr,
                    },
                    event: 2,
                },
                {
                    type: 'path',
                    name: '直角形',
                    icon: '',
                    path: 'M3.59,46.31 L3.59,3.31 L46.59,46.31 L3.59,46.31 z',
                    attr: {
                        ...dragAttr,
                    },
                    event: 2,
                },
                {
                    type: 'path',
                    name: '菱形',
                    icon: '',
                    path: 'M2.63,25.34 L24.63,3.34 L46.63,25.34 L24.63,47.34 L2.63,25.34 z',
                    attr: {
                        ...dragAttr,
                    },
                    event: 2,
                },
                {
                    type: 'path',
                    name: '五边形',
                    icon: '',
                    path: 'M3.60,20.22 L25.100605930486314,4.58 L46.60,20.22 L38.38,45.53 L11.81,45.53 L3.60,20.22 z',
                    attr: {
                        ...dragAttr,
                    },
                    event: 2,
                },
                {
                    type: 'path',
                    name: '六边形',
                    icon: '',
                    path: 'M2.86,25.23 L12.40,6.16 L37.82,6.16 L47.36,25.23 L37.82,44.30 L12.40,44.30 L2.86,25.23 z',
                    attr: {
                        ...dragAttr,
                    },
                    event: 2,
                },
            ],
        },
        {
            type: 'path',
            name: '物体',
            icon: '',
            path: 'M31.41,6.53 C30.36,9.11 27.84,10.94 24.89,10.94 C21.93,10.94 19.41,9.11 18.36,6.53 L2.39,13.31 L6.88,23.90 L11.82,21.81 L11.82,43.40 L38.13,43.40 L38.13,21.88 L42.89,23.90 L47.39,13.31 L31.41,6.53 L31.41,6.53 z',
            attr: {
                ...dragAttr,
            },
            event: 2,
            child: [
                {
                    type: 'path',
                    name: '衣物',
                    icon: '',
                    path: 'M31.41,6.53 C30.36,9.11 27.84,10.94 24.89,10.94 C21.93,10.94 19.41,9.11 18.36,6.53 L2.39,13.31 L6.88,23.90 L11.82,21.81 L11.82,43.40 L38.13,43.40 L38.13,21.88 L42.89,23.90 L47.39,13.31 L31.41,6.53 L31.41,6.53 z',
                    attr: {
                        ...dragAttr,
                    },
                    event: 2,
                },
            ],
        },
        {
            type: 'path',
            name: '箭头',
            icon: '',
            path: 'M23.15,36.77 L30.41,29.49 L16.38,29.49 L2.36,29.49 L2.36,24.99 L2.36,20.48 L16.22,20.48 C23.85,20.48 30.09,20.25 30.09,19.97 C30.09,19.69 27.05,16.42 23.34,12.69 L16.59,5.92 L22.83,5.92 L29.06,5.92 L38.59,15.46 L48.11,25.00 L38.57,34.53 L29.03,44.05 L22.46,44.05 L15.90,44.05 L23.15,36.77 L23.15,36.77 z',
            attr: {
                ...dragAttr,
            },
            event: 2,
            child: [
                {
                    type: 'path',
                    name: '向右',
                    icon: '',
                    path: 'M23.15,36.77 L30.41,29.49 L16.38,29.49 L2.36,29.49 L2.36,24.99 L2.36,20.48 L16.22,20.48 C23.85,20.48 30.09,20.25 30.09,19.97 C30.09,19.69 27.05,16.42 23.34,12.69 L16.59,5.92 L22.83,5.92 L29.06,5.92 L38.59,15.46 L48.11,25.00 L38.57,34.53 L29.03,44.05 L22.46,44.05 L15.90,44.05 L23.15,36.77 L23.15,36.77 z',
                    attr: {
                        ...dragAttr,
                    },
                    event: 2,
                },
            ],
        },
        {
            type: 'path',
            name: '标志',
            icon: '',
            path: 'M30.05,17.37 L25.15,16.50 L26.96,15.56 C27.95,15.04 28.85,14.54 28.95,14.45 C29.22,14.21 25.90,9.08 25.49,9.09 C25.30,9.09 24.03,11.08 22.65,13.50 C21.27,15.94 19.89,17.81 19.56,17.67 C15.69,16.11 12.53,14.53 12.538,14.15 C12.53,13.89 13.75,11.61 15.23,9.07 L17.93,4.45 L25.296,4.45 L32.65,4.45 L34.57,7.49 L36.49,10.52 L38.50,9.50 C39.88,8.78 40.41,8.68 40.22,9.167 C38.51,13.40 35.96,18.35 35.51,18.30 C35.20,18.26 32.74,17.85 30.05,17.37 L30.05,17.37 zM7.22,36.28 C5.36,33.08 3.69,30.07 3.51,29.61 C3.33,29.13 3.86,27.44 4.73,25.71 L6.28,22.66 L4.70,21.73 C2.60,20.49 3.38,20.10 8.95,19.65 L13.35,19.28 L15.07,23.84 C16.02,26.35 16.92,28.73 17.07,29.12 C17.22,29.54 16.48,29.26 15.33,28.48 L13.32,27.11 L11.92,29.82 C11.15,31.31 10.51,32.69 10.500,32.89 C10.48,33.100 12.85,33.33 15.756,33.41 L21.03,33.55 L21.38,37.42 C21.57,39.54 21.68,41.31 21.63,41.34 C21.59,41.38 19.09,41.57 16.08,41.76 L10.61,42.11 L7.22,36.28 L7.22,36.28 zM28.07,41.95 C24.87,37.12 24.81,37.48 29.57,32.27 L32.62,28.92 L32.29,31.37 L31.97,33.81 L35.39,33.81 C37.27,33.81 38.81,33.66 38.81,33.48 C38.81,33.29 37.76,31.23 36.49,28.89 C35.21,26.57 34.17,24.44 34.18,24.20 C34.19,23.66 40.88,19.23 41.19,19.54 C41.32,19.67 42.56,21.91 43.95,24.53 L46.48,29.28 L43.08,34.77 C41.21,37.78 39.41,40.55 39.08,40.91 C38.76,41.27 36.93,41.70 35.03,41.88 C31.40,42.22 31.50,42.14 30.97,45.24 C30.88,45.78 29.79,44.55 28.07,41.95 L28.07,41.95 z',
            attr: {
                ...dragAttr,
            },
            event: 2,
            child: [
                {
                    type: 'path',
                    name: '回收利用',
                    icon: '',
                    path: 'M30.05,17.37 L25.15,16.50 L26.96,15.56 C27.95,15.04 28.85,14.54 28.95,14.45 C29.22,14.21 25.90,9.08 25.49,9.09 C25.30,9.09 24.03,11.08 22.65,13.50 C21.27,15.94 19.89,17.81 19.56,17.67 C15.69,16.11 12.53,14.53 12.538,14.15 C12.53,13.89 13.75,11.61 15.23,9.07 L17.93,4.45 L25.296,4.45 L32.65,4.45 L34.57,7.49 L36.49,10.52 L38.50,9.50 C39.88,8.78 40.41,8.68 40.22,9.167 C38.51,13.40 35.96,18.35 35.51,18.30 C35.20,18.26 32.74,17.85 30.05,17.37 L30.05,17.37 zM7.22,36.28 C5.36,33.08 3.69,30.07 3.51,29.61 C3.33,29.13 3.86,27.44 4.73,25.71 L6.28,22.66 L4.70,21.73 C2.60,20.49 3.38,20.10 8.95,19.65 L13.35,19.28 L15.07,23.84 C16.02,26.35 16.92,28.73 17.07,29.12 C17.22,29.54 16.48,29.26 15.33,28.48 L13.32,27.11 L11.92,29.82 C11.15,31.31 10.51,32.69 10.500,32.89 C10.48,33.100 12.85,33.33 15.756,33.41 L21.03,33.55 L21.38,37.42 C21.57,39.54 21.68,41.31 21.63,41.34 C21.59,41.38 19.09,41.57 16.08,41.76 L10.61,42.11 L7.22,36.28 L7.22,36.28 zM28.07,41.95 C24.87,37.12 24.81,37.48 29.57,32.27 L32.62,28.92 L32.29,31.37 L31.97,33.81 L35.39,33.81 C37.27,33.81 38.81,33.66 38.81,33.48 C38.81,33.29 37.76,31.23 36.49,28.89 C35.21,26.57 34.17,24.44 34.18,24.20 C34.19,23.66 40.88,19.23 41.19,19.54 C41.32,19.67 42.56,21.91 43.95,24.53 L46.48,29.28 L43.08,34.77 C41.21,37.78 39.41,40.55 39.08,40.91 C38.76,41.27 36.93,41.70 35.03,41.88 C31.40,42.22 31.50,42.14 30.97,45.24 C30.88,45.78 29.79,44.55 28.07,41.95 L28.07,41.95 z',
                    attr: {
                        ...dragAttr,
                    },
                    event: 2,
                },
            ],
        },
        {
            type: 'path',
            name: '棋牌',
            icon: '',
            path: 'M16.92,44.08 C19.54,41.63 21.46,38.52 23.06,35.38 C24.04,34.12 23.11,33.02 21.78,34.09 C18.35,36.31 13.67,37.07 9.95,35.04 C5.75,32.94 3.86,27.93 4.81,23.56 C5.42,19.14 8.74,15.67 12.34,13.118 C16.48,10.31 20.95,7.85 24.74,4.52 C26.32,4.55 27.51,6.96 29.21,7.59 C33.73,10.85 39.08,13.25 42.63,17.61 C44.43,20.40 45.45,23.16 45.57,26.18 C45.02,30.29 42.50,34.61 38.15,35.78 C34.39,36.88 30.52,35.48 27.24,33.70 C26.84,33.62 25.37,32.50 25.95,33.37 C27.91,37.27 30.06,41.14 33.17,44.30 C33.35,44.70 34.79,45.65 34.02,45.64 C27.64,45.64 21.26,45.64 14.87,45.64 C15.55,45.12 16.24,44.60 16.92,44.08 L16.92,44.08 z',
            attr: {
                ...dragAttr,
            },
            event: 2,
            child: [
                {
                    type: 'path',
                    name: '桃心',
                    icon: '',
                    path: 'M16.92,44.08 C19.54,41.63 21.46,38.52 23.06,35.38 C24.04,34.12 23.11,33.02 21.78,34.09 C18.35,36.31 13.67,37.07 9.95,35.04 C5.75,32.94 3.86,27.93 4.81,23.56 C5.42,19.14 8.74,15.67 12.34,13.118 C16.48,10.31 20.95,7.85 24.74,4.52 C26.32,4.55 27.51,6.96 29.21,7.59 C33.73,10.85 39.08,13.25 42.63,17.61 C44.43,20.40 45.45,23.16 45.57,26.18 C45.02,30.29 42.50,34.61 38.15,35.78 C34.39,36.88 30.52,35.48 27.24,33.70 C26.84,33.62 25.37,32.50 25.95,33.37 C27.91,37.27 30.06,41.14 33.17,44.30 C33.35,44.70 34.79,45.65 34.02,45.64 C27.64,45.64 21.26,45.64 14.87,45.64 C15.55,45.12 16.24,44.60 16.92,44.08 L16.92,44.08 z',
                    attr: {
                        ...dragAttr,
                    },
                    event: 2,
                },
            ],
        },
        {
            type: 'path',
            name: '音乐',
            icon: '',
            path: 'M15.50,46.72 C13.62,46.41 11.88,44.68 12.24,42.67 C12.42,40.47 14.17,38.69 15.93,37.52 C18.28,35.92 21.48,35.33 24.08,36.71 C24.24,25.58 24.15,14.46 24.17,3.33 C25.80,2.94 25.28,5.07 25.65,6.06 C26.09,8.97 27.95,11.25 29.89,13.28 C32.30,15.84 34.85,18.55 35.64,22.10 C36.48,26.22 35.12,30.43 33.35,34.11 C33.22,35.30 31.06,37.01 32.09,34.87 C33.83,31.22 35.26,27.01 34.08,22.97 C32.95,18.93 29.42,15.56 25.23,14.95 C25.20,23.48 25.30,32.00 25.13,40.52 C24.72,43.03 22.54,44.90 20.35,45.96 C18.84,46.62 17.14,47.01 15.50,46.72 L15.50,46.72 z',
            attr: {
                ...dragAttr,
            },
            event: 2,
            child: [
                {
                    type: 'path',
                    name: 'Note_8th',
                    icon: '',
                    path: 'M15.50,46.72 C13.62,46.41 11.88,44.68 12.24,42.67 C12.42,40.47 14.17,38.69 15.93,37.52 C18.28,35.92 21.48,35.33 24.08,36.71 C24.24,25.58 24.15,14.46 24.17,3.33 C25.80,2.94 25.28,5.07 25.65,6.06 C26.09,8.97 27.95,11.25 29.89,13.28 C32.30,15.84 34.85,18.55 35.64,22.10 C36.48,26.22 35.12,30.43 33.35,34.11 C33.22,35.30 31.06,37.01 32.09,34.87 C33.83,31.22 35.26,27.01 34.08,22.97 C32.95,18.93 29.42,15.56 25.23,14.95 C25.20,23.48 25.30,32.00 25.13,40.52 C24.72,43.03 22.54,44.90 20.35,45.96 C18.84,46.62 17.14,47.01 15.50,46.72 L15.50,46.72 z',
                    attr: {
                        ...dragAttr,
                    },
                    event: 2,
                },
            ],
        },
        {
            type: 'path',
            name: '流程图',
            icon: '',
            path: 'M4.75,10.26 C18.32,-5.71 31.90,26.24 45.47,10.26 L45.47,39.03 C31.90,55.01 18.32,23.05 4.75,39.03 L4.75,10.26 z',
            attr: {
                ...dragAttr,
            },
            event: 2,
            child: [
                {
                    type: 'path',
                    name: '波浪框',
                    icon: '',
                    path: 'M4.75,10.26 C18.32,-5.71 31.90,26.24 45.47,10.26 L45.47,39.03 C31.90,55.01 18.32,23.05 4.75,39.03 L4.75,10.26 z',
                    attr: {
                        ...dragAttr,
                    },
                    event: 2,
                },
            ],
        },
        {
            type: 'path',
            name: '对话框',
            icon: '',
            path: 'M4.35,10.41 L4.35,10.41 C4.35,7.72 6.47,5.55 9.10,5.55 L11.24,5.55 L11.24,5.55 L21.60,5.55 L41.01,5.55 C42.27,5.55 43.48,6.06 44.36,6.97 C45.25,7.88 45.75,9.12 45.75,10.41 L45.75,22.55 L45.75,22.55 L45.75,29.84 L45.75,29.84 C45.75,32.52 43.63,34.70 41.01,34.70 L21.60,34.70 L8.08,47.05 L11.25,34.70 L9.10,34.70 C6.47,34.70 4.35,32.52 4.35,29.84 L4.35,29.84 L4.35,22.55 L4.35,22.55 L4.35,10.41 z',
            attr: {
                ...dragAttr,
            },
            event: 2,
            child: [
                {
                    type: 'path',
                    name: '圆角框',
                    icon: '',
                    path: 'M4.35,10.41 L4.35,10.41 C4.35,7.72 6.47,5.55 9.10,5.55 L11.24,5.55 L11.24,5.55 L21.60,5.55 L41.01,5.55 C42.27,5.55 43.48,6.06 44.36,6.97 C45.25,7.88 45.75,9.12 45.75,10.41 L45.75,22.55 L45.75,22.55 L45.75,29.84 L45.75,29.84 C45.75,32.52 43.63,34.70 41.01,34.70 L21.60,34.70 L8.08,47.05 L11.25,34.70 L9.10,34.70 C6.47,34.70 4.35,32.52 4.35,29.84 L4.35,29.84 L4.35,22.55 L4.35,22.55 L4.35,10.41 z',
                    attr: {
                        ...dragAttr,
                    },
                    event: 2,
                },
            ],
        },
        {
            type: 'path',
            name: '天气时间',
            icon: '',
            path: 'M47.12,25.15 L38.17,28.34 L38.17,21.98 L47.12,25.15 zM40.62,9.48 L36.55,18.06 L32.05,13.56 L40.62,9.48 zM24.95,2.99 L28.13,11.94 L21.77,11.94 L24.95,2.99 zM9.28,9.48 L17.85,13.56 L13.35,18.06 L9.28,9.48 zM2.79,25.15 L11.73,21.98 L11.73,28.34 L2.79,25.15 zM9.28,40.83 L13.35,32.25 L17.85,36.75 L9.28,40.83 L9.28,40.83 zM24.95,47.32 L21.77,38.38 L28.13,38.38 L24.95,47.32 zM40.62,40.83 L32.05,36.75 L36.55,32.26 L40.62,40.83 zM13.87,25.15 L13.87,25.15 C13.87,19.03 18.83,14.07 24.95,14.07 C31.07,14.07 36.04,19.03 36.04,25.15 C36.04,31.28 31.07,36.24 24.95,36.24 C18.83,36.24 13.87,31.28 13.87,25.15 L13.87,25.15 z',
            attr: {
                ...dragAttr,
            },
            event: 2,
            child: [
                {
                    type: 'path',
                    name: '晴天',
                    icon: '',
                    path: 'M47.12,25.15 L38.17,28.34 L38.17,21.98 L47.12,25.15 zM40.62,9.48 L36.55,18.06 L32.05,13.56 L40.62,9.48 zM24.95,2.99 L28.13,11.94 L21.77,11.94 L24.95,2.99 zM9.28,9.48 L17.85,13.56 L13.35,18.06 L9.28,9.48 zM2.79,25.15 L11.73,21.98 L11.73,28.34 L2.79,25.15 zM9.28,40.83 L13.35,32.25 L17.85,36.75 L9.28,40.83 L9.28,40.83 zM24.95,47.32 L21.77,38.38 L28.13,38.38 L24.95,47.32 zM40.62,40.83 L32.05,36.75 L36.55,32.26 L40.62,40.83 zM13.87,25.15 L13.87,25.15 C13.87,19.03 18.83,14.07 24.95,14.07 C31.07,14.07 36.04,19.03 36.04,25.15 C36.04,31.28 31.07,36.24 24.95,36.24 C18.83,36.24 13.87,31.28 13.87,25.15 L13.87,25.15 z',
                    attr: {
                        ...dragAttr,
                    },
                    event: 2,
                },
            ],
        },
        {
            type: 'path',
            name: '交互界面',
            icon: '',
            path: 'M32.64,18.59 C32.64,18.59 34.02,12.54 32.64,10.49 C31.27,8.44 30.72,7.08 27.69,6.10 S25.76,5.32 23.56,5.42 C21.36,5.51 19.53,6.78 19.53,7.46 C19.53,7.46 18.15,7.56 17.60,8.15 C17.05,8.73 16.13,11.47 16.13,12.15 S16.59,17.42 17.05,18.40 L16.50,18.59 C16.05,24.26 18.34,24.94 18.34,24.94 C19.16,30.21 19.99,27.97 19.99,29.33 S19.16,30.21 19.16,30.21 S18.43,32.36 16.60,33.14 C14.76,33.92 4.58,38.12 3.75,39.00 C2.92,39.88 3.02,43.98 3.02,43.98 L46.68,43.98 C46.68,43.98 46.77,39.88 45.95,39.00 C45.12,38.12 34.94,33.92 33.10,33.14 C31.27,32.36 30.53,30.21 30.53,30.21 S29.71,30.70 29.71,29.33 S30.53,30.21 31.36,24.94 C31.36,24.94 33.65,24.26 33.20,18.59 L32.64,18.59 z',
            attr: {
                ...dragAttr,
            },
            event: 2,
            child: [
                {
                    type: 'path',
                    name: '用户',
                    icon: '',
                    path: 'M32.64,18.59 C32.64,18.59 34.02,12.54 32.64,10.49 C31.27,8.44 30.72,7.08 27.69,6.10 S25.76,5.32 23.56,5.42 C21.36,5.51 19.53,6.78 19.53,7.46 C19.53,7.46 18.15,7.56 17.60,8.15 C17.05,8.73 16.13,11.47 16.13,12.15 S16.59,17.42 17.05,18.40 L16.50,18.59 C16.05,24.26 18.34,24.94 18.34,24.94 C19.16,30.21 19.99,27.97 19.99,29.33 S19.16,30.21 19.16,30.21 S18.43,32.36 16.60,33.14 C14.76,33.92 4.58,38.12 3.75,39.00 C2.92,39.88 3.02,43.98 3.02,43.98 L46.68,43.98 C46.68,43.98 46.77,39.88 45.95,39.00 C45.12,38.12 34.94,33.92 33.10,33.14 C31.27,32.36 30.53,30.21 30.53,30.21 S29.71,30.70 29.71,29.33 S30.53,30.21 31.36,24.94 C31.36,24.94 33.65,24.26 33.20,18.59 L32.64,18.59 z',
                    attr: {
                        ...dragAttr,
                    },
                    event: 2,
                },
            ],
        },
    ],
};

export const topo: IToolProps = {
    title: '拓扑组件',
    child: [
        {
            type: 'image',
            name: '互联网',
            icon: 'internet',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
            // template: '<image href="icon/tool/internet.webp" width="50" height="50"></image>',
            // props: [
            //     'props_attr'
            // ],
        },
        {
            type: 'image',
            name: '访问人',
            icon: 'visitor',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: 'PC端',
            icon: 'computer',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '移动端',
            icon: 'phone',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '交换机',
            icon: 'switch',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '核心交换机',
            icon: 'core-switch',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '防火墙',
            icon: 'firewall',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '流量监控',
            icon: 'flow-monitor',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '服务器',
            icon: 'server',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '虚拟机',
            icon: 'virtual-machine',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '负载均衡',
            icon: 'load-balancing',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '信号链路',
            icon: 'signal-link',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '系统',
            icon: 'system',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '传统设备',
            icon: 'tradition-device',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '插头',
            icon: 'plug',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '电池',
            icon: 'battery',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '服务',
            icon: 'serve',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '数据库',
            icon: 'data-base',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '缓存',
            icon: 'redis',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '存储',
            icon: 'storage',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '信号流',
            icon: 'signal-flow',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '集群',
            icon: 'colony',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '单体',
            icon: 'monomer',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
        {
            type: 'image',
            name: '冗余组',
            icon: 'redundancy-group',
            path: '',
            attr: {
                ...dragAttr,
            },
            event: 2,
        },
    ],
    forEach: function (arg0: (o: any) => any) {
        throw new Error('Function not implemented.');
    },
    filter: function (arg0: (o: any) => boolean) {
        throw new Error('Function not implemented.');
    }
};

export default [
    draw,
    shape,
    topo,
    {
        title: '其他控件',
        child: [

        ],
    },
];