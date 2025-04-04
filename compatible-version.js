document.addEventListener("DOMContentLoaded", function () {
    // Dinamik ID'li versiyon alanını bul
    const versionDisplay = document.querySelector("[id^='version']");

    if (!versionDisplay) return; // Versiyon alanı yoksa işlemi sonlandır

    // Mevcut versiyon numarasını al
    let currentVersion = versionDisplay.textContent.trim(); // Örn: "v1.50.x"

    // Versiyon numarasını parçala
    let versionParts = currentVersion.match(/v?(\d+)\.(\d+)(?:\.x)?/);

    if (versionParts) {
        let major = parseInt(versionParts[1], 10);
        let minor = parseInt(versionParts[2], 10);

        // Küçük versiyonu 1 artır
        minor += 1;

        // Yeni versiyon numarasını oluştur
        let newVersion = `v${major}.${minor}.x`;

        // Güncelleme mesajı için bir <span> oluştur
        const updateMessage = document.createElement('span');
        updateMessage.className = 'update-message';
        updateMessage.style.userSelect = "none";
        updateMessage.innerHTML = `<span class='updating-refresh2 rotate' data-uk-icon='icon: refresh'></span> ${newVersion} 'e güncelleniyor.`;

        // Versiyon alanına mesajı ekle
        versionDisplay.appendChild(updateMessage);

        // Download linklerini kontrol et
        const downloadLinks = document.querySelectorAll("[id^='downloadLink']");
        let allLinksPresent = true;

        downloadLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href || href.trim() === "") {
                allLinksPresent = false;
            }
        });

        // Güncelleme mesajını göster veya gizle
        updateMessage.style.display = allLinksPresent ? 'none' : 'inline';
    }
});