const eventSet = new WeakSet();
function markEventEffectPerformed(event) {
  eventSet.add(event);
}
function eventEffectNotPerformed(event) {
  return !eventSet.has(event);
}

export { eventEffectNotPerformed, markEventEffectPerformed };
//# sourceMappingURL=index.CUC0aJa51767105581793.js.map
