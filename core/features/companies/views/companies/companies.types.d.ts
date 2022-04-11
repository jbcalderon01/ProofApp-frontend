import { CompanyEntity } from '@app/api/services/companies/companies.types';

export interface ICompaniesComponent {
    dataCompanies: CompanyEntity[]
    handleSubmit: (dataForm: CompanyEntity) => void
    handleClickDelete: (record: CompanyEntity) => void
    handleClickEdit: (record: CompanyEntity) => void
    isLoadSubmit: boolean
}
