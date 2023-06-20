import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
} from "react-native";

import { FONTS, COLORS, SIZES, dummyData, icons, images } from "../constants";

import { CategoryCard } from "../components";

const Home = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          alignItems: "center",
          height: 80,
        }}
      >
        {/* Text */}
        <View style={{ flex: 1 }}>
          <Text style={{ color: COLORS.darkGreen, ...FONTS.h2 }}>
            Hello, Daval
          </Text>
          <Text style={{ marginTop: 3, color: COLORS.gray, ...FONTS.body3 }}>
            What do you want to track today?
          </Text>
        </View>
        {/* Profile Image */}
        <TouchableOpacity
          onPress={() => console.log("Profile image clicked ...")}
        >
          <Image
            source={images.profile}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderHeader()}
            {/* Search bar */}

            {/* See Recipe Card */}

            {/* Trending Section */}

            {/* Category Header */}
          </View>
        }
        renderItem={({ item }) => {
          return (
            <View>
              <CategoryCard
                categoryItem={item}
                containerStyle={{
                  marginHorizontal: SIZES.padding,
                }}
                onPress={() => navigation.navigate("Recipe", { recipe: item })}
              />
            </View>
          );
        }}
        ListFooterComponent={<View style={{ marginBottom: 100 }}></View>}
      />
    </SafeAreaView>
  );
};

export default Home;
