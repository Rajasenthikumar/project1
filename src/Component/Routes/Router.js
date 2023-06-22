import React from 'react'
import {
  BrowserRouter as Router, Route, Routes, BrowserRouter,
} from 'react-router-dom'
import Sidebar from '../Layout/Sidebar'
import Header from '../Layout/Header'
import Pagelayout from '../Layout/Pagelayout'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import Dashboard from '../FunctionLayout/Dashboard'
import Login from '../Authmodule/Login'

/*ClientList*/
import Clientlisttable from '../Page/Clientlist/Clientlisttable'
import Clientlistadd from '../Page/Clientlist/Clientlistadd'
import Clientlisttaddbasic from '../Page/Clientlist/Clientlistaddbasic'
import Clientlistaddsetup from '../Page/Clientlist/Clientlistaddsetup'
import Clientlistedit from '../Page/Clientlist/Clientlistedit'
import Clientlisteditbasic from '../Page/Clientlist/Clientlisteditbasic'
import Clientlisteditsetup from '../Page/Clientlist/Clientlisteditsetup'
import ClientlistView from '../Page/Clientlist/Clientlistview'
import Clientlistviewbasic from '../Page/Clientlist/Clientlistviewbasic'
import Clientlistviewsetup from '../Page/Clientlist/Clientlistviewsetup'
/*TestMaster*/
import Testmastertable from '../Page/Testmaster/Testmastertable'
import Testmasteradd from '../Page/Testmaster/Testmasteradd'
import Testmasteraddadult from '../Page/Testmaster/Testmasteraddadult'
import Testmasteraddchild from '../Page/Testmaster/Testmasteraddchild'
import Testmasterview from '../Page/Testmaster/Testmasterview'
import Testmasteredit from '../Page/Testmaster/Testmasteredit'

/* Test Tips*/
import Testtipstable from '../Page/Testtips/Testtipstable'
import Testtipsadd from '../Page/Testtips/Testtipsadd'
import Testtipsedit from '../Page/Testtips/Testtipsedit'
import Testtipsview from '../Page/Testtips/Testtipsview'

/*Roles and permission*/
import Roles from '../Page/Rolespermission/Roles'
import Basicpermission from '../Page/Rolespermission/Basicpermission'
import Accesspermission from '../Page/Rolespermission/Accesspermission'
import Createnewtesttitle from '../Popup/Createnewtesttitle'


/*usermanagement*/
import User from '../Page/Management/User'
/*Dashboard*/
import Userdata from '../Page/Dashboard/Userdata'
function Path() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route path="/Header" element={<Header />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/Pagelayout" element={<Pagelayout />} />

          <Route element={<PrivateRoute />}>
            <Route path="/Dashboard" element={<Userdata />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/Clientlisttable" element={< Clientlisttable />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/Clientlistadd" element={< Clientlistadd />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/Clientlistaddbasic" element={< Clientlisttaddbasic />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/Clientlistaddsetup" element={< Clientlistaddsetup />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/Clientlistedit" element={< Clientlistedit />} />
          </Route>
          <Route path="/Clientlistteditbasic" element={< Clientlisteditbasic />} />
          <Route path="/Clientlisteditsetup" element={< Clientlisteditsetup />} />
          <Route element={<PrivateRoute />}>
            <Route path="/ClientlistView" element={< ClientlistView />} />
          </Route>
          <Route path="/Clientlistviewbasic" element={< Clientlistviewbasic />} />
          <Route path="/Clientlistviewsetup" element={< Clientlistviewsetup />} />

          <Route element={<PrivateRoute />}>
            <Route path="/Testmastertable" element={<Testmastertable />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/Testmasteradd" element={<Testmasteradd />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/Testmasterview" element={<Testmasterview/>} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/Testmasteredit" element={<Testmasteredit />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/Testmasteraddadult" element={<Testmasteraddadult />} />
          </Route>
          <Route path="/Testmasterchild" element={<Testmasteraddchild />} />

          <Route element={<PrivateRoute />}>
            <Route path="/Testtipstable" element={<Testtipstable />} />
          </Route>
          <Route element={<PrivateRoute />}>
          <Route path="/Testtipsadd" element={<Testtipsadd />} />
          </Route>
          <Route element={<PrivateRoute />}>
          <Route path="/Testtipsedit" element={<Testtipsedit />} />
          </Route>
          <Route element={<PrivateRoute />}>
          <Route path="/Testtipsview" element={<Testtipsview/>} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/Roles" element={<Roles />} />
          </Route>
          <Route path="/Basicpermission" element={< Basicpermission />} />
          <Route path="/Accesspermission" element={< Accesspermission />} />

          <Route element={<PrivateRoute />}>
            <Route path="/User" element={<User />} />
          </Route>


          <Route element={<PrivateRoute />}>
            <Route path="/Createnewtesttitle" element={<Createnewtesttitle />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Path
