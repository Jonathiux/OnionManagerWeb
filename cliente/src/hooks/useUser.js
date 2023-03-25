import { useCallback, useContext, /* useEffect, */ useState } from 'react'
import Context from "context/UserContext"
import Usuario from 'services/usuario'

function useUser() {

    const { jwt, setJWT } = useContext(Context)
    const [estado, setEstado] = useState({ error: null, loading: false })

    const login = useCallback(({ username, password }) => {
        setEstado({ loading: true, error: null })
        const u = new Usuario({ Username: username, Contrasena: password })
        u.login(u)
            .then(resp => {
                if (resp.error) {
                    setEstado({ loading: false, error: resp.error })
                } else {
                    window.sessionStorage.setItem("active", JSON.stringify(resp));
                    setJWT({ id: resp.id, tipo: resp.tipo })
                    setEstado({ loading: false, error: 'Verificacion Exitosa' })
                }
            })
            .catch(err => {
                setEstado({ loading: false, error: "Error en el servidor" })
            })
        setEstado({ loading: false, error: null })
    }, [setJWT])

    const logout = useCallback(() => {
        setJWT({ id: null, tipo: null })
        sessionStorage.removeItem("active")
    }, [setJWT])

    return {
        isLogged: Boolean(jwt.id),
        login,
        loading: estado.loading,
        error: estado.error,
        logout,
        user: jwt
    }
}

export default useUser