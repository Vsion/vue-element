import App from './App.vue'
const a = r => require.ensure([], () => r(require('./page/a/index.vue')), 'a')
const b = r => require.ensure([], () => r(require('./page/b/index.vue')), 'b')
const NotFoundComponent = r => require.ensure([], () => r(require('./page/404.vue')), 'NotFoundComponent')
const activePublic = r => require.ensure([], () => r(require('./page/activePublic/index.vue')), 'activePublic')
const activeManage = r => require.ensure([], () => r(require('./page/activeManage/index.vue')), 'activeManage')
const anaPage = r => require.ensure([], () => r(require('./page/anaPage/index.vue')), 'anaPage')
const gridTest = r => require.ensure([], () => r(require('./page/gridTest/index.vue')), 'gridTest')
const testMs = r => require.ensure([], () => r(require('./page/testMs/index.vue')), 'testMs')

export default [
  // {path: '*', component: NotFoundComponent },
  {path: '/',
    components: {
        a,
        b,
        // activePublic,
        // activeManage,
        anaPage,
        anaPage1: anaPage,
        anaPage2: anaPage,
        anaPage3: anaPage,
        anaPage4: anaPage,
        anaPage5: anaPage,
        anaPage6: anaPage,
        gridTest,
        testMs,
    }
  }
]
