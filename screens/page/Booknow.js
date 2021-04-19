import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'

const Booknow = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <ProgressSteps style={{flex:1}}
                completedProgressBarColor= '#ff9292'
                completedStepIconColor= '#ff9292'
                activeLabelColor= '#ff9292'
                activeStepIconBorderColor= '#ff9292'
                >
                <ProgressStep 
                    nextBtnStyle={styles.button}
                    nextBtnTextStyle={styles.text} >
                    <View style={{flex:1}} >
                        <Step1></Step1>
                    </View>
                </ProgressStep >
                <ProgressStep 
                    nextBtnStyle={styles.button} 
                    nextBtnTextStyle={styles.text} 
                    previousBtnStyle={styles.button} 
                    previousBtnTextStyle={styles.text} 
                    >
                    <View style={{flex:1}}>
                        <Step2></Step2>
                    </View>
                </ProgressStep>
                <ProgressStep 
                    nextBtnStyle={styles.button} 
                    nextBtnTextStyle={styles.text} 
                    previousBtnStyle={styles.button} 
                    previousBtnTextStyle={styles.text} 
                    onSubmit={() => navigation.navigate("Book") }
                    >
                    <View style={{flex:1}}>
                        <Step3></Step3>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
    )
}

export default Booknow

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f875aa',
        padding: 13,
        borderRadius: 16,
    }, 
    text: {
        color: "white",
    }, 
})
