import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './datatable.scss';
import {userColumns,userRows} from '../../datatablesource'
import {Link} from 'react-router-dom'
function Datatable() {
    const actionColumn=[{field:"action",headerName:"Action",width:200,renderCell:()=>{
        return (
            <div className='cellAction'>
              <Link to="/users/1" style={{ textdecoration:"none"}}>
                <div className='viewButton'>View</div>
              </Link>
              <Link>
                <div className='deleteButton'>Delete</div>
              </Link>
            </div>
        )
    }}]
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className='link'>
          Add New
        </Link>
      </div>
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable