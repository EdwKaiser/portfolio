async function fetchData (pathname) {
    try{
        const response = await fetch(pathname)
        if(response.ok) {
            const data = response.json()
            return data
        } else {
            console.error("Erreur lors de la récupération des données")
            return null
        }
    }catch (error) {
        console.error('Erreur lors de la récupération des données :', error)
        return null
    }
}

export default fetchData