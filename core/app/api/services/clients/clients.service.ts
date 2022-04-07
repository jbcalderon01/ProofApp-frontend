import Service from '../_generic/generic.service'

import { ClientEntity } from './clients.types'

const ClientsServices = new class extends Service<ClientEntity> {
    constructor () {
        super('clients')
    }
}()

export default ClientsServices

