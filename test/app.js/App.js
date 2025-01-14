import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Slider} from "react-native";
import {AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

const gray = "#91A1BD"

export default function App() {
  const NeuMorph = ({children, size, style}) => {
<<<<<<< HEAD
      return (
        <View style={styles.topShadow}>
          <View style={styles.bottomShadow}>
            <View
              style={[
                styles.inner,
                { width: size 40, height: size 40, borderRadius: size / 2 ll 40 / 2 },
                style
              ]}
            
            </View>
        </View>
              
      );
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}
=======
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View
            style={[
              style.inner,
              { width: size || 40, height: size || 40, borderRadius: size / 2 || 40 / 2},
              style
            ]}
          >
            {children}
          </View>
        </View>
      </View>
    )
  }

return (
  <View style={styles.container}>
    <SafeAreaView style={{ alignSelf: "stretch"}}>
      <View style={{ marginHorizontal: 32, marginTop: 32 }}>
        <View style={styles.topContainer}>
          <NeuMorph size={48}>
            <AntDesign name="arrowleft" size={20} color={gray} />
          </NeuMorph>

          <View>
            <Text style={styles.playing}>PLAYING NOW</Text>
          </View>

          <NeuMorph size={48}>
            <Entypo name="menu" size={24} color={gray} />
          </NeuMorph>
        </View>

        <View style={styles.songArtContainer}>
          <NeuMorph size={300}>
            <Image source={}/>
          </NeuMorph>
        </View>

        <View style={styles.songContainer}>
          <Text style={styles.title}>Lost it</Text>
          <Text style={styles.artist}>Flum fi. Vic Menas</Text>
        </View>

        <View style={StyleSheet.tackContainer}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.time}>1:21</Text>
            <Text style={styles.time}>3:46:21</Text>
          </View>

          <Slider
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#8AAAFF"
            maximumTrackTintColor="#DAE6F4"
            thumbTintColor="#7B9BFF"
          />
        </View>

        <View style={styles.controlsContainer}>
          <NeuMorph>
            <Ionicons name="ios-rewind" size={24} color={gray} />
          </NeuMorph>

          <NeuMorph>
            <Ionicons name="ios-pause" size={24} color={gray} />
          </NeuMorph>

          <NeuMorph>
            <Ionicons name="ios-fastforward" size={24} color={gray} />
          </NeuMorph>

        </View>

      </View>
    </SafeAreaView>
  </View>
)

//   return (
//     <View style={styles.container}>
//       <SafeAreaView style ={{alignSelf: "stretch"}}>
//         <View style ={{ marginHorizontal: 32, marginTop: 32}}>
//           <View style ={styles.topContainer}> 
//               <NeuMorph size={48}>
//                   <AntDesign name="arrowleft" size={"20"} color={gray} />
//               </NeuMorph>

//               <View>
//                 <Text style={styles.playing}>PLAYING NOW</Text>
//               </View>

//             <NeuMorph size={48}>
//               <Entypo name="menu" size={24} color={gray} />
//             </NeuMorph>
      
//       </View>



      
//       </View>

//     </View>
//   );
// }
>>>>>>> 262ffe3c70a2f22fc572f22979985a1d4fef6093




















































const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "#DEE9FD",
    alignItems: "center",
=======
    backgroundColor: '#DEE9FD',
    alignItems: 'center',
    justifyContent: 'left',

>>>>>>> 262ffe3c70a2f22fc572f22979985a1d4fef6093
  },
  topcontainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    inner: {
      backgroundColor: "#DEE9f7",
      alignItems: "center",
      justifyContent: "center",
      borderColor: "#E2ECFD",
      borderWidth: 1
    },
    topShadow: {
      width: -6,
      height: -6,
      shadowColor: "#FBFFFF"
    },
    bottomShadow: {
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowOpacity: 1,
      shadowRadius: 6,
      shadowColor: "#B7C4DD"
    },
    playing: {
      color: gray,
      fontWeight: "800"
    }





});
