import { ClientEntity } from '@app/api/services/clients/clients.types';

export interface IClientsComponent {
    dataClients: ClientEntity[]
    handleSubmit: (dataForm: ClientEntity) => void
    handleClickDelete: (record: ClientEntity) => void
    handleClickEdit: (record: ClientEntity) => void
    isLoadSubmit: boolean
}
