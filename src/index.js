const React = require('react');
const ReactDOM = require('react-dom');


// ReactDOM.render((
//     <Provider store={store}>
//         <Router history={history}>
//             <Route path="/" component={App}>
//                 <IndexRoute component={Home} onEnter={requireAuth} />
//                 <Route path="login" component={Login} />
//                 <Route path="create" component={Create} />
//                 <Route path="register" component={Register} />
//                 <Route path="profile/:id" component={Profile} />
//                 <Route path="*" component={NotFound} />
//             </Route>
//         </Router>
//     </Provider>

//     ), document.getElementById('app'));


ReactDOM.render(
    <div>
        <h1>Hello There</h1>
    </div>,
    document.getElementById('app')
    );