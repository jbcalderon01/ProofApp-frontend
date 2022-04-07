import { ClientEntity } from '@app/api/services/clients/clients.types'
import { Button, InputField } from '@app/ui/components'
import { Card, Typography } from '@app/ui/components/GlobalComponent'
import { useThemeContext } from '@app/ui/styles/theme.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Table from 'rc-table'
import { ColumnsType } from 'rc-table/lib/interface'
import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import { ButtonWrapper, GridFields } from './clients.styles'
import { IClientsComponent } from './clients.types'

export const ClientsComponent: FC<IClientsComponent> = ({
    dataClients,
    handleSubmit,
    handleClickDelete,
    handleClickEdit,
    isLoadSubmit
}) => {

    const { theme } = useThemeContext()

    // States
    const columnsClient: ColumnsType<ClientEntity> = [
        {
            title: 'ID',
            dataIndex: 'id'
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
        {
            title: 'Nit',
            dataIndex: 'nit'
        },
        {
            title: 'Acciones',
            render: (__, record) => {
                return (
                    <>
                        <FontAwesomeIcon
                            color={theme.colors.danger}
                            cursor="pointer"
                            icon="trash-alt"
                            onClick={() => handleClickDelete(record) }
                        /> &nbsp;
                        <FontAwesomeIcon
                            color={theme.colors.info}
                            cursor="pointer"
                            icon="edit"
                            onClick={() => handleClickEdit(record) }
                        />
                    </>
                )
            }
        }
    ]

    const { register, handleSubmit: onSubmit, watch } = useFormContext<ClientEntity>()
    const id = watch('id')

    return (
        <div>
            <Typography margin="20px 0" size="lg">
                Clientes
            </Typography>
            <form onSubmit={onSubmit(handleSubmit)}>
                <GridFields>
                    <InputField
                        label="Nombre"
                        labelSize="default"
                        register={register('firstName')}
                    />
                    <InputField
                        label="Apellido"
                        labelSize="default"
                        register={register('lastName')}

                    />
                    <InputField
                        label="Email"
                        labelSize="default"
                        register={register('email')}

                    />
                    <InputField
                        label="Nit"
                        labelSize="default"
                        register={register('nit')}
                    />
                </GridFields>
                <ButtonWrapper>
                    <Button
                        size="small"
                        type="submit"
                    >
                        {isLoadSubmit && (
                            <>
                                <FontAwesomeIcon
                                    icon="spinner"
                                    spin={isLoadSubmit}
                                /> &nbsp;
                            </>
                        )}
                        { id ? 'Editar' : 'Crear' } Cliente
                    </Button>
                </ButtonWrapper>
            </form>
            <Typography
                margin="20px 0"
                size="lg"
            >
                Tabla de Clientes
            </Typography>
            <Card>
                <Table
                    className="TableStyle"
                    columns={columnsClient}
                    data={dataClients}
                    rowKey={record => `tableClients${ record?.id }`}
                />
            </Card>
        </div>
    )
}
