import React from 'react'

import {StyleSheet,Text,View,TouchableHighlight} from 'react-native';

const Cita = ({cita,deleteCita}) => {

    const handleDelete= id =>{
        console.log('eliminando...',id)
       
        deleteCita(id)
    }

    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <Text>{cita.paciente}</Text>
                <Text style={styles.label}>Doctor:</Text>
                <Text>{cita.doctor}</Text>
                <Text style={styles.label}>Sintomas:</Text>
                <Text>{cita.sintomas}</Text>
                <Text style={styles.label}>Fecha:</Text>
                <Text>{cita.time} , {cita.date}</Text>
            </View>

            <View>
                <TouchableHighlight onPress={()=>handleDelete(cita.id)} style={styles.btnEliminar}>
                    <Text style={styles.textEliminar}> Eliminar &times;</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cita:{
        backgroundColor:'#CCCCEE',
        borderBottomColor:'#e1e1e1',
        borderStyle:'solid',
        borderBottomWidth:1,
        paddingVertical:20,
        paddingHorizontal:10
    },
    label:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:10,
    },
    btnEliminar:{
        backgroundColor:'red',
        padding:10,
    },
    textEliminar:{
        color:'#FFF',
        textAlign:'center',
        fontWeight:'bold'
    }
})

export default Cita;