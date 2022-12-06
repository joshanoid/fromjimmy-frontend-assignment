type Nullable<T> = T | null

type VehicleType = {
    IsPrimary: boolean
    Name: string
    GVWRFrom?: string
    GVWRTo?: string
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

export type ManufacturerDetailsResponse = {
    Count: number
    Message: string
    SearchCriteria: null
    Results: [
        {
            Address: Nullable<string>
            Address2: Nullable<string>
            City: Nullable<string>
            ContactEmail: Nullable<string>
            ContactFax: Nullable<string>
            ContactPhone: Nullable<string>
            Country: Nullable<string>
            DBAs: Nullable<string>
            EquipmentItems: ReadonlyArray<unknown>
            LastUpdated: Nullable<string>
            ManufacturerTypes: ReadonlyArray<{ Name: string }>
            Mfr_CommonName: string
            Mfr_ID: number
            Mfr_Name: string
            OtherManufacturerDetails: Nullable<string>
            PostalCode: Nullable<string>
            PrimaryProduct: Nullable<string>
            PrincipalFirstName: Nullable<string>
            PrincipalLastName: Nullable<string>
            PrincipalPosition: Nullable<string>
            StateProvince: Nullable<string>
            SubmittedName: Nullable<string>
            SubmittedOn: Nullable<string>
            SubmittedPosition: Nullable<string>
            VehicleTypes: ReadonlyArray<VehicleType>
        },
    ]
}

export type MakeIdResponse = {
    Count: number
    Message: string
    SearchCriteria: null
    Results: [
        {
            Make_ID: number
            Make_Name: string
            Mfr_Name: string
        },
    ]
}

export type ModelsResponse = {
    Count: number
    Message: string
    SearchCriteria: null
    Results: ReadonlyArray<{
        Make_ID: number
        Make_Name: string
        Model_ID: number
        Model_Name: string
    }>
}
