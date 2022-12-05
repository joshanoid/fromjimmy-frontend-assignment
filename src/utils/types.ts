type VehicleType = {
    IsPrimary: boolean
    Name: string
}

type Manufacturer = {
    Country: string
    Mfr_CommonName: string
    Mfr_ID: number
    Mfr_Name: string
    VehicleTypes: ReadonlyArray<VehicleType>
}

export type ManufacturersResponse = {
    Count: number
    Message: string
    SearchCriteria: null
    Results: ReadonlyArray<Manufacturer>
    nextPage?: number
}
