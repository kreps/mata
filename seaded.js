// Ühised seaded kõikidele ülesannetele.
//
// TULEMUSTE TEAVITUS (ntfy.sh – tasuta, kontot pole vaja):
// 1. Paigalda telefoni rakendus "ntfy" (Android / iOS).
// 2. Mõtle välja pikk ja raskesti arvatav teema nimi, nt "kangro-mate-7f3k9q2x".
// 3. Telli see teema rakenduses ("Subscribe to topic").
// 4. Kirjuta sama nimi allolevasse ntfyTeema väljale ja lükka muudatus GitHubi.
// Kui ntfyTeema on tühi, teavitusi ei saadeta.
window.SEADED = {
  ntfyTeema: ''
};

// Saadab tulemuse. Kasutatakse kõikides ülesannetes.
window.saadaTulemus = function (pealkiri, tekst) {
  const teema = window.SEADED && window.SEADED.ntfyTeema;
  if (!teema) return;
  try {
    fetch('https://ntfy.sh/' + encodeURIComponent(teema), {
      method: 'POST',
      body: tekst,
      headers: { 'Title': pealkiri, 'Tags': 'abacus' },
      keepalive: true
    }).catch(() => {});
  } catch (e) {}
};
