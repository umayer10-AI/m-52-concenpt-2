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
    const res = await fetch(`http://localhost:5000/destination/${id}`,{
        method: "DELETE"
    })
    const data = await res.json()
    if(data.deletedCount > 0){
        toast.success('Destination Deleted')
        redirect('/destination')
    }
    return data
}

export const editUser = async (id,v) => {
    const res = await fetch(`http://localhost:5000/destination/${id}`,{
        method: "PUT",
        headers:{
            "content-type" : "application/json"
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    if(data.modifiedCount > 0){
        redirect(`/destination/${id}`)
    }
    return data
}

export const bookingPost = async (v) => {
    const res = await fetch(`http://localhost:5000/booking`,{
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    if(data.insertedId){
        toast.success('Booking Confirm')
    }
    return data
}

export const deleteBooking = async (id) => {
    const res = await fetch(`http://localhost:5000/booking/${id}`,{
        method: "DELETE"
    })
    const data = await res.json()
    if(data.deletedCount > 0){
        toast.error('Booking Canaceled')
        redirect('/booking')
    }
    
    return data
}