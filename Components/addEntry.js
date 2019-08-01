import React from 'react'
import {View} from 'react-native'
import {getMetricMetaInfo} from '../utils/helpers'

 class  AddEntry extends React.Component{
    render(){
        return(
            <View>
               {getMetricMetaInfo("bike").getIcon()}            
            </View>
        )
    }
}

export default AddEntry 