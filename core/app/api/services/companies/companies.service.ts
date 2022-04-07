import Service from '../_generic/generic.service'

import { CompanyEntity } from './companies.types'

const CompaniesServices = new class extends Service<CompanyEntity> {
    constructor () {
        super('companies')
    }
}()

export default CompaniesServices

