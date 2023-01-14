export function filterDescription(description: string[], brand: string){
    return description.find((item) => item == brand)
}