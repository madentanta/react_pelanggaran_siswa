import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './home'
import Login from './login'
import Pegawai from './pegawai'
import Register from './register'
import Pelanggaran from './pelanggaran'
import Siswa from './siswa'
import PelanggaranSiswa from './pelanggaran_siswa'
import Jurusan from './jurusan'


const Pages = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/pegawai' component={Pegawai} />
        <Route path='/pelanggaran' component={Pelanggaran} />
        <Route path='/siswa' component={Siswa} />
        <Route path='/pelanggaran_siswa' component={PelanggaranSiswa} />
        <Route path='/jurusan' component={Jurusan}/>
    </Switch>
)

export default Pages;

