import { ClientEntity } from '@app/api/services/clients/clients.types'
import { CompanyEntity } from '@app/api/services/companies/companies.types'
import { Card, Typography } from '@app/ui/components/GlobalComponent'
import Table from 'rc-table'
import { ColumnsType } from 'rc-table/lib/interface'
import React, { FC } from 'react'

import { HomeWrapper } from './home.styles'
import { IHomeComponent } from './home.types'

export const HomeComponent: FC<IHomeComponent> = ({
    dataCompanies,
    dataClients
}) => {
    // States
    const columnsCompanies: ColumnsType<CompanyEntity> = [
        {
            title: 'ID',
            dataIndex: 'id'
        },
        {
            title: 'Razón Social',
            dataIndex: 'name'
        },
        {
            title: 'DNI',
            dataIndex: 'dni'
        },
        {
            title: 'Dirección',
            dataIndex: 'address'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
    ]
    const columnsClients: ColumnsType<ClientEntity> = [
        {
            title: 'ID',
            dataIndex: 'id'
        },
        {
            title: 'Nit',
            dataIndex: 'nit'
        },
        {
            title: 'Nombre',
            dataIndex: 'firstName'
        },
        {
            title: 'Apellido',
            dataIndex: 'lastName'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
    ]

    return (
        <HomeWrapper>
            <Typography margin="0 0 2rem 0" size="1x" >
                    Dashboard
            </Typography>
            <Card>
                <Typography margin="0 0 2rem 0" size="lg">
                    Lista de Compañías
                </Typography>
                <Table
                    className="TableStyle"
                    columns={columnsCompanies}
                    data={dataCompanies}
                    rowKey={record => `tableClients${ record?.id }`}
                />
            </Card>
            <Card>
                <Typography margin="0 0 2rem 0" size="lg">
                    Lista de Clientes
                </Typography>
                <Table
                    className="TableStyle"
                    columns={columnsClients}
                    data={dataClients}
                    rowKey={record => `tableClients${ record?.id }`}
                />
            </Card>
        </HomeWrapper>
    )
}
