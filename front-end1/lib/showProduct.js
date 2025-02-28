export async function showProducts(id){
    try{

        const res = await fetch(`http://localhost:8000/product/`)
        if(!res.ok){
            throw new Error('Error fetching products')
        }
        const result = await res.json()
        return result.data.find((product)=> product._id === id) || null
    }catch(err){
        console.error('Error:', err)
        throw err
    }
}