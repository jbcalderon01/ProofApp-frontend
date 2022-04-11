/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from 'react'

type TypeDefault = {
    params?: any
    result: any
}

type Params<T extends TypeDefault> = {
    service:(...args: T['params']) => any
    init?: boolean,
    params?: T['params']
}

export const useFetch = <T extends TypeDefault>({ service, init, params = [] }: Params<T>) => {

    const [data, setData] = useState<T['result'] | undefined>(undefined)
    const [loading, setLoading] = useState(false)
    const [called, setCalled] = useState(false)
    const [error, setError] = useState<any>(undefined)

    /**
     * Función que ejecuta el servicio
     * @param {T} args argumentos del servicio
     * @returns {void}
     */
    const getService = useCallback(async (...args: T['params']) => {
        try {
            setLoading(true)
            const res : T['result'] = await service(...(args?.length ? args : params))

            setLoading(false)
            setCalled(true)
            setError(undefined)
            setData(res)

            return res
        } catch (err: any) {
            setLoading(false)
            setData(undefined)
            setError({
                message: err?.message || 'Se ha producido un error',
                code: err?.code || 404
            })

            return err
        }
    }, [service])

    /**
     * Función que reinicia los estados
     * @returns {void}
     */
    const reset = useCallback(() => {
        setData(undefined)
        setLoading(false)
        setCalled(false)
        setError(undefined)
    }, [],
    )

    // Efecto que ejecuta el servicio cuando se monta el componente
    useEffect(() => {
        init && getService()
    }, [])

    return { data, loading, called, error, fetch: getService, reset, setForcedData: setData }
}
