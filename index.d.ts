// Type definitions for react-native-autoheight-webview 1.x
// Project: https://github.com/iou90/react-native-autoheight-webview
// Definitions by: Naveen Ithappu <https://github.com/naveen-ithappu>
// TypeScript Version: 2.8
import { Component } from 'react';

import { WebViewProps } from 'react-native-webview';

import { ViewStyle } from 'react-native';

export interface StylesFile {
  href: string;
  type: string;
  rel: string;
}

export interface SizeUpdate {
  width: number;
  height: number;
}

export interface AutoHeightWebViewProps extends WebViewProps {
  onSizeUpdated: (size: SizeUpdate) => void;
  files: StylesFile[];
  style: ViewStyle;
  customScript: string;
  customStyle: string;
  zoomable: boolean;
}

export default class AutoHeightWebView extends Component<Partial<AutoHeightWebViewProps>> {}
