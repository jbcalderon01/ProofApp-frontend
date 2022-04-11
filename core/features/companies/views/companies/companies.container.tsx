import { CompaniesServices } from '@app/api/services'
import { CompanyEntity } from '@app/api/services/companies/companies.types'
import { useFetch } from '@app/hooks/useFetch'
import { useSnackbar } from 'notistack'
import React, { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { CompaniesComponent } from './companies.component'

const INITIAL_FORM_VALUE: CompanyEntity = {
    id: undefined,
    address: '',
    email: '',
    dni: '',
    name: ''
}

export const CompaniesContainer: FC = () => {

    // States
    const [isLoadSubmit, setIsLoadSubmit] = useState(false)

    // API Services
    const { data: dataClients, fetch: refetchClients } = useFetch({ service:  CompaniesServices.findAll, init: true })

    // Form
    const companyFormMethod = useForm()
    const snack = useSnackbar()

    /**
     * Reset form
     * @returns {void}
     */
    const resetForm = () => {
        companyFormMethod.reset(INITIAL_FORM_VALUE)
    }

    /**
     * create client
     * @param {object} data data create client
     * @returns {void}
     */
    const createClient = (data: CompanyEntity) => {
        setIsLoadSubmit(true)
        CompaniesServices.create(data)
            .then(() => {
                setIsLoadSubmit(false)
                refetchClients()
                resetForm()
                snack.enqueueSnackbar('Compañía creado correctamente', { variant: 'success' })
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
    const updateClient = (data: CompanyEntity) => {
        setIsLoadSubmit(true)
        if (!data.id) return
        CompaniesServices.update(data.id, data)
            .then(() => {
                refetchClients()
                setIsLoadSubmit(false)
                resetForm()
                snack.enqueueSnackbar('Compañía actualizado correctamente', { variant: 'success' })
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
    const removeClient = (data: CompanyEntity) => {
        if (!data.id) return
        CompaniesServices.remove(data.id)
            .then(() => {
                setIsLoadSubmit(false)
                refetchClients()
                snack.enqueueSnackbar('Compañía eliminado correctamente', { variant: 'success' })
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
    const handleClickDelete = (record: CompanyEntity) => {
        removeClient(record)
    }

    /**
     *
     * @param {object} record table record
     * @returns {void}
     */
    const handleClickEdit = (record: CompanyEntity) => {
        companyFormMethod.reset(record)
    }

    /**
     *
     * @param {object} dataForm data object
     * @returns {void}
     */
    const handleSubmit = (dataForm: CompanyEntity) => {
        const { id } = dataForm

        if (id) {
            updateClient(dataForm)
        } else {
            createClient(dataForm)
        }
    }

    return (
        <FormProvider
            {...companyFormMethod}
        >
            <CompaniesComponent
                dataCompanies={dataClients as CompanyEntity[] || []}
                handleClickDelete={handleClickDelete}
                handleClickEdit={handleClickEdit}
                handleSubmit={handleSubmit}
                isLoadSubmit={isLoadSubmit}
            />
        </FormProvider>
    )
}
