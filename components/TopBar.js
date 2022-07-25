import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";
import Styles from "./utils/Styles";
export default () => {

    const total = 500.00

    return <View style={styles.container}>
        <View style={styles.contentTopText}>
            <Text style={styles.textTitle}>Julho</Text>
            <Icon
                color="#eb3489"
                name="chevron-down-outline"
                size={25}
                type="ionicon"
                style={{ paddingStart: 5 }}
            />
        </View>
        <View style={styles.content}>
            <Text style={styles.textTitle}>
                Contas e cartões
            </Text>
            <Icon
                color="#eb3489"
                name="visibility"
                size={25}
            />
        </View>
        <View style={styles.content}>
            <Text style={styles.textWhite}>
                Investimentos
            </Text>
            <Text style={styles.textWhite}>R${total}</Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.textWhite}>
                Carteira
            </Text>
            <Text style={styles.textWhite}>R${total}</Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.textWhite}>
                total
            </Text>
            <Text style={styles.textTitle}>R${total * 2}</Text>
        </View>
        <View style={styles.contentTopText}>
            <Text style={styles.textLink}>
                Ir para contas e cartões
            </Text>
            <Icon
                color="#eb3489"
                name="payments"
                size={20}
                type="material"
                style={{ paddingStart: 5 }}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingStart: 25,
        paddingEnd: 25,
        paddingTop: 20,
        backgroundColor: Styles.primary
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contentTopText: {
        flex: 1,
        flexDirection: 'row'
    },
    textWhite: {
        color: 'white'
    },
    textTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textLink: {
        color: '#eb3489'
    }
})