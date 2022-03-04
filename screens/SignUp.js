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

const SignUp = ({ navigation }) => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [check, setCheck] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPasword, setConfirmPassword] = useState('');
    const [userName, setUserName] = useState('');

    function passwordMismatch(pswrd, cnfpswrd) {
        if (pswrd !== cnfpswrd && cnfpswrd != '')
            return <Text style={styles.mismatch}>password mismatch</Text>;
    }

    function submit() {
        if (
            firstName == '' ||
            lastName == '' ||
            userName == '' ||
            password == '' ||
            confirmPasword == ''
        )
            Alert.alert('Something went wrong!');
        else if (password !== confirmPasword && confirmPasword != '')
            Alert.alert('Something went wrong!');
        else
            navigation.navigate('SignIn', {
                username: `${userName}`,
                pswrd: `${password}`,
            });
    }
    return (
        <View style={styles.parentContainer}>
            <View style={styles.headContainer}>
                <Text style={styles.header}>Sign Up</Text>
                <Text style={styles.headerDescription}>
                    It's free and only takes a minute
                </Text>
            </View>
            <View style={styles.nameContainer}>
                <TextInput
                    style={styles.nameInput}
                    placeholder="first name"
                    value={firstName}
                    onChangeText={e => setfirstName(e)}
                />
                <TextInput
                    style={styles.nameInput}
                    placeholder="last name"
                    value={lastName}
                    onChangeText={e => setlastName(e)}
                />
            </View>
            <View style={styles.userInputs}>
                <TextInput
                    style={[styles.nameInput, { width: '100%' }]}
                    placeholder="username"
                    value={userName}
                    onChangeText={e => setUserName(e)}
                />
                <TextInput
                    style={[styles.nameInput, { width: '100%' }]}
                    placeholder="password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={actualValue => {
                        setPassword(actualValue);
                    }}
                />
                <TextInput
                    style={[styles.nameInput, { width: '100%' }]}
                    placeholder="confirm password"
                    secureTextEntry={true}
                    onChangeText={typedConfirmPassword => {
                        setConfirmPassword(typedConfirmPassword);
                    }}
                />
            </View>
            {passwordMismatch(password, confirmPasword)}
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
                <TouchableOpacity
                    style={
                        check
                            ? styles.signUpButton
                            : styles.signUpButtonIfNotCHecked
                    }
                    disabled={!check}
                    onPress={submit}>
                    <Text style={styles.ButtonText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.SignInDescription}>
                    Already have an Account?
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SignIn', {
                                username: `${userName}`,
                                pswrd: `${password}`,
                            });
                        }}>
                        <Text
                            style={[
                                styles.SignInDescription,
                                { color: '#2B84C8' },
                            ]}>
                            {' '}
                            Sign in
                        </Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    parentContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
        alignItems: 'center',
    },
    headContainer: {
        marginTop: 10,
    },
    header: {
        fontSize: 80,
        fontFamily: 'OpenSans-SemiBold',
        color: '#002F75',
    },
    headerDescription: {
        fontSize: 16,
        fontFamily: 'OpenSans-Light',
        alignSelf: 'center',
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 40,
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
        height: 220,
        justifyContent: 'space-between',
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
    signUpButton: {
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#002F75',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#002F75',
    },
    signUpButtonIfNotCHecked: {
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
    },
});
