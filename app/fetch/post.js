export default function Post(url,data){
    return new Promise((resolve,reject)=>{
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json,text/plain,*',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data          
        })
        .then(res => res.json())
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
}