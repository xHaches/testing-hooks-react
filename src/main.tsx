import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { HooksApp } from './HooksApp'
import { SimpleForm } from './02-useEffect/SimpleForm'

import './index.css'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayoutEffect/Layout';
import { Memorize } from './06-memos/Memorize';
import { MemoHook } from './06-memos/MemorizeHook';
import { CallbackHook } from './06-memos/CallbackHook';
import { Padre } from './07-tarea-memo/Padre';

import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  <React.StrictMode>
  {/* <HooksApp /> */}
  {/* <CounterApp /> */}
  {/* <CounterWithCustomHook /> */}
  {/* <SimpleForm /> */}
  {/* <FormWithCustomHook /> */}
  {/* <MultipleCustomHooks /> */}
  {/* <FocusScreen /> */}
  {/* <Layout /> */}
  {/* <Memorize /> */}
  {/* <MemoHook /> */}
  {/* <CallbackHook /> */}
  {/* <Padre /> */}
  {/* <TodoApp /> */}
    <MainApp />
  </React.StrictMode>,
  </BrowserRouter>
  )
