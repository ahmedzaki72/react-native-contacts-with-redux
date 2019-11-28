import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList , TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as action from '../action/index';



class Contacts extends Component {

    onContactSelect = (element) =>  {
     this.props.selectContact(element);
     this.props.navigation.navigate("details");
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.contacts}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                      <View style={styles.contact} >
                           <TouchableOpacity onPress={() =>this.onContactSelect(item)}> 
                                         <Text style={styles.name}>{item.name}</Text>
                                         <Text style={styles.phone}>{item.phone}</Text>
                           </TouchableOpacity>
                      </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contact:{
        flex:1,
        padding : 20,
        borderColor: "#ddd",
        borderBottomWidth: 1,
        backgroundColor : "#fff"
    },
    name : {
       fontSize : 17 
    },
    phone : {
        fontSize : 14,
        color : "#ddd"
    }
})

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps, action)(Contacts);



