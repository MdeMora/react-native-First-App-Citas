import React,{useState} from 'react';

import {StyleSheet,Text,View,FlatList,TouchableHighlight,Platform,TouchableWithoutFeedback, Keyboard} from 'react-native';

import Cita from './components/Cita'
import Formulario from './components/Formulario'


const App = () => {

  const [citas,setCitas]=useState([
    {id:'1',paciente:"Hook"},
    {id:'2',paciente:"Redux"}
  ])

  const [showForm, setShowForm] = useState(true)

  const deleteCita = id => {
    setCitas( (citasActuales) =>{
      return citasActuales.filter(cita => cita.id !== id)
    })
  }

  const handleShowForm = () => {

    setShowForm(!showForm)

  }

  const closeKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback onPress={()=>closeKeyboard()}>
    <View style={styles.wrapper}>
      <Text style={styles.title}>Administrador de Citas</Text>

      <TouchableHighlight onPress={()=>handleShowForm()} style={styles.btnEliminar}>
          <Text style={styles.textEliminar}> {showForm?'Cancelar crear cita': ' Crear nueva cita'}</Text>
      </TouchableHighlight>

      <View style={styles.contenido}>

        {showForm? (
          <>
          <Text style={styles.title}> Crear nueva cita</Text>
          <Formulario citas={citas} setCitas={setCitas} handleShowForm={handleShowForm}/>
          </>
        ):(
          <>
            <Text style={styles.title}>{citas.length>0 ? 'Administra tus citas' : 'No hay citas' }</Text>

            <FlatList
            style={styles.listado}
            data={citas} 
            keyExtractor={item=>item.id} 
            renderItem={( {item} ) => <Cita cita={item} deleteCita={deleteCita}/>}/> 
          </>
        )}

      </View>
      </View>
    </TouchableWithoutFeedback> 
  );
};

const styles = StyleSheet.create({
  title:{
    marginTop: Platform.OS === 'ios'? 40 : 10 ,
    fontSize:24,
    fontWeight:'bold',
    textAlign:"center",
  },
  wrapper:{
    backgroundColor:'#CCAAFF',
    flex:1
  },
  contenido:{
    flex:1,
    marginHorizontal:'2.5%'
  },
  listado:{
    flex:1
  },
  textEliminar:{
    color:'#FFF',
    textAlign:'center',
    fontWeight:'bold'
  },
  btnEliminar:{
  backgroundColor:'#AAAAFF',
  padding:10,
  marginVertical:10
  },
});

export default App;
