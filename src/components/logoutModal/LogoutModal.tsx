import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {styles} from './logoutModalStyles';

export default function LogoutModal({
  close,
  isVisible,
}: {
  close: () => void;
  isVisible: boolean;
}) {
  return (
    <Modal transparent={true} animationType="slide" visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.text}>Are you sure you want to log out?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => close()}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => close()}>
              <Text style={styles.logoutButtonText}>Log Out</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
        </View>
      </View>
    </Modal>
  );
}
