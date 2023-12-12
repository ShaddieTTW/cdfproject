import React from 'react';
import { Outlet } from 'react-router-dom';

function AccountLayout() {
  return (
    <div>
        <main className="all-width">
            <Outlet/>
        </main>
    </div>
  );
}

export default AccountLayout;
