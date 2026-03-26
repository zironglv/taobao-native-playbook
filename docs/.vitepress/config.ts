import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '淘宝桌面版×玩虾集',
  description: 'OpenClaw 案例库 - 让 AI 助手帮你玩转淘宝',
  lang: 'zh-CN',
  base: '/taobao-native-playbook/',
  
  head: [
    ['meta', { name: 'theme-color', content: '#ff6b00' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '淘宝桌面版×玩虾集',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '案例库', link: '/cases/daily-shopping/price-monitor' },
      { text: '快速上手', link: '/getting-started' },
      { text: 'GitHub', link: 'https://github.com/zironglv/taobao-native-playbook' }
    ],

    sidebar: {
      '/cases/': [
        {
          text: '🛒 日常购物',
          collapsed: false,
          items: [
            { text: '价格监控提醒', link: '/cases/daily-shopping/price-monitor' },
            { text: '智能比价', link: '/cases/daily-shopping/smart-compare' },
            { text: '购物车智能清结算', link: '/cases/daily-shopping/cart-checkout' },
            { text: '凑单计算器', link: '/cases/daily-shopping/coupon-calculator' }
          ]
        },
        {
          text: '📦 订单管理',
          collapsed: false,
          items: [
            { text: '批量催发货', link: '/cases/order-management/batch-ship-reminder' },
            { text: '物流追踪汇总', link: '/cases/order-management/logistics-tracker' },
            { text: '自动确认收货', link: '/cases/order-management/auto-confirm' },
            { text: '批量开发票', link: '/cases/order-management/batch-invoice' }
          ]
        },
        {
          text: '🎁 送礼场景',
          collapsed: false,
          items: [
            { text: '生日礼物管家', link: '/cases/gift-scenario/birthday-gift' },
            { text: '节日送礼攻略', link: '/cases/gift-scenario/holiday-gift' }
          ]
        },
        {
          text: '👔 穿搭助手',
          collapsed: false,
          items: [
            { text: '衣橱数字化', link: '/cases/style-assistant/digital-wardrobe' },
            { text: '每日穿搭推荐', link: '/cases/style-assistant/daily-outfit' },
            { text: '逛街参谋', link: '/cases/style-assistant/shopping-advisor' }
          ]
        },
        {
          text: '📊 智能分析',
          collapsed: false,
          items: [
            { text: '月度消费账单', link: '/cases/smart-analysis/monthly-bill' },
            { text: '购物习惯洞察', link: '/cases/smart-analysis/shopping-insights' }
          ]
        },
        {
          text: '🏠 生活服务',
          collapsed: false,
          items: [
            { text: '囤货提醒', link: '/cases/life-service/stock-reminder' },
            { text: '智能补货', link: '/cases/life-service/smart-reorder' }
          ]
        },
        {
          text: '🏭 采购提效',
          collapsed: false,
          items: [
            { text: '表格批量加购', link: '/cases/procurement/batch-add-cart' },
            { text: '寻源比价', link: '/cases/procurement/source-compare' },
            { text: '供应商管理', link: '/cases/procurement/supplier-management' }
          ]
        }
      ],
      '/': [
        {
          text: '开始使用',
          items: [
            { text: '快速上手', link: '/getting-started' }
          ]
        },
        {
          text: '案例库',
          items: [
            { text: '日常购物', link: '/cases/daily-shopping/price-monitor' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zironglv/taobao-native-playbook' }
    ],

    footer: {
      message: '淘宝桌面版×玩虾集 - 让 AI 助手帮你玩转淘宝',
      copyright: 'Copyright © 2024-present OpenClaw Team'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索案例...',
            buttonAriaLabel: '搜索案例'
          },
          modal: {
            noResultsText: '没有找到相关案例',
            resetButtonTitle: '清除搜索条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },

    outline: {
      label: '目录'
    },

    docFooter: {
      prev: '上一案例',
      next: '下一案例'
    },

    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  }
})