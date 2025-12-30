function useSeek() {
  function seek(parent, property, value) {
    let foundChild = null;
    parent.traverse((child) => {
      if (child[property] === value) {
        foundChild = child;
      }
    });
    return foundChild;
  }
  function seekAll(parent, property, value) {
    const foundChildren = [];
    parent.traverse((child) => {
      if (child[property].includes(value)) {
        foundChildren.push(child);
      }
    });
    return foundChildren;
  }
  function seekByName(parent, value) {
    return seek(parent, "name", value);
  }
  function seekAllByName(parent, value) {
    return seekAll(parent, "name", value);
  }
  return {
    seek,
    seekByName,
    seekAll,
    seekAllByName
  };
}

export { useSeek };
//# sourceMappingURL=useSeek.BoK5Ffx41767105581793.js.map
