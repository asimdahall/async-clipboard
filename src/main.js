async function getClipboardContents() {
  try {
    const clipboardItems = await navigator.clipboard.read();
    for (const clipboardItem of clipboardItems) {
      for (const type of clipboardItem.types) {
        if (type.includes('image/')) {
          const blob = await clipboardItem.getType(type);
          const image = URL.createObjectURL(blob);
          pasted_image.setAttribute('src', image);
        }
      }
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}

paste.addEventListener('click', getClipboardContents);
