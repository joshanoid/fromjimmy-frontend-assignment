import { MakeIdResponse, ManufacturerDetailsResponse, ManufacturersResponse, ModelsResponse } from './types'

export const fetchManufacturers = async ({ pageParam = 1 }): Promise<ManufacturersResponse> => {
    const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=${pageParam}`)
    const data: ManufacturersResponse = await res.json()
    const nextPage = data.Count ? pageParam + 1 : undefined

    return { ...data, nextPage }
}

export const fetchManufacturerDetails = async (manufacturerId: number): Promise<ManufacturerDetailsResponse> => {
    const res = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetManufacturerDetails/${manufacturerId}?format=json`,
    )

    return res.json()
}

export const fetchMakeIdByManufacturerId = async (manufacturerId: number): Promise<MakeIdResponse> => {
    const res = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/${manufacturerId}?format=json`,
    )

    return res.json()
}

export const fetchModelsByMakeId = async (makeId: number): Promise<ModelsResponse> => {
    const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${makeId}?format=json`)

    return res.json()
}
