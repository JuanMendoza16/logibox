import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, Outlet } from 'react-router-dom';
import React from 'react'; // Import React explicitly

function Dashboard() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar>
        <Menu>
          <MenuItem component={<Link to="/" />}> Dashboard </MenuItem>
          <MenuItem component={<Link to="/sedes" />}> Sedes </MenuItem>
          <MenuItem component={<Link to="/mensajeria" />}> Mensajería </MenuItem>
          <MenuItem component={<Link to="/reportes" />}> Reportes </MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ flexGrow: 1, padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard
