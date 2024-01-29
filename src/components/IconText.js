import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'

const IconText = ({ iconName, iconColor }) => {
  return (
    <View>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={styles.populationText}>{bodyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default IconText
