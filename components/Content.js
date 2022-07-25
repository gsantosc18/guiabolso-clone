import { Card } from "@rneui/base";
import { Icon } from "@rneui/themed";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default ({planning, loanAmount}) => {
    return <View>
        <Card containerStyle={{ borderRadius: 10 }}>
            <View style={styles.card}>
                <Text style={{
                    fontWeight: "500",
                    fontSize: 24
                }}>
                    Planejamento do mês
                </Text>
                <Icon
                    color="#eb3489"
                    name="more-vert"
                    size={30}
                />
            </View>
            <Text style={styles.text2Muted}>
                Renda
            </Text>
            <Text style={styles.textValue}>
                R${planning == undefined ? 0 : planning.income}
            </Text>
            <View style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end"
            }}>
                <Text style={styles.textMuted}>planejados </Text>
                <Text>R${planning == undefined ? 0 : planning.planned}</Text>
            </View>
            <View style={styles.cardLeft}>
                <Text>R${planning == undefined ? 0 : planning.planned - planning.income}</Text>
                <Text style={styles.textMuted}> para alcançar o planejamento</Text>
            </View>
            <Text style={styles.text2Muted}>
                Gastos
            </Text>
            <Text style={styles.textValue}>
                R${planning == undefined ? 0 : planning.outgoing}
            </Text>
        </Card>
        <Card containerStyle={{ borderRadius: 10 }}>
            <View style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15
            }}>
                <Text style={{
                    fontWeight: "500",
                    fontSize: 24
                }}>
                    Descubra o valor do empréstimo que você pode levar agora mesmo:
                </Text>
                <Icon
                    color="#eb3489"
                    name="more-vert"
                    size={30}
                />
            </View>
            <Text style={styles.textValue}>
                R${ loanAmount == undefined? 0: loanAmount }
            </Text>

            <View style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignContent: "center"
            }}>
                <Text style={{ color: "#eb3489" }}>Descubra o valor </Text>
                <Icon
                    color="#eb3489"
                    name="arrow-right-alt"
                    size={20}
                />
            </View>
        </Card>
    </View>
}

const styles = StyleSheet.create({
    textMuted: {
        color: '#888'
    },
    text2Muted: {
        fontSize: 16,
        color: '#888',
        marginBottom: 5
    },
    textValue: {
        fontWeight: "bold",
        fontSize: 30
    },
    card: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    },
    cardLeft: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 15
    }
})