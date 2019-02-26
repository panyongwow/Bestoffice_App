export default function Get(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                return resolve(result)
            })
            .catch(error => {
                return reject(error)
            })
    })
}