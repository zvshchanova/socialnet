import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store  from "./redux/redux-store";


const root = ReactDOM.createRoot(document.getElementById('root'));
const StateContext = createContext();


let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      {/* <App state={state} addPost={store.addPost.bind(store)} /> */}
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />

      {/* <StateContext.Provider value={state}>
          <App state={state}/>
      </StateContext.Provider> */}
      
  
    </React.StrictMode>
  );

}

rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree);
store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree(state)
}

)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// dispatch