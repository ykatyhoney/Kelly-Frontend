import * as React from 'react'
import { SearchBar } from 'react-native-elements'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export default class SearchScreen extends React.Component {
  state = {
    search: '',
  }

  updateSearch = (search) => {
    this.setState({search});
  }

  render() {
    const { search } = this.state;
    return (
      <View style={{flex:1}}>
        <SearchBar
          // lightTheme
          // round
          placeholder = "Type Here ..."
          onChangeText = {this.updateSearch}
          value = {search}
          searchIcon={{size_24: { size: 24 }}}
          style ={styles.search_style}
          inputContainerStyle={styles.search_input_container}
          containerStyle={styles.search_container}
        />
        <FlatList
          horizontal
          style={{backgroundColor: 'white'}}
          // data = {users}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  search_style: {
    width: "100%",
    backgroundColor: 'red', //no effect
    borderWidth: 0, //no effect
    shadowColor: 'white', //no effect
  },
  search_container: {backgroundColor: 'white',
    borderWidth: 0, //no effect
    shadowColor: 'white', //no effect
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  search_input_container: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    borderBottomColor: "#757575",
    borderBottomWidth: 1,
  }
})