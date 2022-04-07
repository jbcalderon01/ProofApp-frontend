import { createContext, FC, useContext, useEffect, useState } from 'react';
import {
    getAuth,
    onAuthStateChanged,
    User,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { firebaseApp } from '@app/api/services/firebase.config';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

export type TUserForm = {
    email: string
    password: string
}

export type TAuthContext = {
    isLogged: boolean
    currentUser?: User
    registerUser: (dataUser: TUserForm) => void
    signIn: (dataUser: TUserForm) => void
    logout: () => void
}

const AuthContext = createContext<TAuthContext>({} as unknown as TAuthContext)

export const AuthProvider: FC = ({ children }) => {

    // States
    const [isLogged, setIsLogged] = useState(false)
    const [currentUser, setCurrentUser] = useState<User>()
    const [isLoadLogin, setIsLoadLogin] = useState(false)

    // Hooks
    const router = useRouter()
    const snack = useSnackbar()

    // Firebase auth
    // const auth = getAuth(firebaseApp)
    const auth = getAuth(firebaseApp)

    /**
     * Register user with email and password
     * @param {object} dataUser user data
     * @returns {void}
     */
    const registerUser = (dataUser: TUserForm) => {
        const { email, password } = dataUser

        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setIsLogged(true)
                setCurrentUser(res.user)
                snack.enqueueSnackbar('Cuenta creada correctamente', { variant: 'success' })

            }).catch(err => {
                snack.enqueueSnackbar(err?.message, { variant: 'error' })
                setIsLogged(false)
            })
    }

    /**
     * SignIn user with email and password
     * @param {object} dataUser user data
     * @returns {void}
     */
    const signIn = (dataUser: TUserForm) => {
        const { email, password } = dataUser

        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setIsLogged(true),
                setCurrentUser(res.user)
                snack.enqueueSnackbar('Sesión iniciada', { variant: 'success' })
                router.push('/')
            })
            .catch(err => {
                snack.enqueueSnackbar(err?.message, { variant: 'error' })
                setIsLogged(false)
            })
    }

    /**
     * Logout User
     * @returns {void}
     */
    const logout = () => {
        signOut(auth)
            .then(() => {
                setIsLogged(false),
                setCurrentUser(undefined)
                router.push('/auth?type=login')
                snack.enqueueSnackbar('Sesión cerrada', { variant: 'info' })
            })
            .catch(err => {
                snack.enqueueSnackbar(err?.message, { variant: 'error' })
            })
    }

    useEffect(() => {
        setIsLoadLogin(true)
        onAuthStateChanged(auth, user => {
            if (user) {
                setIsLogged(true)
                setCurrentUser(user)
                router.push('/')
            } else {
                setIsLogged(false)
                setCurrentUser(undefined)
                router.push('/auth?type=login')
            }
            setIsLoadLogin(false)
        });
    }, [])

    if (isLoadLogin) return <div/>

    return (
        <AuthContext.Provider value={{
            isLogged,
            currentUser,
            logout,
            registerUser,
            signIn,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
