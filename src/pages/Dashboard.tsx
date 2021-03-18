import React from 'react';
import { ParentComponent } from '../components/ParentComponent';
import { DataGrid } from '../components/DataGrid';

const Dashboard = () => {
    return (<div style={{ padding: 10 }}>
        <ParentComponent />
        <div style={{ marginTop: 10 }}></div>
        <DataGrid />
    </div>
    );
}

export default Dashboard;