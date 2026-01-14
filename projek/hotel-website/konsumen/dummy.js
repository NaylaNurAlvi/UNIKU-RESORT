<script>
  // ======= Data Dummy =======
  
  // 1. Rooms (kamar)
  const rooms = [
    {name:'Deluxe Room', price:1200000, img:'gambar/deluxe.jpeg'},
    {name:'Suite Room', price:1800000, img:'gambar/suite.jpeg'},
    {name:'Standard Room', price:800000, img:'gambar/standard.jpeg'},
    {name:'Family Room', price:1500000, img:'gambar/family.jpeg'}
  ];
  localStorage.setItem('rooms', JSON.stringify(rooms));

  // 2. Facilities (fasilitas)
  const facilities = [
    {name:'Kolam Renang', img:'gambar/kolam renang.jpeg'},
    {name:'Restoran', img:'gambar/restoran.jpeg'},
    {name:'Spa & Sauna', img:'gambar/spa.jpeg'},
    {name:'Gym', img:'gambar/gym.jpeg'},
    {name:'Area Parkir', img:'gambar/parkir.jpeg'}
  ];
  localStorage.setItem('facilities', JSON.stringify(facilities));

  // 3. Sample consumer (login dummy)
  const consumer = {username:'Nayla', fullname:'Nayla Nur Alvi'};
  localStorage.setItem('consumer', JSON.stringify(consumer));
  localStorage.setItem('consumerLoggedIn','true');

  // 4. Bookings (history)
  const bookings = [
    {
      id:1,
      nama:'Nayla Nur Alvi',
      username:'Nayla',
      room:'Deluxe Room',
      checkin:'2026-01-15',
      checkout:'2026-01-17',
      paymentMethod:'Transfer',
      status:'Lunas',
      created:'2026-01-14T10:00:00'
    },
    {
      id:2,
      nama:'Nayla Nur Alvi',
      username:'Nayla',
      room:'Suite Room',
      checkin:'2026-02-01',
      checkout:'2026-02-03',
      paymentMethod:'Bayar di Tempat',
      status:'Belum Lunas',
      created:'2026-01-14T12:00:00'
    },
    {
      id:3,
      nama:'Nayla Nur Alvi',
      username:'Nayla',
      room:'Standard Room',
      checkin:'2026-03-05',
      checkout:'2026-03-06',
      paymentMethod:'Transfer',
      status:'Lunas',
      created:'2026-01-14T14:30:00'
    }
  ];
  localStorage.setItem('bookings', JSON.stringify(bookings));
</script>
