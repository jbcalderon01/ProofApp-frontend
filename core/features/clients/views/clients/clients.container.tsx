import { ClientsServices } from '@app/api/services'
import { ClientEntity } from '@app/api/services/clients/clients.types'
import { useFetch } from '@app/hooks/useFetch'
import { useSnackbar } from 'notistack'
import React, { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { ClientsComponent } from './clients.component'

const INITIAL_FORM_VALUE: ClientEntity = {
    id: undefined,
    email: '',
    firstName: '',
    lastName: '',
    name: '',
    nit: ''
}

export const ClientsContainer: FC = () => {

    // States
    const [isLoadSubmit, setIsLoadSubmit] = useState(false)

    // API Services
    const { data: dataClients, fetch: refetchClients } = useFetch({ service:  ClientsServices.findAll, init: true })

    // Form
    const clientFormMethod = useForm()
    const snack = useSnackbar()

    /**
     * Reset form
     * @returns {void}
     */
    const resetForm = () => {
        clientFormMethod.reset(INITIAL_FORM_VALUE)
    }

    /**
     * create client
     * @param {object} data data create client
     * @returns {void}
     */
    const createClient = (data: ClientEntity) => {
        setIsLoadSubmit(true)
        ClientsServices.create(data)
            .then(() => {
                setIsLoadSubmit(false)
                refetchClients()
                resetForm()
                snack.enqueueSnackbar('Cliente creado correctamente', { variant: 'success' })
            })
            .catch(err => {
                setIsLoadSubmit(false)
                snack.enqueueSnackbar(err?.message, { variant: 'error' })
            })
    }

    /**
     * update client
     * @param {object} data  data to update client
     * @returns {void}
     */
    const updateClient = (data: ClientEntity) => {
        setIsLoadSubmit(true)
        if (!data.id) return
        ClientsServices.update(data.id, data)
            .then(() => {
                refetchClients()
                setIsLoadSubmit(false)
                resetForm()
                snack.enqueueSnackbar('Cliente actualizado correctamente', { variant: 'success' })
            })
            .catch(err => {
                setIsLoadSubmit(false)
                snack.enqueueSnackbar(err?.message, { variant: 'error' })
            })
    }

    /**
     * Remove client
     * @param {object} data client to remove
     * @returns {void}
     */
    const removeClient = (data: ClientEntity) => {
        if (!data.id) return
        ClientsServices.remove(data.id)
            .then(() => {
                setIsLoadSubmit(false)
                refetchClients()
                snack.enqueueSnackbar('Cliente eliminado correctamente', { variant: 'success' })
            })
            .catch(err => {
                setIsLoadSubmit(false)
                snack.enqueueSnackbar(err?.message, { variant: 'error' })
            })
    }

    /**
     *
     * @param {object} record table record
     * @returns {void}
     */
    const handleClickDelete = (record: ClientEntity) => {
        removeClient(record)
    }

    /**
     *
     * @param {object} record table record
     * @returns {void}
     */
    const handleClickEdit = (record: ClientEntity) => {
        clientFormMethod.reset(record)
    }

    /**
     *
     * @param {object} dataForm data object
     * @returns {void}
     */
    const handleSubmit = (dataForm: ClientEntity) => {
        const { id } = dataForm

        if (id) {
            updateClient(dataForm)
        } else {
            createClient(dataForm)
        }
    }

    return (
        <FormProvider
            {...clientFormMethod}
        >
            <ClientsComponent
                dataClients={dataClients as ClientEntity[] || []}
                handleClickDelete={handleClickDelete}
                handleClickEdit={handleClickEdit}
                handleSubmit={handleSubmit}
                isLoadSubmit={isLoadSubmit}
            />
        </FormProvider>
    )
}
