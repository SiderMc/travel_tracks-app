function createActiveLink(activeClass, baseClasses = []) {
  return function ({ isActive }) {
    const classes = [isActive ? activeClass : '', ...baseClasses]
      .filter(Boolean)
      .join(' ');
    return classes || undefined;
  };
}

export default createActiveLink;
