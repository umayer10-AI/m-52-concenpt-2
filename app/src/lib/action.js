// "use server"

import { redirect } from "next/navigation"
import toast from "react-hot-toast"

export const createData = async(formData) => {
    const res = await fetch(`http://localhost:5000/destination`,{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    const data = await res.json()
    if(data.insertedId){
        toast.success('Successfully Added Destination')
        redirect('/destination')
    }
    return data
}

export const deleteData = async (id) => {
    // const res = await fetch(`http://localhost:5000/destination/${id}`,{
    //     method: "DELETE"
    // })
    // const data = await res.json()
    console.log(id)
    // return data
}