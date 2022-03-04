import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';

const SignIn = ({navigation, route}) => {
    const username = route.params.username;
    const pswrd = route.params.pswrd;
    const [check, setCheck] = useState(false);
    const [userId, setuserId] = useState("");
    const [password, setPassword] = useState("");

function submit() {
    if(username != userId && pswrd != password)
        Alert.alert('Something went wrong')
    else navigation.navigate('Home', {user : `${username}`})
}

    return (
        <View style={styles.parentContainer}>
            <View style={styles.headContainer}>
                <Text style={styles.header}>Sign in</Text>
            </View>
            <View style={styles.userInputs}>
                <TextInput
                    style={[styles.nameInput, { width: '100%' }]}
                    placeholder="username"
                    onChangeText={id => {setuserId(id)}}
                />
                <TextInput
                    style={[styles.nameInput, { width: '100%' }]}
                    placeholder="password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={actualValue => {setPassword(actualValue)}}
                />
            </View>
            <View style={styles.termsConditions}>
                <CheckBox
                    style={styles.checkbox}
                    disabled={false}
                    value={check}
                    onValueChange={() => setCheck(!check)}
                />
                <Text style={styles.termsDescription}>
                    Check this box to agree our Terms and Conditions
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={check ? styles.SignInButton : styles.SignInButtonIfNotCHecked}
                    disabled = {!check}
                    onPress={submit}>
                    <Text style={styles.ButtonText}>Sign in</Text>
                </TouchableOpacity>
                <Text style={styles.SignInDescription}>
                    new user? create an Account.
                </Text>
            </View>
        </View>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    parentContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headContainer: {
        marginTop: 30,
    },
    header: {
        fontSize: 80,
        fontFamily: 'OpenSans-SemiBold',
        color: '#002F75',
    },
    nameInput: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 14,
        paddingLeft: 10,
        fontSize: 20,
        width: '40%',
    },
    userInputs: {
        width: '90%',
        marginTop: 40,
        justifyContent: 'space-between',
        height: 140,
    },
    termsConditions: {
        flexDirection: 'row',
        marginTop: 40,
        alignItems: 'center',
        width: '90%',
    },
    checkbox: {
        transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }],
    },
    termsDescription: {
        fontSize: 16,
        fontFamily: 'OpenSans-Light',
    },
    buttonContainer: {
        width: '90%',
        alignItems: 'center',
        marginTop: 40,
    },
    SignInButton: {
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#002F75',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#002F75',
    },
    SignInButtonIfNotCHecked: {
        backgroundColor: '#7D7D7D',
        borderColor: '#7D7D7D',
        borderWidth: 1.5,
        borderRadius: 10,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    ButtonText: {
        fontSize: 20,
        fontFamily: 'OpenSans-Medium',
        color: 'rgb(255,255,255)',
    },
    SignInDescription: {
        marginTop: 10,
        fontSize: 16,
    },
    mismatch: {
        alignSelf: 'center',
        fontSize: 20,
        fontFamily: 'OpenSans-Light',
        color: 'red',
        marginTop: -30
    }
});
