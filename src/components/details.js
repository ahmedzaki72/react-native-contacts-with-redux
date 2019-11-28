import React, { Component } from 'react';
import { StyleSheet, View, Text, Linking, Alert } from 'react-native';
import Button from '../common/button';
import Card from "../common/card";
import CardItem from "../common/cardItem";
import { connect } from 'react-redux';


class Details extends Component {
   
    callContact = () => {
      const phone = this.props.contact.phone
      const url = `tel:${phone}`;
      this.lunching(url)
    }

    textContact = () => {
      const text = this.props.contact.phone
      const url = `sms:${text}`;
      this.lunching(url);
    }

    lunching =  (url) => {
        Linking.canOpenURL(url) 
        .then ( supported => {
            if (!supported) {
                Alert.alert("App not supproted");
            }else {
                Linking.openURL(url);
            }
        })
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <View style={styles.container}>
                        <Text style={styles.name}>{this.props.contact.name}</Text>
                    </View>
                </CardItem>
                <CardItem>
                    <View style={styles.button}>
                        <Button onPress={this.callContact}>Call</Button>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={this.textContact}>Text</Button>
                    </View>
                </CardItem>
            </Card>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 20,
    },
    name: {
        fontSize: 18
    },
    button : {
        flex : 1,
        height : 70,
        marginHorizontal : 10
    }
})

const mapStateToProps = state => {
    return {
        contact : state.selection.contact
    }
}

export default connect(mapStateToProps)(Details);