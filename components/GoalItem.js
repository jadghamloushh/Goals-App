import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      onPress={props.deleteItem.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <Text style={styles.goalItem}>{props.text}</Text>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
