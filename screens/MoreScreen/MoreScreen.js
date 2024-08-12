import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, Pressable, TextInput } from "react-native";

const MoreScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        {/* Header */}
        <View>
          <Image style={styles.profileImage} source={require("../../images/Emenaldo.png")} />
          <Text style={styles.profileText}>Emenaldo</Text>
        </View>
        <View>
          <Image style={styles.profileImage} source={require("../../images/Onyeka.png")} />
          <Text style={styles.profileText}>Onyeka</Text>
        </View>
        <View>
          <Image style={styles.profileImage} source={require("../../images/Thelma.png")} />
          <Text style={styles.profileText}>Thelma</Text>
        </View>
        <View>
          <Image style={styles.profileImage} source={require("../../images/Kids.png")} />
          <Text style={styles.profileText}>Kids</Text>
        </View>
        <View>
          <Image style={styles.addButton} source={require("../../images/btnAdd.png")} />
        </View>
      </View>

      {/* Body */}
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <Image style={styles.pencilIcon} source={require("../../images/bx_bxs-pencil.png")} />
        <Text style={styles.manageProfilesText}>Manage Profiles</Text>
      </View>

      {/* Body -> TodoLink */}
      <View style={styles.todoLinkContainer}>
        <View style={styles.todoLinkHeader}>
          <Image style={styles.commentIcon} source={require("../../images/comment.png")} />
          <Text style={styles.tellFriendsText}>Tell friends about Netflix.</Text>
        </View>
        <View>
          <Text style={styles.loremIpsumText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui, vivamus bibendum ut. A morbi mi tortor ut felis non accumsan accumsan quis. Massa, id ut ipsum aliquam enim non posuere pulvinar diam.
          </Text>
        </View>
        <View>
          <Text style={styles.termsText} onPress={() => navigation.navigate('TermsConditions')}>Terms & Conditions</Text>
        </View>
        <View style={styles.copyLinkContainer}>
          <TextInput style={styles.copyLinkInput} placeholder="Enter Link" placeholderTextColor="#8C8787" />
          <Pressable style={styles.copyLinkButton}>
            <Text style={styles.copyLinkButtonText}>Copy Link</Text>
          </Pressable>
        </View>
        <View style={styles.shareIconsContainer}>
          <Image style={styles.shareIcon} source={require("../../images/logos_whatsapp.png")} />
          <Image style={styles.shareIcon} source={require("../../images/logos_facebook.png")} />
          <Image style={styles.shareIcon} source={require("../../images/Gmail-logo 1.png")} />
          <Pressable style={styles.moreIconContainer}>
            <Image style={styles.moreIcon} source={require("../../images/bx_bx-dots-vertical-rounded.png")} />
            <Text style={styles.moreIconText}>More</Text>
          </Pressable>
        </View>
        <View style={styles.myListContainer}>
          <Image style={styles.checkIcon} source={require("../../images/check.png")} />
          <Text style={styles.myListText}>My List</Text>
        </View>
        <View style={styles.divider} />
      </View>

      <View style={styles.appSettingsContainer}>
        <Text style={styles.appSettingsText}>App Settings</Text>
        <View style={styles.dividerVertical} />
        <Text style={styles.appSettingsText}>Account</Text>
        <View style={styles.dividerVertical} />
        <Text style={styles.appSettingsText}>Help</Text>
        <View style={styles.dividerVertical} />
        <Text style={styles.appSettingsText}>Sign Out</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  profileImage: {
    width: 73,
    height: 69,
    borderRadius: 9,
    marginRight: 3,
  },
  profileText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '400',
  },
  addButton: {
    width: 73,
    height: 69,
    borderRadius: 9,
    marginRight: 3,
  },
  pencilIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 3,
  },
  manageProfilesText: {
    color: 'rgba(255, 255, 255, 0.81)',
    fontSize: 16,
    fontWeight: '500',
  },
  todoLinkContainer: {
    width: "100%",
    height: 330,
    backgroundColor: '#1A1A1A',
  },
  todoLinkHeader: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
  },
  commentIcon: {
    width: 30,
    height: 30,
  },
  tellFriendsText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 15,
  },
  loremIpsumText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
    marginTop: 10,
    marginLeft: 20,
  },
  termsText: {
    color: '#C4C4C4',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    marginTop: 10,
    marginLeft: 20,
    textDecorationLine: "underline",
  },
  copyLinkContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
  },
  copyLinkInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#000',
    color: 'white',
  },
  copyLinkButton: {
    width: 100,
    height: 50,
    borderRadius: 2,
    backgroundColor: '#FFF',
    marginLeft: 10,
    justifyContent: 'center',
  },
  copyLinkButtonText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  shareIconsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
  },
  shareIcon: {
    width: 50,
    height: 50,
    marginLeft: 20,
  },
  moreIconContainer: {
    marginLeft: 20,
  },
  moreIcon: {
    width: 50,
    height: 35,
  },
  moreIconText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
  },
  myListContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 40,
  },
  checkIcon: {
    width: 40,
    height: 40,
  },
  myListText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 10,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: '#8C8787',
    marginTop: 10,
  },
  appSettingsContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  appSettingsText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 15,
  },
  dividerVertical: {
    width: 1,
    height: 20,
    backgroundColor: '#8C8787',
    marginLeft: 20,
    marginTop: 15,
  },
});

export default MoreScreen;
