import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Invoices from './components/Invoices';
import Invoice from './components/Invoice';
import Expenses from './components/Expenses';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route
          index
          element={
            <main style={{ padding: '1rem' }}>
              <p>Select an invoice</p>
            </main>
          }
        />
        <Route path='invoices' element={<Invoices />}>
          <Route path=':invoiceId' element={<Invoice />} />
        </Route>
        <Route path='expenses' element={<Expenses />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
