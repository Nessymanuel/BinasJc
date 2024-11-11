// src/screens/TermsAndConditionsScreen/styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  contentContainer: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
  },
});

export default styles;
