import React from 'react'
import { View } from 'react-native'
import AddEntry from './Components/addEntry'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import History from './Components/History'



class App extends React.Component{
  render(){
    return(
    <Provider store={createStore(reducer)}>
    <View style={{flex:1}}>
      <View style={{height:20}}/>
    <History/>
    </View>
    </Provider>
    )
  }
}

export default App