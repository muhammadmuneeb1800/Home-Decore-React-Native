import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './inputStyles';
import {COLORS} from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Feather';

interface TextInputProps {
  title?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  placeholder: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

export default function Input(props: TextInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(
    props.secureTextEntry ?? false,
  );
  const handleTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <>
      {props.placeholder === 'Search' ? (
        <View style={styles.searchInput}>
          <TextInput
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            placeholderTextColor={COLORS.newBlack}
            style={styles.search}
            keyboardType={props.keyboardType}
          />
          <View style={styles.div}>
            <Ionicons
              name={'options-outline'}
              size={24}
              color={COLORS.blackDark}
            />
          </View>
        </View>
      ) : (
        <>
          {props.title && <Text style={styles.lable}>{props.title}</Text>}
          <View style={styles.inputBox}>
            <TextInput
              value={props.value}
              onChangeText={props.onChangeText}
              secureTextEntry={
                props.secureTextEntry ? isPasswordVisible : false
              }
              placeholder={props.placeholder}
              placeholderTextColor={COLORS.secondaryDark}
              style={props.secureTextEntry ? styles.input : styles.input1}
              keyboardType={props.keyboardType}
            />
            {props.secureTextEntry && (
              <TouchableOpacity onPress={handleTogglePassword}>
                <Icons
                  name={isPasswordVisible ? 'eye-off' : 'eye'}
                  size={20}
                  color={COLORS.secondaryDark}
                />
              </TouchableOpacity>
            )}
          </View>
        </>
      )}
    </>
  );
}
