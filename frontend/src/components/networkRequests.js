export const api = "https://dsewdfflaa4b0.cloudfront.net";

export const getAllFromTable = async (table) => {
    const data = await fetch(`${api}/${table}`)
    return data.json()
}
