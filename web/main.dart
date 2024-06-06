import 'dart:js_interop';

import 'package:web/web.dart';
import 'html/banners/hostinger.dart' as hostinger_banners;

void main() {
  final isDebugMode = document.URL.contains('localhost') || document.URL.contains('127.0.0.1');
  final baseUrl = isDebugMode ? 'http://127.0.0.1:8080' : 'https://ads.esdocu.com';

  if (document.head != null) {
    // <link rel="stylesheet" href="styles.css">
    final linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('type', 'text/css');
    linkElement.setAttribute('href', '$baseUrl/assets/css/ads.css');
    document.head!.appendChild(linkElement);

    // <link rel="stylesheet" href="tingle.min.css">
    // final tingleLinkElement = document.createElement('link');
    // tingleLinkElement.setAttribute('rel', 'stylesheet');
    // tingleLinkElement.setAttribute('href', '$baseUrl/assets/css/tingle.min.css');
    // document.head!.appendChild(tingleLinkElement);

    // <script src="tingle.min.js"></script>
    // final tingleScriptElement = document.createElement('script');
    // tingleScriptElement.setAttribute('async', '');
    // tingleScriptElement.setAttribute('src', '$baseUrl/assets/js/tingle.min.js');
    // document.body!.appendChild(tingleScriptElement);
    // tingleScriptElement.onLoad.listen((event) {
    //   print(event);
    //   window.alert('aaa');
    // });
  }

  final contentElement = document.body?.querySelector('main.bd-main .bd-content');

  if (contentElement != null) {
    // if (!isDebugMode) _addHostingerPixel();

    final els = <Element>[];
    for (var i = 0; i < contentElement.children.length; i++) {
      if (i % 15 == 0) {
        els.add(contentElement.children.item(i)!);
      }
    }

    var tempIndex = 0;
    for (var i = 0; i < els.length; i++) {
      els[i].after(_getBanner(tempIndex, baseUrl).jsify()!);
      tempIndex = tempIndex == 3 ? 0 : tempIndex + 1;
    }
  }

  // Modal ad.
  final modalSessionStorageKey = 'ad-modal';
  var onClose = '';
  if (window.sessionStorage.getItem(modalSessionStorageKey) == null) {
    onClose = '''
    onClose: function() {
        sessionStorage.setItem('$modalSessionStorageKey', 1);
        window.open("https://www.hostg.xyz/SHEZo");
    },
''';
  }

  Future.delayed(const Duration(seconds: 15)).then((value) {
    window.sessionStorage.setItem(modalSessionStorageKey, '1');

    final tingleScript2Element = document.createElement('script');
    tingleScript2Element.innerHTML = '''
var modal = new tingle.modal({
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Cerrar",
    $onClose
});
// set content
modal.setContent(`
${hostinger_banners.modal1(baseUrl)}
`);

modal.open();
''';
    document.body!.appendChild(tingleScript2Element);
  });
}

void _addHostingerPixel() {
  var divElement = document.createElement('div');
  divElement.innerHTML = hostinger_banners.pixel();
  document.body!.append(divElement.jsify()!);
}

Element _getBanner(int index, String baseUrl) {
  var divElement = document.createElement('div');
  divElement.setAttribute('class', 'custom-ad-container');

  final banners = [
    hostinger_banners.banner1(baseUrl),
    hostinger_banners.banner2(baseUrl),
    hostinger_banners.banner3(baseUrl),
    hostinger_banners.banner4(baseUrl),
  ];

  divElement.innerHTML = banners[index];
  return divElement;
}
