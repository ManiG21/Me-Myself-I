export const api = "http://localhost:3030";

export const getAllFromTable = async (table) => {
    const data = await fetch(`${api}/${table}`)
    return data.json()
}
