import { ManufacturersResponse } from './types'

export const fetchManufacturers = async ({ pageParam = 1 }): Promise<ManufacturersResponse> => {
    const res = await fetch(
        `https://vpic.nhtsa.dot.gov/api//vehicles/GetAllManufacturers?format=json&page=${pageParam}`,
    )
    const data = await res.json()

    return { ...data, nextPage: pageParam + 1 }
}
