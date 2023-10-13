import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const FAQSection = ({ section }) => {
  const [expandedQuestionIndex, setExpandedQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedQuestionIndex(index === expandedQuestionIndex ? null : index);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.title}>{section.title}</Text>
      {section.questions.map(([question, answer], index) => (
        <View key={index}>
          <TouchableOpacity onPress={() => toggleQuestion(index)}>
            <Text style={styles.question}>{question}</Text>
          </TouchableOpacity>
          {index === expandedQuestionIndex && <Text style={styles.answer}>{answer}</Text>}
        </View>
      ))}
    </View>
  );
};

export default FAQSection;
