import { CompanyEntity } from '@app/api/services/companies/companies.types'
import { Button, InputField } from '@app/ui/components'
import { Card, Typography } from '@app/ui/components/GlobalComponent'
import { useThemeContext } from '@app/ui/styles/theme.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Table from 'rc-table'
import { ColumnsType } from 'rc-table/lib/interface'
import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import { ButtonWrapper, GridFields } from './companies.styles'
import { ICompaniesComponent } from './companies.types'

export const CompaniesComponent: FC<ICompaniesComponent> = ({
    dataCompanies: dataClients,
    handleSubmit,
    handleClickDelete,
    handleClickEdit,
    isLoadSubmit
}) => {

    const { theme } = useThemeContext()

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

    const { register, handleSubmit: onSubmit, watch } = useFormContext<CompanyEntity>()
    const id = watch('id')

    return (
        <div>
            <Typography margin="20px 0" size="lg">
                Compañías
            </Typography>
            <form onSubmit={onSubmit(handleSubmit)}>
                <GridFields>
                    <InputField
                        label="Razón Social"
                        labelSize="default"
                        register={register('name')}
                    />
                    <InputField
                        label="DNI"
                        labelSize="default"
                        register={register('dni')}

                    />
                    <InputField
                        label="Dirección"
                        labelSize="default"
                        register={register('address')}

                    />
                    <InputField
                        label="Email"
                        labelSize="default"
                        register={register('email')}
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
                        { id ? 'Editar' : 'Crear' } Compañía
                    </Button>
                </ButtonWrapper>
            </form>
            <Typography
                margin="20px 0"
                size="lg"
            >
                Tabla de Compañías
            </Typography>
            <Card>
                <Table
                    className="TableStyle"
                    columns={columnsCompanies}
                    data={dataClients}
                    rowKey={record => `tableClients${ record?.id }`}
                />
            </Card>
        </div>
    )
}
