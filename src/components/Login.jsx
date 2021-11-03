import React, {useState} from "react";

const Login = () => {
    //Constantes del formulario
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')

    const [esRegistro, setEsRegistro] = useState(false)

    //Definir funcion de obtener datos
    const enviardatos = e =>{
        e.preventDefault()
        console.log(email)
        console.log(pass)

        if(!email.trim()){
            setError('Rellene el campo email')
            return
        }

        if(!pass.trim()){
            setError('Rellene el campo password')
            return
        }

        setError(null)
    }

    return (
        <div className="mt-5">
            <h3 className="text-center">
                {
                    esRegistro ? 'Registro de Usuario' : 'Login de acceso'
                }
            </h3>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={enviardatos}>
                        {
                            error ? (<div className="alert alert-warning">
                                        {error}
                                    </div>) : null
                        }
                        <input 
                            type="email" 
                            className="form-control mb-2"
                            placeholder="Ingrese Email"
                            onChange = {e => setEmail(e.target.value)}
                            value= {email}
                        />
                        <input 
                            type="password" 
                            className="form-control mb-2"
                            placeholder="Ingrese Contraseña minimo 6 caracteres"
                            minlength="6"
                            onChange = {e => setPass(e.target.value)}
                            value= {pass}
                        />
                        <button 
                            className="btn btn-lg btn-dark btn-block"
                            type="submit"
                        >
                            Ingresar
                        </button>
                        <button 
                            className="btn btn-sm btn-info btn-block"
                            type="button"
                            onClick = {() => setEsRegistro(!esRegistro)}
                        >
                            {
                                esRegistro ? '¿Ya Tienes Cuenta?' : '¿No tienes cuenta?'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
