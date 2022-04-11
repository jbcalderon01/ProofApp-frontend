/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosClient } from '../client.config'

import { Result } from './generic.types'

const Service = class <T = any> {
    public service: string

    constructor (service: string) {
        this.service = service
        this.get = this.get.bind(this)
        this.findAll = this.findAll.bind(this)
        this.findByParams = this.findByParams.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.remove = this.remove.bind(this)
    }

    async get (id?: number | string) {
        if (!id) return
        const res = await AxiosClient.get<Result<T>>(`${ this.service }/${ id }`)

        return res.data
    }

    async findAll (params?: any) {
        const res = await AxiosClient.get<Result<T[]>>(this.service, { params })

        return res.data
    }

    async findByParams (params?:any) {
        const res = await AxiosClient.get<Result<T[]>>(`${ this.service }/by?`, { params })

        return res.data
    }

    async create (data:any, params?: any) {
        const res = await AxiosClient.post<Result<T>>(this.service, data, { params })

        return res.data
    }

    async update (id: number | string, data?: any, params?: any) {
        const res = await AxiosClient.put<Result<T>>(`${ this.service }/${ id }`, data, { params: { ...params } })

        return res.data
    }

    async remove (id: number | string) {
        const res = await AxiosClient.delete<Result<T>>(`${ this.service }/${ id }`, { params: { id } })

        return res.data
    }
}

export default Service
