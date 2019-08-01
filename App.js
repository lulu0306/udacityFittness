import React from 'react'
import { View } from 'react-native'
import AddEntry from './Components/addEntry'



class App extends React.Component{
  render(){
    return(
      <View>
     <AddEntry/>
    </View>
    )
  }
}

export default App