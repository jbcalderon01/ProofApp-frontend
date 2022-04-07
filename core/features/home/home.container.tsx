import { ClientsServices, CompaniesServices } from '@app/api/services'
import { useFetch } from '@app/hooks/useFetch'
import React, { FC } from 'react'

import { HomeComponent } from './home.component}'

export const HomeContainer: FC = () => {
    // API Services
    const { data: dataClients } = useFetch({ service: ClientsServices.findAll, init: true })
    const { data: dataCompanies } = useFetch({ service: CompaniesServices.findAll, init: true })

    return (
        <HomeComponent
            dataClients={dataClients || []}
            dataCompanies={dataCompanies || []}
        />
    )
}
