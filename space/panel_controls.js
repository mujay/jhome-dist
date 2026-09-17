/* Independent of WebGL: side tabs remain usable while the scene loads. */
(() => {
  const mobile = window.matchMedia('(max-width:760px), (max-height:500px), (pointer:coarse) and (max-width:1024px)');
  const panels = [
    {button:document.getElementById('viewPanelToggle'), panel:document.getElementById('ui'), label:'視角設定'},
    {button:document.getElementById('lightPanelToggle'), panel:document.getElementById('lightingPanel'), label:'燈光設定'}
  ];
  function setOpen(item, open) {
    if (!open && item.panel.contains(document.activeElement)) item.button.focus();
    item.panel.hidden = !open;
    item.button.setAttribute('aria-expanded', String(open));
    item.button.setAttribute('aria-label', (open ? '收合' : '展開') + item.label);
  }
  function resetForViewport() { panels.forEach(item => setOpen(item, !mobile.matches)); }
  panels.forEach(item => item.button.addEventListener('click', () => {
    const open = item.panel.hidden;
    if (open && mobile.matches) panels.filter(other => other !== item).forEach(other => setOpen(other, false));
    setOpen(item, open);
  }));
  mobile.addEventListener('change', resetForViewport);
  resetForViewport();
})();
