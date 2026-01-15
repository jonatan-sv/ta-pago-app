let _listeners = [];

export function onLogout(cb) {
  _listeners.push(cb);
  return () => {
    _listeners = _listeners.filter((l) => l !== cb);
  };
}

export function triggerLogout() {
  _listeners.forEach((cb) => {
    try {
      cb();
    } catch (e) {
      console.warn("authEvents triggerLogout listener error", e);
    }
  });
}

export default { onLogout, triggerLogout };
