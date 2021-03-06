import React from 'react';
import { View, TextInput, Button } from 'react-native';
import {connect} from 'react-redux'


const formCadastro = props => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 4, justifyContent: 'center' }}>
            <TextInput value={props.nome} placeholder="Nome" style={{ fontSize: 20, height: 45 }} />
            <TextInput value={props.email}placeholder="E-mail" style={{ fontSize: 20, height: 45 }} />
            <TextInput value={props.senha} placeholder="Senha" style={{ fontSize: 20, height: 45 }} />
        </View>
        <View style={{ flex: 1 }}>
            <Button title="Cadastrar" color="#115E54" onPress={() => false}  buttonStyle={{borderColor:'#115E54',borderWidth:1}}/>
        </View>
    </View>
);


mapStateToProps = (state) => (
    {
        nome:  state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha

    }
)
export default connect(mapStateToProps,null)(formCadastro)