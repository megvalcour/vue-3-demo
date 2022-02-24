/**
 * @function searchFilter
 * @param  {Object} item       Element being tested
 * @param  {String} searchTerm Search term tested against
 * @param  {Array} fields     List of fields to test
 * @return {Boolean} If any fields within item include search term
 */
const searchFilter = ( item, searchTerm, fields = [] ) => {
    let includesTerm = false
    if(fields.length){
        fields.forEach( (field) => {
            if(itemMatchesSearchTerm(item[field], searchTerm)){
                includesTerm = true
                return
            }
        })
    }
    return includesTerm
}

/**
 * @function itemMatchesSearchTerm
 * @param  {String} sample     Item being tested
 * @param  {String} searchTerm Search term to test against
 * @return {Boolean} {description}
 */
const itemMatchesSearchTerm = (sample, searchTerm) => {
    return sample.toLowerCase().includes(searchTerm.toLowerCase())
}

export { searchFilter }