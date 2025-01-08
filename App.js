import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);

    setModalIsVisible(false);
  }

  function deleteGoalHandler(key) {
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((goal) => goal.key !== key);
    });
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#b180f0"
          onPress={startAddGoalHandler}
        />

        {/* Input Area */}
        <GoalInput
          visible={modalIsVisible}
          addGoal={addGoalHandler}
          endGoal={endAddGoalHandler}
        />

        {/* Hold list of goals rendered */}
        <View style={styles.goalsContainer}>
          {/*only renders elements currently on the screen, unlike
        scrollview,which renders everything */}
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.key}
                  deleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.key;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 4,
  },
});
