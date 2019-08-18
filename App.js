import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { WebView } from 'react-native-webview';

class Screen1 extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: 'http://3vil.eu/Notesmaster/trumbowyg-jquery/' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

class Screen2 extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: 'http://3vil.eu/Notesmaster/ckeditor-4-full-all/index.html' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Trumbowyg: Screen1,
  CKEditor: Screen2,
});

export default createAppContainer(TabNavigator);