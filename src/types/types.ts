
export type FieldProps = {
    placeholder: string | ''
    required: boolean
    name: string
}

export type SelectOptionsType = {
    label: string
    value: string
}

export type FormElementType = {
    title: string
    selectOptions?: Array<SelectOptionsType>
    attributes: FieldProps
    photoAspect?: PhotoAspectsType
    photo?: string
}
export type PhotoAspectsType = {
    icon: string
    id: string
    title: string
}
export type SuggestCategoryType = {
    id?: string
    parent?: string
    slug: string
    title: string
}
export type FilterType = {
    key: string
    value: string
}
export type ProductType = {
    title?: string
    slug?: string
    description?: string
    composition?: string
    terms_of_payment?: string
    brand?: string
    add_brand?: string
    condition?: string
    category_list?: string[]
    price_current?: string
    price_origin?: string
    is_bargain?: string
    is_barter?: string
    is_gift?: string
    phone?: string
    show_phone?: string
    color?: string
    year?: string
    height?: string
    size?: string
    filters?: FilterType[]
    photos?: string[]
}

export type MainFormFieldsType = {
    title: FormElementType
    description: FormElementType
    composition: FormElementType
    terms_of_payment: FormElementType
}

export type CategoryParamsOptionsType = {
    brands: any
    conditions: any
    colors: any
    years: any
    heights: any
    sizes: any
    filters: any
}

export type CategoryType = {
    icon?: string,
    title: string,
    slugs: string[]
    slug: string
    id?: number
    isBaby?: boolean
    isEveryone?: boolean
    isSpecial?: boolean
    gender?: number
    parent?: number | null
    children?: CategoryType[]
}

export type SelectedCategoryType = {
    title: string
    slug: string
}


export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never