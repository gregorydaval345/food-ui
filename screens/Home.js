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
import TrendingCard from "../components/TrendingCard";

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

  function renderSearchBar() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}
      >
        <Image
          source={icons.search}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray,
          }}
        />
        <TextInput
          style={{ marginLeft: SIZES.radius, ...FONTS.body3 }}
          placeholderTextColor={COLORS.gray}
          placeholder="Search Recipes"
        />
      </View>
    );
  }

  function renderSeeRecipeCard() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGreen,
        }}
      >
        {/* Image */}
        <View
          style={{ width: 100, alignItems: "center", justifyContent: "center" }}
        >
          <Image source={images.recipe} style={{ width: 80, height: 80 }} />
        </View>

        {/* Text */}
        <View style={{ flex: 1, paddingVertical: SIZES.radius }}>
          <Text style={{ width: "70%", ...FONTS.body4 }}>
            You have 12 recipes that you haven't tried yet
          </Text>
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => console.log("See Recipes")}
          >
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: "underline",
                ...FONTS.h4,
              }}
            >
              See Recipes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTrendingSection() {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Text style={{ marginHorizontal: SIZES.padding, ...FONTS.h2 }}>
          Trending Recipe
        </Text>
        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View>
                {/* <Text>{item.name}</Text> */}
                <TrendingCard recipeItem={item} />
              </View>
            );
          }}
        ></FlatList>
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
            {renderSearchBar()}
            {/* See Recipe Card */}
            {renderSeeRecipeCard()}
            {/* Trending Section */}
            {renderTrendingSection()}
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
