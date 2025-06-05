fetch('kostum.json')
  .then(res => res.json())
  .then(data => {
    const total = data.length;
    const aktif = data.filter(k => k.onRent).length;
    const populer = data.filter(k => k.rating >= 4.5).length;

    document.getElementById('total-kostum').textContent = total;
    document.getElementById('penyewaan-aktif').textContent = aktif;
    document.getElementById('item-populer').textContent = populer;
  })
  .catch(err => {
    console.error('Gagal mengambil data kostum.json:', err);
  });
