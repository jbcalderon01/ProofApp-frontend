import { ClientEntity } from '@app/api/services/clients/clients.types'
import { CompanyEntity } from '@app/api/services/companies/companies.types'

export interface IHomeComponent {
    dataClients: ClientEntity[]
    dataCompanies: CompanyEntity[]
}
