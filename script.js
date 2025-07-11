document.getElementById('searchForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('hallNameInput').value.trim().toLowerCase();
      const guestInput = document.getElementById('guestInput').value.trim();
      const cityInput = document.getElementById('citySelect').value.toLowerCase();

      const cards = document.querySelectorAll('.cards .card');

      cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const capacityText = card.querySelector('.Capacity')?.textContent || "";
        const capacityMatch = capacityText.match(/\d+/);
        const capacity = capacityMatch ? parseInt(capacityMatch[0]) : 0;
        const address = card.querySelector('.card-text').textContent.toLowerCase();

        const matchName = !nameInput || title.includes(nameInput);
        const matchGuests = !guestInput || capacity >= parseInt(guestInput);
        const matchCity = cityInput === "city" || address.includes(cityInput);

        card.parentElement.style.display = (matchName && matchGuests && matchCity) ? 'block' : 'none';
      });
    });