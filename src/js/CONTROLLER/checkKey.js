function checkKey (event) {
    // event.key

    let length = appData.currentType.text.length;

    if (length > 0) {
      // console.log(appData.currentType.text);
      if( appData.currentType.text[length - 1] === event.key ) {
        nextTypeSymbol();
         appData.currentType.text.pop();
         let last = appData.currentType.text.length;
          // console.log(tmp);
          lightButton(appData.currentType.text[last - 1]);
        if (length === 1) {
            stopType();
        }

      } else {
          ++appData.currentType.errors;
          errorTypeSymbol();
      }

        return true;
    }
    return 'Error: appData.currentType.text.length = '
        + appData.currentType.text.length;

}