export default obj => {
    return Object.keys(obj).map(key => {
        return {
            ...obj[key],
            id: key
        }
    });
}