// 90 c 20 min
export const updateObrectInArray = (items, itemId, objPropName, newObjProps) => { 
   return items.map(u => {
    if (u[objPropName] === itemId) {
        return {...u, ...newObjProps}
    }
    return u
})
}
