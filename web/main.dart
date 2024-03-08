import 'dart:js_interop';

import 'package:web/helpers.dart';

void main() {
  if (document.head != null) {
    // <link rel="stylesheet" href="styles.css">
    final linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('type', 'text/css');
    linkElement.setAttribute('href', 'assets/css/custom-ads.css');
    document.head!.appendChild(linkElement);
  }

  final divElement = document.createElement('div');
  divElement.setAttribute('class', 'divAds');

  final h1Element = document.body!.querySelector('h1')!;
  h1Element.append(divElement.jsify()!);

  final now = DateTime.now();
  print(window.visualViewport!.height);
  final element = document.querySelector('#output') as HTMLDivElement;
  element.text = 'The time is ${now.hour}:${now.minute}:${now.second}'
      ' and your Dart web app is running!';
}
