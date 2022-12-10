export const api = "http://ec2-18-234-227-220.compute-1.amazonaws.com:3030";

export const getAllFromTable = async (table) => {
    const data = await fetch(`${api}/${table}`)
    return data.json()
}
