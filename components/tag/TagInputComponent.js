import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, 
	StyleSheet } from 'react-native'; 

const TagInputComponent = ({itemList,mode}) => { 
	const [tags, setTags] = useState(itemList); 
	const [text, setText] = useState(''); 
	const [editIndex, setEditIndex] = useState(null); 

	const addTag = () => { 
		if (text.trim() !== '') { 
			if (editIndex !== null) { 

				// If editing an existing tag 
				const newTags = [...tags]; 
				newTags[editIndex] = text.trim(); 
				setTags(newTags); 
				setEditIndex(null); 
			} else { 

				// If adding a new tag 
				setTags([...tags, text.trim()]); 
			} 
			setText(''); 
		} 
	}; 

	const removeTag = (index) => { 
		const newTags = [...tags]; 
		newTags.splice(index, 1); 
		setTags(newTags); 
	}; 

	const editTag = (index) => { 
		const tagToEdit = tags[index]; 
		setText(tagToEdit); 
		setEditIndex(index); 
	}; 

	return ( 
		<View style={styles.container}> 
		{(mode=='edit')?
		<View>
			<View style={styles.inputContainer}> 
				<TextInput 
					style={styles.input} 
					placeholder="Add an item..."
					value={text} 
					onChangeText={setText} 
					onSubmitEditing={addTag} 
				/> 
				<TouchableOpacity onPress={addTag} 
					style={styles.addButton}> 
					<Text style={styles.buttonText}> 
						{editIndex !== null ? 'Update' : 'Add'} 
					</Text> 
				</TouchableOpacity> 
				
			</View>
			<Text></Text>
			
			</View>
            :''} 
			
			<View style={styles.tagContainer}> 
				{tags?.map((tag, index) => ( 
					<View key={index} 
						style={styles.tagWrapper}> 
						<TouchableOpacity 
							onPress={() => editTag(index)} 
							style={styles.tag}> 
							<Text style={styles.tagText}> 
								{tag} 
							</Text> 
						</TouchableOpacity> 
                        {(mode=='edit')?
						<TouchableOpacity 
							onPress={() => removeTag(index)} 
							style={styles.removeButton}> 
							<Text style={styles.removeButtonText}> 
								X 
							</Text> 
                        
						</TouchableOpacity> 
                        :''}
					</View> 
				))} 
			</View> 
            
		</View> 
	); 
}; 

const TagInputComponentWrapper = ({itemList,mode}) => { 
	return ( 
		<View style={styles.appContainer}> 
			<TagInputComponent itemList={itemList} mode={mode}/> 
		</View> 
	); 
}; 

const styles = StyleSheet.create({ 
	appContainer: { 
		//flex: 1, 
		//justifyContent: 'center', 
		//alignItems: 'center', 
		paddingLeft: 20, 
		backgroundColor: 'white', 
	}, 
	container: { 
        backgroundColor: 'white', 
		width: '100%', 
		paddingHorizontal: 0, 
	}, 
	tagContainer: { 
        
		flexDirection: 'row', 
		flexWrap: 'wrap', 
		marginBottom: 10, 
	}, 
	tagWrapper: { 
		flexDirection: 'row', 
		alignItems: 'center', 
		marginVertical: 9, 
		marginRight: 6, 
	}, 
	tag: { 
		backgroundColor: '#001b2e', 
		borderRadius: 20, 
		paddingHorizontal: 15, 
		paddingVertical: 15, 
	}, 
	tagText: { 
		color: 'white', 
		fontWeight: '100', 
        fontFamily:'Ruda_400Regular',
		fontSize: 11, 
	}, 
	removeButton: { 
        height:30,
        width:30,
		marginLeft: -20, 
        marginTop: -50,
		padding: 0, 
        //borderWidth: 2,
		borderRadius: 50, 
        //borderColor: 'organge',
		backgroundColor: '#b91b6f', 
	}, 
	removeButtonText: { 
        marginLeft:12,
        marginTop:8,
		color: 'white', 
		fontSize: 9, 
        fontWeight: 'bold', 
	}, 
	inputContainer: { 
		flexDirection: 'row', 
		alignItems: 'center', 
        paddingLeft: 0,
        paddingRight: 30,
	}, 
	input: { 
		flex: 1, 
		height: 40, 
		borderColor: '#CCCCCC', 
		borderWidth: 1, 
		paddingHorizontal: 10, 
		borderRadius: 5, 
		marginRight: 10, 
		backgroundColor: '#FFFFFF', 
	}, 
	addButton: { 
		backgroundColor: '#4CAF50', 
		paddingHorizontal: 15, 
		paddingVertical: 10, 
		borderRadius: 5, 
	}, 
	buttonText: { 
		color: '#FFFFFF', 
		fontSize: 16, 
		fontWeight: 'bold', 
	}, 
}); 

export default TagInputComponentWrapper;
