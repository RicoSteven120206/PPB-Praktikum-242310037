import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 24,
  },
  form: {
    width: "100%",
    padding: 50,
  },
  image: {
    alignItems: "center",
    marginBottom: 20,
  },
  imageBorder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: "blue",
    borderWidth: 5,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "gray",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
    marginRight: 10,
  },
  textInput: {
    borderColor: "#767676",
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    width: "100%",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 40,
  },
  btn_wrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#66dbfe",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  btn_text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default styles;
