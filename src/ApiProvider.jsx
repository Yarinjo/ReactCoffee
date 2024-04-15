import React, { useMemo } from 'react'
import { createContext, useState } from 'react';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';

export const ApiProvider = () => {
    const value = useMemo (() => ({}), ([]));
  return (
    <ApiContext.Provider value={value}>
        <Header />
        <div className="main">
          <Outlet />
        </div>
        <Sidebar />
    </ApiContext.Provider>
  )
}
