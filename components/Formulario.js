import React,{useState} from 'react'
import shortId from 'shortid'

import {StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Alert,ScrollView} from 'react-native';

import DateTimePickerModal from "react-native-modal-datetime-picker";

const Formulario = ({citas,setCitas,handleShowForm}) => {

    const [date,setDate] = useState('')
    const [time,setTime] = useState('')

    const [doctor,setDoctor] = useState('')
    const [tel,setTel] = useState('')
    const [paciente,setPaciente] = useState('')
    const [sintomas,setSintomas] = useState('')

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    
    const handleConfirmDate = (date) => {
        const options = {year:'numeric',month:'long',day:'2-digit'}

        setDate(date.toLocaleDateString('es-ES',options))

        hideDatePicker();
    }

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirmTime = (time) => {

        const options = {hour:'numeric',minute:'2-digit'}

        setTime(time.toLocaleString('en-US',options))
        hideTimePicker();
    }

    const handleNewCita = () => {
        console.log('Creando nueva cita...')

        if(paciente.trim()=== '' || doctor.trim()=== '' || tel.trim()=== '' || sintomas.trim()=== '' || date.trim()=== '' || time.trim()=== ''){
            //Falla la validacion
            showAlert()
        }else{
            const cita = {paciente,doctor,tel,date,time,sintomas}

            cita.id = shortId.generate()

            console.log(cita)

            const newCitas = [...citas,cita]

            setCitas(newCitas)

            handleShowForm()

        }
        
    }

    // mustre alerta

    showAlert = () => {
        Alert.alert('Error', 'Todos los campos son obligatorios',[{text:'OK'}])
    }


    return (

        <ScrollView style={styles.formulario}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ texto => setPaciente(texto)}
                />
            </View>

            <View>
                <Text style={styles.label}>Doctor:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ (texto) => setDoctor(texto)}
                />
            </View>

            <View>
                <Text style={styles.label}>Contacto:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ (texto) => setTel(texto)}
                    keyboardType='numeric'
                />
            </View>

            <View>
            <Text style={styles.label}>Fecha:</Text>

                <Button title="Show Date Picker" onPress={showDatePicker} />

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirmDate}
                    onCancel={hideDatePicker}
                />

                <Text>{date}</Text>
            </View>

            <View>
            <Text style={styles.label}>Hora:</Text>

                <Button title="Show Time Picker" onPress={showTimePicker} />

                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleConfirmTime}
                    onCancel={hideTimePicker}
                    is24Hour
                />

                <Text>{time}</Text>

            </View>

            <View>
                <Text style={styles.label}>Sintomas:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ (texto) => setSintomas(texto)}
                    multiline
                />
            </View>

            <View>
                <TouchableHighlight onPress={()=>handleNewCita()} style={styles.btnEliminar}>
                    <Text style={styles.textEliminar}> Submit &times;</Text>
                </TouchableHighlight>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    formulario:{
        backgroundColor:'#FFF',
        paddingHorizontal:20,
        paddingVertical:10,
        marginHorizontal:'2.5%',
        marginVertical:20
    },

    label:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:10,
    },
    input:{
        marginTop:10,
        height:50,
        borderColor:'#e1e1e1',
        borderWidth:1,
        borderStyle:'solid'
    },
    btnEliminar:{
        backgroundColor:'#CCAAFF',
        padding:10,
        marginVertical:10
    },
    textEliminar:{
        color:'#FFF',
        textAlign:'center',
        fontWeight:'bold'
    }
})

export default Formulario;