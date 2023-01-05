import React from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import CadastroProduto from './views/produtos/cadastro'

function Rota() {
    return (
           <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/cadastro-produtos" element={<CadastroProduto/>} />
            </Routes>
           </Router>
    )
}

export default Rota;