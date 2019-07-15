import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import IndexReducer from './redux/reducers/index'
import { connect } from 'react-redux'
import { changeTextValue } from './redux/actions/text'



export class routing extends Component {
    changeThisText = (val) => {
        console.log(val)
        this.props.changeText(val)
      }
    render() {
        return (
            
            <View>
                <TextInput 
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(val)=>this.changeThisText(val)}
                />
                <Text> {this.props.text ? this.props.text.data : null } </Text>
            </View>
           
        )
    }
}

const mapStateToProps = state => ({
    text : state.text
  })
  
  const mapDispatchToProps = dispatch => {
    return {
        changeText : data => dispatch(changeTextValue(data)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(routing)
