import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
 scrollView: {
   backgroundColor: "rgb(173,216,230)",
 },
 engine: {
   position: 'absolute',
   right: 0,
 },
 body: {
   backgroundColor: "rgb(192,192,192)",
 },
 sectionContainer: {
   marginTop: 32,
   paddingHorizontal: 24,
 },
 sectionTitle: {
   fontSize: 24,
   fontWeight: '600',
   color: "rgb(192,192,192)",
 },
 sectionDescription: {
   marginTop: 8,
   fontSize: 18,
   fontWeight: '400',
   color: "rgb(128,128,128)",
 },
 highlight: {
   fontWeight: '700',
 },
 footer: {
   color: "rgb(192,192,192)",
   fontSize: 12,
   fontWeight: '600',
   padding: 4,
   paddingRight: 12,
   textAlign: 'right',
 },
});