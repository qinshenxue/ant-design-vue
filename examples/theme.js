(function() {
  var css = [];

  var primary = '#507afe';

  css.push(':root{');
  css.push('--antd-primary-color:' + primary + ';');
  css.push('--antd-primary-1:' + colorPalette(primary, 1) + ';');
  css.push('--antd-primary-2:' + colorPalette(primary, 2) + ';');
  css.push('--antd-primary-3:' + colorPalette(primary, 3) + ';');
  css.push('--antd-primary-4:' + colorPalette(primary, 4) + ';');
  css.push('--antd-primary-5:' + colorPalette(primary, 5) + ';');
  css.push('--antd-primary-6:' + colorPalette(primary, 6) + ';');
  css.push('--antd-primary-7:' + colorPalette(primary, 7) + ';');
  css.push(
    '--antd-primary-fade-8:' +
      tinycolor(primary)
        .setAlpha(0.08)
        .toString() +
      ';',
  );
  css.push(
    '--antd-primary-fade-20:' +
      tinycolor(primary)
        .setAlpha(0.2)
        .toString() +
      ';',
  );
  css.push('}');

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  head.appendChild(style);
  style.title = 'antd-theme';
  style.type = 'text/css';
  var cssText = css.join('\n');
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = cssText;
  } else {
    style.appendChild(document.createTextNode(cssText));
  }
})();
