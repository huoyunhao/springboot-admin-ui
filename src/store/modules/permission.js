import {
  asyncRouterMap,
  constantRouterMap
} from 'src/router'
import { getAllMenus } from 'api/login';
/**
 * 通过authority判断是否与当前用户权限匹配
 * @param menus
 * @param route
 */
function hasPermission(menus, route) {
  if (route.authority) {
    if (menus[route.authority] !== undefined) {
      return menus[route.authority];
    } else {
      return false;
    }
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, menus, menuDatas) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(menus, route)) {//route.authority模块符合权限 进行字段翻译
      route.name = menuDatas[route.authority].title;
      route.icon = menuDatas[route.authority].icon;
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, menus, menuDatas);
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers//addRouters是根据权限匹配后产生的 来定义路由的对象
      state.routers = constantRouterMap.concat(routers)//基本配置路由 衔接 根据权限匹配后产生的路由
    }
  },
  actions: {
    GenerateRoutes({
      commit
    }, menus) {
      return new Promise(resolve => {
        getAllMenus().then(data => {
          const menuDatas = {};
          for (let i = 0; i < data.length; i++) {
            menuDatas[data[i].code] = data[i];
          }
          //menus 布尔值键值对对象 有该模块权限则为true 没有为false
          console.log(asyncRouterMap, menus, menuDatas)
          const accessedRouters = filterAsyncRouter(asyncRouterMap, menus, menuDatas);
          console.log(accessedRouters)
          commit('SET_ROUTERS', accessedRouters);
          resolve();
        });
      })
    }
  }
};

export default permission;
