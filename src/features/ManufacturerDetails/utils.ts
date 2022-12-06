import { useQuery } from '@tanstack/react-query'

import { fetchMakeIdByManufacturerId, fetchManufacturerDetails, fetchModelsByMakeId } from '../../utils/api'

export const useManufacturerDetails = (manufacturerId: number) => {
    const { data: manufacturerDetails } = useQuery({
        queryKey: ['manufacturerDetails', manufacturerId],
        queryFn: () => fetchManufacturerDetails(manufacturerId),
    })

    const { data: makeIdResponse } = useQuery({
        queryKey: ['makeIdByManufacturerId', manufacturerId],
        queryFn: () => fetchMakeIdByManufacturerId(manufacturerId),
        enabled: !!manufacturerDetails?.Count,
    })

    const makeId = makeIdResponse?.Results[0].Make_ID

    const { data: modelsData } = useQuery({
        queryKey: ['models', makeId],
        queryFn: () => (makeId ? fetchModelsByMakeId(makeId) : null),
        enabled: !!makeId,
    })

    const details = manufacturerDetails?.Results[0]
    const models = modelsData?.Results

    if (details && models) {
        return { ...details, models }
    }

    return null
}
