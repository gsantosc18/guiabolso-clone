/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import SlideCards from "./components/SlideCards";
import TopBar from "./components/TopBar";
import axios from "axios";
import Content from "./components/Content";

const URL = "http://ms-dojo-mobile-pj.ms.qa//api/v1/home/guiabolso"

const getData = async () => {
  try {
    result = await axios(URL, {
      method: 'get',
      headers: {
        'Content-type': 'Application/json',
        'Accept': 'Application/json',
      },
    })
    return result.data
  } catch (err) {
    console.warn(err)
  }
}

export default () => {


  const [data, setData] = useState([])

  useEffect(() => {
    getData().then(d => setData(d))
  })

  return <SafeAreaView style={styles.container}>
    <View style={styles.top}>
      <TopBar />
    </View>
    <View style={styles.middle}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <SlideCards promotions={data.promotions} />
        </View>
        <View style={{ flex: 1 }}>
          <Content planning={data.planning} loanAmount={data.loan_amount} />
        </View>
      </ScrollView>
    </View>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flex: 4
  },
  middle: {
    backgroundColor: 'white',
    flex: 8,
  },
  botton: {
    backgroundColor: 'white',
    flex: 4,
  }
})
