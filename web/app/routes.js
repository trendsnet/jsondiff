import React from 'react'
import {
  Route,
} from 'react-router'

import App from './containers/App'
// import Login from './containers/App/login'

// import {
//   houseCheck,
//   houseManage,
//   houseDetail,
//   roomDetail,
// } from './pages/house'

// import popCheck from './pages/pop/index'

const houseCheck1 = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/house/houseCheck').default)
    },'houseCheck')
}

const houseManage1 = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/house/houseManage').default)
    },'houseManage')
}

const houseDetail1 = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/house/houseDetail').default)
    },'houseDetail')
}

const roomDetail1 = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/house/roomDetail').default)
    },'roomDetail')
}

const popCheck1 = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/pop/index').default)
    },'popCheck')
}

const Login1 = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/App/login').default)
    },'login')
}

const jsonview = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/jsondiff/view').default)
    },'login')
}

const jsondiff = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/jsondiff/diff').default)
    },'login')
}

const routes = (
  <Route>
    <Route path="/" component={App}>


      <Route path="/jsonview" getComponent={jsonview} />
      <Route path="/jsondiff" getComponent={jsondiff} />

      <Route path="/houseCheck" getComponent={houseCheck1} />
      <Route path="/houseManage" getComponent={houseManage1} />
      <Route path="/houseDetail/:houseId" getComponent={houseDetail1} />
      <Route path="/roomDetail/:houseId/:roomId" getComponent={roomDetail1} />


      <Route path="/popCheck" getComponent={popCheck1} />

    </Route>
    <Route path="/login" getComponent={Login1}></Route>
  </Route>
);

export default routes;
