import React, {useState} from 'react'
import { StyleSheet, Text, View, Button , Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

const Step1 = ({navigation}) => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    return (
        <View style={styles.container} >
            <View style={styles.vi}>
                <View style={styles.vil}>
                    <Text style={styles.h1}>
                        Select the date you want to rent 
                    </Text>
                </View>
                <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
            </View>
        </View>
 )
}

export default Step1

const styles = StyleSheet.create({
 container: {
     flex: 1,
 },
 h1:{
    fontSize:20,
 },
 vi:{
     flex: 5,
 },
 vil:{
     flex: 5,
     alignItems: "center",

 },
 vi1:{
     flex:1,
     justifyContent: 'center',
     alignItems: "center",
 },
})
