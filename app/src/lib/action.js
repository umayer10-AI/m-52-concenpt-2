"use server"

export const createData = async(formData) => {
    const res = await fetch(`http://localhost:5000/destination`,{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    const data = await res.json()
    console.log(formData)
    return data
}