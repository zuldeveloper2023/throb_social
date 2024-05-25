import React, { memo, useCallback, useState } from 'react'
import { Text } from 'react-native'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'

export default Autocomplete = memo(({ placeholder, autocompleteApiUrl, searchApiUrl,searchResults,setSearchResults }) => {

    const [loading, setLoading] = useState(false)
    const [remoteDataSet, setRemoteDataSet] = useState(null)
    const [selectedItem, setSelectedItem] = useState(null)
    //const [searchResults, setSearchResults] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);
    const getSuggestions = useCallback(async q => {
        const filterToken = q.toLowerCase()
        if (typeof q !== 'string' || q.length < 3) {
            setRemoteDataSet(null)
            return
        }
        setLoading(true)

        const response = await fetch(autocompleteApiUrl).then((data) => new Promise(res => {
            setTimeout(() => res(data), 2000)
        }))
        const items = await response.json()

        /*const suggestions = items
          .filter(item => item.title.toLowerCase().includes(filterToken))
          .map(item => ({
            id: item.id,
            title: item.title,
          }))
          */
        const suggestions = [
            { id: '1', title: 'Electrician' },
            { id: '2', title: 'Apprentice Electrician' },
            { id: '3', title: 'Plumbing' },
        ];
        setRemoteDataSet(suggestions)
        setLoading(false)
    }, [])

    const search = async (searchTerm) => {
        setSearchLoading(true);
        setSelectedItem(searchTerm);
        const response = await fetch(searchApiUrl).then((data) => new Promise(res => {
            setTimeout(() => res(data), 2000)
        }))
        const items = await response.json()
        //console.log(items)
        setSearchResults(items);
        //console.log(searchResults)
        setSearchLoading(false);
    }
    return (
        <>
            <AutocompleteDropdown
                dataSet={remoteDataSet}
                closeOnBlur={false}
                useFilter={false}
                clearOnFocus={false}
                textInputProps={{
                    placeholder: placeholder,
                }}
                onSelectItem={(item) => { search(item) }}
                loading={loading}
                onChangeText={getSuggestions}
                suggestionsListTextStyle={{
                    color: '#8f3c96',
                }}
                EmptyResultComponent={<Text style={{ padding: 10, fontSize: 15 }}>No match found</Text>}
            />
            <Text></Text>
            {searchLoading && <Text style={{ marginLeft: 140 }}>Searching...</Text>}

        </>
    )
})
