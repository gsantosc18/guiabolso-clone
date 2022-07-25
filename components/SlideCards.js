import { Card, Icon } from "@rneui/base";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const renderList = ({ item }) => {
    const translationTypes = (type) => {
        switch (type) {
            case "RECOMMENDATION": return "RECOMENDAÇÃO"
            case "OPPORTUNITY": return "OPORTUNIDADE"
        }
        return ""
    }

    return <Card containerStyle={{
        backgroundColor: item.background_color,
        borderRadius: 10,
        width: 150
    }}>
        <Text style={{ width: 125 }}>{item.text}</Text>
        <Icon
            color="white"
            name={item.icon}
            size={60}
        />
        <Text>{translationTypes(item.type)}</Text>
        {/* <Text style={{ fontWeight: "bold", color: "white" }}>{item.text}</Text>
        <Icon
            color="white"
            name={item.icon}
            size={60}
        />
        <Text style={{ textAlign: "center", width: "100%", color: "white"}}>
            {translationTypes(item.type)}
        </Text> */}
    </Card>
}

export default ({ promotions }) => {
    return <View style={styles.container}>
        <Text style={{ marginStart: 15, marginTop: 10, color: "#666" }}>Para você</Text>
        <View>
            <FlatList
                horizontal={true}
                data={promotions}
                renderItem={renderList}
                keyExtractor={item => item.id}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        fontSize: 32,
    }
});