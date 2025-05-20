export default async function postContact(name, email, message){

    const res = await fetch('/api/contact', {
        method: 'POST',
        headers:{
            'Content-Type': "application/json"
        },
        body: JSON.stringify({name, email, message})
    })

    if(!res.ok){
        throw new Error("Error Occurred")
    }

    return res.json()
}