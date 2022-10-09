function makeArray(collection){
    if(Array.isArray(collection)){
        return collection
    }
    else{
        let array = Object.values(collection)
        return array
    }
}

function myEach (collection, cb){
    const newCollection = makeArray(collection)
    
    for (let i=0; i<newCollection.length; i++){
        cb(newCollection[i])
    }

    return collection
}

function myMap (collection, cb){
    const newCollection= makeArray(collection)
    let newArray = []
    for (let i=0; i<newCollection.length; i++){
        newArray.push(cb(newCollection[i]))
    }

    return newArray
}

function myReduce (collection, cb, acc){
    let newCollection= makeArray(collection)
    if(!acc){
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }

    for (let i=0; i<newCollection.length; i++){
        acc = cb(acc, newCollection[i], newCollection)
    }

    return acc

}
function myFind (collection, predicate){
    const newCollection= makeArray(collection)

    for (let i=0; i<newCollection.length; i++){
        if(predicate(newCollection[i])){
            return collection[i]
        }
    }

    return undefined
}

function myFilter (collection, predicate){
    const newCollection= makeArray(collection)
    let newArray =[]
    for (let i=0; i<newCollection.length; i++){
        if(predicate(newCollection[i])){
            newArray.push(collection[i])
        }
    }

    return newArray
}

function mySize(collection){
    const newCollection= makeArray(collection)
    return newCollection.length
}

function myFirst (collection, n){
    const newCollection= makeArray(collection)

    let newArray =[]
    if (!n){
        return newCollection[0]
    }
    for (let i=0; i<n; i++){
        newArray.push(collection[i])
    }

    return newArray
}

function myLast (collection, n){

    if (!n){
        return collection[collection.length-1]
    }
    
    return collection.slice(collection.length-n, collection.length)
}

function myKeys(obj){
    let array = []
    for (let key in obj)
    {
        array.push(key)
    }

    return array
}

function myValues(obj){
    let array = []
    for (let key in obj)
    {
        array.push(obj[key])
    }

    return array
}