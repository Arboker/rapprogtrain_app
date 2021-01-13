import React, { Component } from 'react';
import {
    TextInput, Text, View, Image, TouchableOpacity, ScrollView, AsyncStorage, ActivityIndicator,
    Dimensions, Modal, StyleSheet
} from 'react-native';
import { HeaderBackButton } from 'react-navigation-stack'

import { light, dark } from '../assets/theme'
import * as firebase from 'firebase';

import * as ImagePicker from 'expo-image-picker';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Entypo from 'react-native-vector-icons/Entypo'

export default class CreatePost extends Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: "Редактирование",
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} tintColor={global.themeNow == "dark" ? "white" : "black"} />,
            /* These values are used instead of the shared configuration! */
            headerStyle: {
                backgroundColor: global.themeNow == "dark" ? "#171717" : "white",
                color: navigation.getParam('Color') == "dark" ? "white" : "black",
                elevation: 0,
                borderBottomWidth: 1,
                borderBottomColor: global.themeNow == "dark" ? "#303030" : "#dddddd",
            },
            headerTitleStyle: {
                color: navigation.getParam('Color')
            },
            cardStyle: { backgroundColor: global.themeNow == "dark" ? "#212121" : "white" },
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            theme: '',
            text: '',
            imageSet: [],
            modalVisible: false,
            textLink: "",
            addedLink: false,
            textToInsert: "",
            canAddText: true,
            textInserted: false
        }
    }

    async componentDidMount() {
        const value = await AsyncStorage.getItem('theme')
        this.setState({
            theme: value,
            loading: false
        })
        this.props.navigation.setParams({
            Theme: value == "dark" ? "#171717" : "white",
            Color: value == "dark" ? "white" : "black",
            BrdColor: value == "dark" ? "#303030" : "#dddddd",
        });

    }

    postCreate = text => {
        if (this.state.canAddText) {
            this.setState({ textToInsert: text })
        }
        else {
            if (!this.state.textInserted) {
                const matchesNew = this.state.textToInsert.match(/\[(.*?)\]/);
                const link = matchesNew[1].match(/\(([^)]+)\)/)[1];
                this.setState({
                    text: this.state.textToInsert.replace("<Link href=[(" + link + ")]>", '') + text,
                    textInserted: true
                })
            }
            else {
                this.setState({
                    text: text,
                })
            }
        }
        // console.log(this.state.text)
    }

    saveData = async () => {
        const dataFile = new FormData();

        this.state.imageSet.map(data => {
            dataFile.append("image", {
                uri: data.uri,
                name: "photo_1",
                type: "image/png",
            });
        })

        var responseJson = "";
        console.log(this.state.imageSet.length)

        if (this.state.imageSet.length !== 0) {
            //Please change file upload URL
            let res = await fetch(
                'http://rapprogtrain.com/server-side/social/upload_foto.php',
                {
                    method: 'post',
                    body: dataFile,
                    headers: {
                        'Content-Type': 'multipart/form-data; ',
                    },
                }
            );
            responseJson = await res.json();
            console.log(responseJson)
        }

        console.log(responseJson)

        var resultText = this.state.textToInsert + this.state.text;
        console.log(resultText)

        var findLink = '<Link href=';
        var resultLinkText = this.state.textToInsert;
        if (resultLinkText.includes(findLink)) {
            const matchesNew = resultLinkText.match(/\[(.*?)\]/);
            const link = matchesNew[1].match(/\(([^)]+)\)/)[1];
            if (resultLinkText.includes('<Link href=[(' + link + ')]>')) {
                const dataBeforeNow = resultLinkText.substr(0, resultLinkText.indexOf('<Link href=[(' + link + ')]>')).replace(/\s*$/, "");
                var lengthResult = dataBeforeNow.length;
                var removedText = this.state.text.substring(lengthResult);
                resultText = this.state.textToInsert + removedText;
            }
        }

        // console.log(responseJson == "")

        fetch('http://rapprogtrain.com/server-side/social/insert_post.php?user=' +
            firebase.auth().currentUser.uid, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: resultText.replace(/\s*$/, ""), image: responseJson })
        })
            .then((response) => JSON.stringify(response.json()))
            .then((responseData) => { console.log(responseData) })
            .catch((err) => { console.log(err); });

        this.props.navigation.goBack(null)

    }

    getImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });
        console.log(result.uri)

        if (result.cancelled == true) {

        }
        else {
            console.log("not cancelled")
            const propImage = result.width / Dimensions.get('window').width;
            const newHeight = result.height / propImage;
            result.height = newHeight;
            this.setState({
                imageSet: this.state.imageSet.concat(result)
            })
        }
    }

    changeLink = text => {
        this.setState({ textLink: text })
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    addLink = () => {
        var textLinkToAdd = this.state.textLink;
        if (this.state.textLink !== "") {
            const withHttp = url => !/^https?:\/\//i.test(url) ? `http://${url}` : url;
            textLinkToAdd = withHttp(textLinkToAdd);
        }
        else {
            textLinkToAdd = this.state.textLink;
        }
        const linkToAdd = "<Link href=[(" + textLinkToAdd + ")]>";
        this.setState({
            modalVisible: false,
            textToInsert: this.state.textToInsert + linkToAdd,
            addedLink: true,
            canAddText: false,
        });
        // const matchesNew = this.state.textToInsert.match(/\[(.*?)\]/);
        // const link = matchesNew[1].match(/\(([^)]+)\)/)[1];
        this.setState({
            text: this.state.textToInsert,
            textInserted: true
        })
        console.log(this.state.textToInsert + linkToAdd)

    }

    render() {
        console.log(this.state.textToInsert + " - " + this.state.text)
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20, }}>
                    <ActivityIndicator />
                </View>
            )
        }
        const { modalVisible } = this.state;
        var { textToInsert } = this.state;
        var findLink = '<Link href=';
        if (textToInsert.includes(findLink)) {
            const matchesNew = textToInsert.match(/\[(.*?)\]/);
            const link = matchesNew[1].match(/\(([^)]+)\)/)[1];
            if (textToInsert.includes('<Link href=[(' + link + ')]>')) {
                textToInsert = textToInsert.replace('<Link href=[(' + link + ')]>', '')
            }
        }
        return (
            <View style={{ flex: 1 }}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}
                >
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <View style={{
                            padding: 15,
                            borderColor: this.state.theme == "dark" ? "#474747" : "#dddddd", borderWidth: 1,
                            backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
                                '#efefef',
                            borderRadius: 16,
                            width: (Dimensions.get('window').width - 50)
                        }}>
                            <View style={{
                                flexDirection: "row", justifyContent: "space-between", paddingBottom
                                    : 2
                            }}>
                                <Text style={{
                                    fontSize: 20, fontFamily: 'Roboto-M', fontWeight: '700', color: this.state.theme == "dark" ? dark.colors.color :
                                        light.colors.color, paddingBottom: 10
                                }}>Ссылка</Text>

                                <TouchableOpacity
                                    activeOpacity={.7}
                                    onPress={() => {
                                        this.setModalVisible(false);
                                    }}>
                                    <Entypo name="circle-with-cross" size={26} color={this.state.theme == "dark" ? "#adadad" :
                                        "#a8a8a8"} />
                                </TouchableOpacity>
                            </View>

                            <TextInput style={{
                                fontFamily: 'OpenSans-R',
                                borderColor: this.state.theme == "dark" ? "#8a8a8a" :
                                    '#dddddd',
                                color: this.state.theme == "dark" ? "#bfbfbf" :
                                    'black',
                                backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
                                    '#e6e6e6',
                                fontSize: 18, padding: 5,
                                borderWidth: 1,
                                borderRadius: 3, width: "100%"
                            }}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                                value={this.state.textLink}
                                onChangeText={this.changeLink} />

                            <TouchableOpacity
                                style={{
                                    borderRadius: 20,
                                    padding: 10,
                                    elevation: 2, backgroundColor: this.state.theme == "dark" ?
                                        "#a10000" : "#db0202", fontFamily: "OpenSans-R", marginTop: 13
                                }}
                                onPress={() => {
                                    this.addLink();
                                }}
                            >
                                <Text style={{
                                    color: "white",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    fontFamily: 'Roboto-M',
                                    fontSize: 16
                                }}>Добавить</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <ScrollView>
                    <TextInput style={{
                        height: this.state.imageSet.length == 0 ? Dimensions.get('window').height - 150 : "auto", textAlignVertical: 'top',
                        justifyContent: "flex-start", fontFamily: 'OpenSans-R',
                        color: this.state.theme == "dark" ? "#bfbfbf" :
                            'black',
                        fontSize: 18, padding: 10,
                    }}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        multiline={true}
                        numberOfLines={4}
                        value={this.state.canAddText ? textToInsert : this.state.text}
                        placeholder="Что нового?"
                        placeholderTextColor={this.state.theme == "dark" ? "#bfbfbf" : "#2e2e2e"}
                        onChangeText={this.postCreate} />

                    {this.state.imageSet.length !== 0 ? (
                        <View>
                            {this.state.imageSet.map(data => {
                                return (
                                    <View>
                                        <Image
                                            source={{ uri: data.uri }}
                                            style={{
                                                resizeMode: 'cover',
                                                width: "100%", height: data.height,
                                            }}
                                        />
                                    </View>
                                )
                            })}
                        </View>
                    ) : (
                            <View>
                            </View>
                        )}



                </ScrollView>
                <View style={{ padding: this.state.addedLink ? 5 : 0 }}>

                    {this.state.addedLink ? (
                        <View style={{
                            borderColor: "#474747", borderWidth: 1,
                            backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
                                '#efefef',
                            borderRadius: 3, marginBottom: 5, padding: 10
                        }}>
                            <Text style={{
                                fontSize: 20, fontFamily: 'Roboto-M', fontWeight: '700', color: this.state.theme == "dark" ? dark.colors.color :
                                    light.colors.color,
                            }}>{this.state.textLink}</Text>
                        </View>
                    ) : (
                            <View></View>
                        )}
                </View>
                <View style={{
                    borderTopColor: this.state.theme == "dark" ? "#474747" : "#dddddd", borderTopWidth: 1, flexDirection: "row", justifyContent: "space-between",
                    padding: 10, alignItems: "center",
                }}>

                    <View style={{ flexDirection: "row", alignConten: "center", alignItems: "center" }}>
                        <TouchableOpacity
                            style={{ marginRight: 15 }}
                            activeOpacity={.7}
                            onPress={
                                () => this.getImage()
                            }>
                            <MaterialCommunityIcons name="image-outline" size={30} color={this.state.theme == "dark" ? "#adadad" :
                                "#8a8a8a"} />
                        </TouchableOpacity>
                        {this.state.addedLink ? (
                            <View></View>
                        ) : (
                                <TouchableOpacity
                                    activeOpacity={.7}
                                    onPress={() => {
                                        this.setModalVisible(true);
                                    }}>
                                    <Entypo name="link" size={26} color={this.state.theme == "dark" ? "#adadad" :
                                        "#8a8a8a"} />
                                </TouchableOpacity>
                            )}

                    </View>


                    <TouchableOpacity
                        activeOpacity={.7}
                        onPress={
                            () => this.saveData()
                        }>
                        <Text style={{
                            color: this.state.theme == "dark" ? "#adadad" :
                                "#8a8a8a", fontFamily: 'Roboto-M', fontSize: 17
                        }}>Опубликовать</Text>
                    </TouchableOpacity>
                </View>

            </View>



        );
    }
}
