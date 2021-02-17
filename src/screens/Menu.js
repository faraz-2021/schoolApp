import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Accordion from 'react-native-collapsible/Accordion';

 
const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
];
 
export default function AccordianView() {
   const[activeSections, setActiveSections] = useState([])
 const _renderSectionTitle = section => {
    return (
      <View >
        <Text>Something</Text>
      </View>
    );
  };
 
  const _renderHeader = section => {
    return (
      <View >
        <Text>Something</Text>
      </View>
    );
  };
 
  const _renderContent = section => {
    return (
      <View >
        <Text>Something</Text>
      </View>
    );
  };
 
  const _updateSections = activeSections => {
    setActiveSections(activeSections)
  };
 

    return (
      <Accordion
        sections={SECTIONS}
        activeSections={activeSections}
        renderSectionTitle={_renderSectionTitle}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
      />
    );
  }
