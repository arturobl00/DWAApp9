import React, {useState} from 'react'
import {auth} from '../firebase'

function Admin(props) {
    const [user, setUser] = useState(null)

    return (
        <div>
            <h1>Pagina de administracion</h1>
        </div>
    )
}

export default Admin
