import React from 'react'
import {Text,View} from 'react-native'
import {connect} from 'react-redux'
import { receiveEntry,addEntry } from '../Actions';
import {timeToString,getDayliReminderValue} from '../utils/helpers'
import { fetchCalendarResults} from '../utils/api'
import UdaciFitnessCalendar from 'udacifitness-calendar'



class History extends React.Component{
    componentDidMount(){
        const {dispatch} = this.props
        fetchCalendarResults()
        .then((entries)=> dispatch(receiveEntry(entries)))
        .then(({entries})=>{
            if(!entries[timeToString()]){
                dispatch(addEntry({
                    [timeToString()]: getDayliReminderValue()
                }))
            }
        })
    }

    renderItem = ({today, ...metrics},formattedDate,key) =>(
          <View>
              {today 
              ? <Text>{JSON.stringify(today)}</Text>
            :<Text>{JSON.stringify(metrics)}</Text>}
          </View>  
    )

    renderEmptyDate(formattedDate){
        return(
            <View>
                <Text>No date for this day</Text>
            </View>
        )
    }
    render(){
        const {entries} = this.props
        return(
          
                <UdaciFitnessCalendar
                items={entries}
                renderItem={this.renderItem}
                renderEmptyDate={this.renderEmptyDate}
                />
         
        )
    }
}

function mapStateToProps(entries){
    return{
        entries
    }
}

export default connect(mapStateToProps)(History)