import React from 'react';
import { ScrollView, View, Text, SafeAreaView, StatusBar } from "react-native";
import { appStyles } from "Styles";

export const App = () => {
 return (
   <>
     <StatusBar barStyle="dark-content" />
     <SafeAreaView>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={appStyles.scrollView}>
         <View style={appStyles.body}>
           <View style={appStyles.sectionContainer}>
             <Text style={appStyles.sectionTitle}>Step One</Text>
             <Text style={appStyles.sectionDescription}>
               Edit <Text style={appStyles.highlight}>App.js</Text> to change this
               screen and then come back to see your edits.
             </Text>
           </View>
           <View style={appStyles.sectionContainer}>
             <Text style={appStyles.sectionTitle}>Learn More</Text>
             <Text style={appStyles.sectionDescription}>
               Read the docs to discover what to do next:
             </Text>
           </View>
         </View>
       </ScrollView>
     </SafeAreaView>
   </>
 );
};
