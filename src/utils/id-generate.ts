export const idGenerate = () => {
    const date = new Date()
    const id = date.getTime() + date.getDate() + date.getFullYear()

    return id
}