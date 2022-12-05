import { ManufacturersResponse } from './types'

export const fetchManufacturers = async ({ pageParam = 1 }): Promise<ManufacturersResponse> => {
    const res = await fetch(
        `https://vpic.nhtsa.dot.gov/api//vehicles/GetAllManufacturers?format=json&page=${pageParam}`,
    )
    const data: ManufacturersResponse = await res.json()
    const nextPage = data.Count ? pageParam + 1 : undefined

    return { ...data, nextPage }
}
