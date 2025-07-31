const data_asrama = [
  {
    "nama_asrama": "Gryffindor",
    "total_murid": 210,
    "detail_jenis_kelamin": [
      {
        "jenis_kelamin": "Laki-laki",
        "jumlah": 105
      },
      {
        "jenis_kelamin": "Perempuan",
        "jumlah": 105
      }
    ],
    "detail_tahun_ajaran": [
      {
        "tahun_ajaran": "Tahun 1",
        "jumlah_murid": 30
      },
      {
        "tahun_ajaran": "Tahun 2",
        "jumlah_murid": 32
      },
      {
        "tahun_ajaran": "Tahun 3",
        "jumlah_murid": 35
      },
      {
        "tahun_ajaran": "Tahun 4",
        "jumlah_murid": 30
      },
      {
        "tahun_ajaran": "Tahun 5",
        "jumlah_murid": 28
      },
      {
        "tahun_ajaran": "Tahun 6",
        "jumlah_murid": 28
      },
      {
        "tahun_ajaran": "Tahun 7",
        "jumlah_murid": 27
      }
    ]
  },
  {
    "nama_asrama": "Hufflepuff",
    "total_murid": 225,
    "detail_jenis_kelamin": [
      {
        "jenis_kelamin": "Laki-laki",
        "jumlah": 100
      },
      {
        "jenis_kelamin": "Perempuan",
        "jumlah": 125
      }
    ],
    "detail_tahun_ajaran": [
      {
        "tahun_ajaran": "Tahun 1",
        "jumlah_murid": 32
      },
      {
        "tahun_ajaran": "Tahun 2",
        "jumlah_murid": 30
      },
      {
        "tahun_ajaran": "Tahun 3",
        "jumlah_murid": 38
      },
      {
        "tahun_ajaran": "Tahun 4",
        "jumlah_murid": 31
      },
      {
        "tahun_ajaran": "Tahun 5",
        "jumlah_murid": 30
      },
      {
        "tahun_ajaran": "Tahun 6",
        "jumlah_murid": 29
      },
      {
        "tahun_ajaran": "Tahun 7",
        "jumlah_murid": 31
      }
    ]
  },
  {
    "nama_asrama": "Ravenclaw",
    "total_murid": 195,
    "detail_jenis_kelamin": [
      {
        "jenis_kelamin": "Laki-laki",
        "jumlah": 98
      },
      {
        "jenis_kelamin": "Perempuan",
        "jumlah": 97
      }
    ],
    "detail_tahun_ajaran": [
      {
        "tahun_ajaran": "Tahun 1",
        "jumlah_murid": 27
      },
      {
        "tahun_ajaran": "Tahun 2",
        "jumlah_murid": 28
      },
      {
        "tahun_ajaran": "Tahun 3",
        "jumlah_murid": 30
      },
      {
        "tahun_ajaran": "Tahun 4",
        "jumlah_murid": 28
      },
      {
        "tahun_ajaran": "Tahun 5",
        "jumlah_murid": 27
      },
      {
        "tahun_ajaran": "Tahun 6",
        "jumlah_murid": 27
      },
      {
        "tahun_ajaran": "Tahun 7",
        "jumlah_murid": 28
      }
    ]
  },
  {
    "nama_asrama": "Slytherin",
    "total_murid": 190,
    "detail_jenis_kelamin": [
      {
        "jenis_kelamin": "Laki-laki",
        "jumlah": 95
      },
      {
        "jenis_kelamin": "Perempuan",
        "jumlah": 95
      }
    ],
    "detail_tahun_ajaran": [
      {
        "tahun_ajaran": "Tahun 1",
        "jumlah_murid": 25
      },
      {
        "tahun_ajaran": "Tahun 2",
        "jumlah_murid": 27
      },
      {
        "tahun_ajaran": "Tahun 3",
        "jumlah_murid": 28
      },
      {
        "tahun_ajaran": "Tahun 4",
        "jumlah_murid": 26
      },
      {
        "tahun_ajaran": "Tahun 5",
        "jumlah_murid": 26
      },
      {
        "tahun_ajaran": "Tahun 6",
        "jumlah_murid": 28
      },
      {
        "tahun_ajaran": "Tahun 7",
        "jumlah_murid": 30
      }
    ]
  }
]
const data_kinerja = [
  {
    "nama_asrama": "Gryffindor",
    "nilai_rata_rata_owl": 4.2,
    "nilai_rata_rata_newt": 4.0,
    "jumlah_murid_berprestasi": 45,
    "fokus_pelajaran_kuat": ["Pertahanan Ilmu Hitam", "Transfigurasi"]
  },
  {
    "nama_asrama": "Hufflepuff",
    "nilai_rata_rata_owl": 3.8,
    "nilai_rata_rata_newt": 3.7,
    "jumlah_murid_berprestasi": 38,
    "fokus_pelajaran_kuat": ["Herbologi", "Ramuan"]
  },
  {
    "nama_asrama": "Ravenclaw",
    "nilai_rata_rata_owl": 4.5,
    "nilai_rata_rata_newt": 4.4,
    "jumlah_murid_berprestasi": 55,
    "fokus_pelajaran_kuat": ["Astronomi", "Arithmancy", "Sejarah Sihir"]
  },
  {
    "nama_asrama": "Slytherin",
    "nilai_rata_rata_owl": 4.1,
    "nilai_rata_rata_newt": 4.2,
    "jumlah_murid_berprestasi": 48,
    "fokus_pelajaran_kuat": ["Ramuan", "Pertahanan Ilmu Hitam", "Seni Gelap"]
  }
]
const data_poin = [
  {
    "tahun_ajaran": "2023-2024",
    "detail_poin": [
      {
        "nama_asrama": "Gryffindor",
        "total_poin": 5200,
        "posisi_akhir": 1
      },
      {
        "nama_asrama": "Slytherin",
        "total_poin": 5150,
        "posisi_akhir": 2
      },
      {
        "nama_asrama": "Ravenclaw",
        "total_poin": 4900,
        "posisi_akhir": 3
      },
      {
        "nama_asrama": "Hufflepuff",
        "total_poin": 4850,
        "posisi_akhir": 4
      }
    ],
    "piala_quidditch_juara": "Gryffindor"
  },
  {
    "tahun_ajaran": "2022-2023",
    "detail_poin": [
      {
        "nama_asrama": "Slytherin",
        "total_poin": 5000,
        "posisi_akhir": 1
      },
      {
        "nama_asrama": "Ravenclaw",
        "total_poin": 4950,
        "posisi_akhir": 2
      },
      {
        "nama_asrama": "Gryffindor",
        "total_poin": 4800,
        "posisi_akhir": 3
      },
      {
        "nama_asrama": "Hufflepuff",
        "total_poin": 4700,
        "posisi_akhir": 4
      }
    ],
    "piala_quidditch_juara": "Slytherin"
  }
]
const data_mapel = [
  {
    "nama_asrama": "Gryffindor",
    "nilai_mata_pelajaran": {
      "Pertahanan Ilmu Hitam": 4.5,
      "Transfigurasi": 4.0,
      "Ramuan": 3.5,
      "Herbologi": 3.8,
      "Sejarah Sihir": 3.2,
      "Mantera": 4.2,
      "Astronomi": 3.0,
      "Penerbangan": 4.7
    }
  },
  {
    "nama_asrama": "Hufflepuff",
    "nilai_mata_pelajaran": {
      "Pertahanan Ilmu Hitam": 3.7,
      "Transfigurasi": 3.6,
      "Ramuan": 4.1,
      "Herbologi": 4.5,
      "Sejarah Sihir": 3.9,
      "Mantera": 3.8,
      "Astronomi": 3.5,
      "Penerbangan": 3.9
    }
  },
  {
    "nama_asrama": "Ravenclaw",
    "nilai_mata_pelajaran": {
      "Pertahanan Ilmu Hitam": 4.0,
      "Transfigurasi": 4.3,
      "Ramuan": 3.9,
      "Herbologi": 4.0,
      "Sejarah Sihir": 4.6,
      "Mantera": 4.5,
      "Astronomi": 4.8,
      "Penerbangan": 3.5
    }
  },
  {
    "nama_asrama": "Slytherin",
    "nilai_mata_pelajaran": {
      "Pertahanan Ilmu Hitam": 4.3,
      "Transfigurasi": 3.8,
      "Ramuan": 4.6,
      "Herbologi": 3.5,
      "Sejarah Sihir": 3.7,
      "Mantera": 4.0,
      "Astronomi": 3.2,
      "Penerbangan": 4.0
    }
  }
]
const sgender = document.getElementById('sgender');
const stahun = document.getElementById('stahun');


new Chart(sgender, {
    type: 'doughnut',
    data: {
      labels: ['Laki-Laki', "Perempuan"],
      datasets: [{
        label: 'Jumlah Siswa',
        data: [
            data_asrama[3].detail_jenis_kelamin[0].jumlah, 
            data_asrama[3].detail_jenis_kelamin[1].jumlah
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});
new Chart(stahun, {
    type: 'pie',
    data: {
      labels: ['Tahun 1', 'Tahun 2', 'Tahun 3', 'Tahun 4', 'Tahun 5','Tahun 6', 'Tahun 7'],
      datasets: [{
        label: 'Jumlah Siswa',
        data: [
            data_asrama[3].detail_tahun_ajaran[0].jumlah_murid, 
            data_asrama[3].detail_tahun_ajaran[1].jumlah_murid,
            data_asrama[3].detail_tahun_ajaran[2].jumlah_murid,
            data_asrama[3].detail_tahun_ajaran[3].jumlah_murid,
            data_asrama[3].detail_tahun_ajaran[4].jumlah_murid,
            data_asrama[3].detail_tahun_ajaran[5].jumlah_murid,
            data_asrama[3].detail_tahun_ajaran[6].jumlah_murid,
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});

const hgender = document.getElementById('hgender');
const htahun = document.getElementById('htahun');


new Chart(hgender, {
    type: 'doughnut',
    data: {
      labels: ['Laki-Laki', "Perempuan"],
      datasets: [{
        label: 'Jumlah Siswa',
        data: [
            data_asrama[1].detail_jenis_kelamin[0].jumlah, 
            data_asrama[1].detail_jenis_kelamin[1].jumlah
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});
new Chart(htahun, {
    type: 'pie',
    data: {
      labels: ['Tahun 1', 'Tahun 2', 'Tahun 3', 'Tahun 4', 'Tahun 5','Tahun 6', 'Tahun 7'],
      datasets: [{
        label: 'Jumlah Siswa',
        data: [
            data_asrama[1].detail_tahun_ajaran[0].jumlah_murid, 
            data_asrama[1].detail_tahun_ajaran[1].jumlah_murid,
            data_asrama[1].detail_tahun_ajaran[2].jumlah_murid,
            data_asrama[1].detail_tahun_ajaran[3].jumlah_murid,
            data_asrama[1].detail_tahun_ajaran[4].jumlah_murid,
            data_asrama[1].detail_tahun_ajaran[5].jumlah_murid,
            data_asrama[1].detail_tahun_ajaran[6].jumlah_murid,
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});

const ggender = document.getElementById('ggender');
const gtahun = document.getElementById('gtahun');


new Chart(ggender, {
    type: 'doughnut',
    data: {
      labels: ['Laki-Laki', "Perempuan"],
      datasets: [{
        label: 'Jumlah Siswa',
        data: [
            data_asrama[0].detail_jenis_kelamin[0].jumlah, 
            data_asrama[0].detail_jenis_kelamin[1].jumlah
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});
new Chart(gtahun, {
    type: 'pie',
    data: {
      labels: ['Tahun 1', 'Tahun 2', 'Tahun 3', 'Tahun 4', 'Tahun 5','Tahun 6', 'Tahun 7'],
      datasets: [{
        label: 'Jumlah Siswa',
        data: [
            data_asrama[0].detail_tahun_ajaran[0].jumlah_murid, 
            data_asrama[0].detail_tahun_ajaran[1].jumlah_murid,
            data_asrama[0].detail_tahun_ajaran[2].jumlah_murid,
            data_asrama[0].detail_tahun_ajaran[3].jumlah_murid,
            data_asrama[0].detail_tahun_ajaran[4].jumlah_murid,
            data_asrama[0].detail_tahun_ajaran[5].jumlah_murid,
            data_asrama[0].detail_tahun_ajaran[6].jumlah_murid,
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});

const rgender = document.getElementById('rgender');
const rtahun = document.getElementById('rtahun');


new Chart(rgender, {
    type: 'doughnut',
    data: {
      labels: ['Laki-Laki', "Perempuan"],
      datasets: [{
        label: 'Jumlah Siswa',
        data: [
            data_asrama[2].detail_jenis_kelamin[0].jumlah, 
            data_asrama[2].detail_jenis_kelamin[1].jumlah
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});
new Chart(rtahun, {
    type: 'pie',
    data: {
      labels: ['Tahun 1', 'Tahun 2', 'Tahun 3', 'Tahun 4', 'Tahun 5','Tahun 6', 'Tahun 7'],
      datasets: [{
        label: 'Jumlah Siswa',
        data: [
            data_asrama[2].detail_tahun_ajaran[0].jumlah_murid, 
            data_asrama[2].detail_tahun_ajaran[1].jumlah_murid,
            data_asrama[2].detail_tahun_ajaran[2].jumlah_murid,
            data_asrama[2].detail_tahun_ajaran[3].jumlah_murid,
            data_asrama[2].detail_tahun_ajaran[4].jumlah_murid,
            data_asrama[2].detail_tahun_ajaran[5].jumlah_murid,
            data_asrama[2].detail_tahun_ajaran[6].jumlah_murid,
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});

const owl = document.getElementById('owl');
const newt = document.getElementById('newt');
const prestasi = document.getElementById('prestasi');
const spider = document.getElementById('spider');

const data_owl = {
  labels: [
    'Nilai Rata Rata OWL'
  ],
  datasets: [{
    label: data_kinerja[0].nama_asrama,
    data: [
      data_kinerja[0].nilai_rata_rata_owl,
    ],    
    backgroundColor: 'rgba(116, 0, 1, 0.6)', // Merah Gryffindor
    borderColor: 'rgb(116, 0, 1)',
    borderWidth: 1

  }, {
    label: data_kinerja[1].nama_asrama,
    data: [
      data_kinerja[1].nilai_rata_rata_owl,
    ],    
    backgroundColor: 'rgba(255, 205, 86, 0.6)', // Kuning Hufflepuff
    borderColor: 'rgb(255, 205, 86)',
    borderWidth: 1

  }, {
    label: data_kinerja[2].nama_asrama,
    data: [
      data_kinerja[2].nilai_rata_rata_owl,
    ],
    backgroundColor: 'rgba(33, 37, 41, 0.6)', // Biru tua/hitam Ravenclaw (Anda bisa ganti ke biru terang)
    borderColor: 'rgb(33, 37, 41)',
    borderWidth: 1

  }, {
    label: data_kinerja[3].nama_asrama,
    data: [
      data_kinerja[3].nilai_rata_rata_owl,
    ],
    backgroundColor: 'rgba(28, 77, 46, 0.6)', // Hijau Slytherin
    borderColor: 'rgb(28, 77, 46)',
    borderWidth: 1,

  }]
};
new Chart(owl, {
  type: 'bar',
  data: data_owl,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
});

const data_newt = {
  labels: [
    'Nilai Rata Rata NEWT'
  ],
  datasets: [{
    label: data_kinerja[0].nama_asrama,
    data: [
      data_kinerja[0].nilai_rata_rata_newt,
    ], 
    backgroundColor: 'rgba(116, 0, 1, 0.6)', // Merah Gryffindor
    borderColor: 'rgb(116, 0, 1)',
    borderWidth: 1

  }, {
    label: data_kinerja[1].nama_asrama,
    data: [
      data_kinerja[1].nilai_rata_rata_newt,
    ],
    backgroundColor: 'rgba(255, 205, 86, 0.6)', // Kuning Hufflepuff
    borderColor: 'rgb(255, 205, 86)',
    borderWidth: 1
  }, {
    label: data_kinerja[2].nama_asrama,
    data: [
      data_kinerja[2].nilai_rata_rata_newt,
    ],
    backgroundColor: 'rgba(33, 37, 41, 0.6)', // Biru tua/hitam Ravenclaw (Anda bisa ganti ke biru terang)
    borderColor: 'rgb(33, 37, 41)',
    borderWidth: 1

  }, {
    label: data_kinerja[3].nama_asrama,
    data: [
      data_kinerja[3].nilai_rata_rata_newt,
    ],
    backgroundColor: 'rgba(28, 77, 46, 0.6)', // Hijau Slytherin
    borderColor: 'rgb(28, 77, 46)',
    borderWidth: 1,

  }]
};
new Chart(newt, {
  type: 'bar',
  data: data_newt,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
});

const data_prestasi = {
  labels: [
    'Jumlah Murid Berprestasi'
  ],
  datasets: [{
    label: data_kinerja[0].nama_asrama,
    data: [
      data_kinerja[0].jumlah_murid_berprestasi,
    ],
     backgroundColor: 'rgba(116, 0, 1, 0.6)', // Merah Gryffindor
    borderColor: 'rgb(116, 0, 1)',
    borderWidth: 1

  }, {
    label: data_kinerja[1].nama_asrama,
    data: [
      data_kinerja[1].jumlah_murid_berprestasi,
    ],
    backgroundColor: 'rgba(255, 205, 86, 0.6)', // Kuning Hufflepuff
    borderColor: 'rgb(255, 205, 86)',
    borderWidth: 1

  }, {
    label: data_kinerja[2].nama_asrama,
    data: [
      data_kinerja[2].jumlah_murid_berprestasi,
    ],
    backgroundColor: 'rgba(33, 37, 41, 0.6)', // Biru tua/hitam Ravenclaw (Anda bisa ganti ke biru terang)
    borderColor: 'rgb(33, 37, 41)',
    borderWidth: 1

  }, {
    label: data_kinerja[3].nama_asrama,
    data: [
      data_kinerja[3].jumlah_murid_berprestasi,
    ],
    backgroundColor: 'rgba(28, 77, 46, 0.6)', // Hijau Slytherin
    borderColor: 'rgb(28, 77, 46)',
    borderWidth: 1,

  }]
};
new Chart(prestasi, {
  type: 'bar',
  data: data_prestasi,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
});

const data_spider = {
  labels: [
    'Pertahanan Ilmu Hitam',
    'Transfigurasi',
    'Ramuan',
    'Herbologi',
    'Sejarah Ilmu Sihir',
    'Mantera',
    'Astronomi',
    'Penerbangan'
  ],
  datasets: [{
    label: data_mapel[0].nama_asrama,
    data: [
      data_mapel[0].nilai_mata_pelajaran["Pertahanan Ilmu Hitam"],
      data_mapel[0].nilai_mata_pelajaran["Transfigurasi"],
      data_mapel[0].nilai_mata_pelajaran["Ramuan"],
      data_mapel[0].nilai_mata_pelajaran["Herbologi"],
      data_mapel[0].nilai_mata_pelajaran["Sejarah Sihir"],
      data_mapel[0].nilai_mata_pelajaran["Mantera"],
      data_mapel[0].nilai_mata_pelajaran["Astronomi"],
      data_mapel[0].nilai_mata_pelajaran["Penerbangan"]
    ],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: data_mapel[1].nama_asrama,
    data: [
      data_mapel[1].nilai_mata_pelajaran["Pertahanan Ilmu Hitam"],
      data_mapel[1].nilai_mata_pelajaran["Transfigurasi"],
      data_mapel[1].nilai_mata_pelajaran["Ramuan"],
      data_mapel[1].nilai_mata_pelajaran["Herbologi"],
      data_mapel[1].nilai_mata_pelajaran["Sejarah Sihir"],
      data_mapel[1].nilai_mata_pelajaran["Mantera"],
      data_mapel[1].nilai_mata_pelajaran["Astronomi"],
      data_mapel[1].nilai_mata_pelajaran["Penerbangan"]
    ],
    fill: true,
    backgroundColor: 'rgba(235, 232, 54, 0.2)',
    borderColor: 'rgb(223, 235, 54)',
    pointBackgroundColor: 'rgb(232, 235, 54)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(235, 208, 54)'
  }, {
    label: data_mapel[2].nama_asrama,
    data: [
      data_mapel[2].nilai_mata_pelajaran["Pertahanan Ilmu Hitam"],
      data_mapel[2].nilai_mata_pelajaran["Transfigurasi"],
      data_mapel[2].nilai_mata_pelajaran["Ramuan"],
      data_mapel[2].nilai_mata_pelajaran["Herbologi"],
      data_mapel[2].nilai_mata_pelajaran["Sejarah Sihir"],
      data_mapel[2].nilai_mata_pelajaran["Mantera"],
      data_mapel[2].nilai_mata_pelajaran["Astronomi"],
      data_mapel[2].nilai_mata_pelajaran["Penerbangan"]
    ],
    fill: true,
    backgroundColor: 'rgba(54, 148, 235, 0.2)',
    borderColor: 'rgb(54, 148, 235)',
    pointBackgroundColor: 'rgb(54, 117, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(57, 54, 235)'
  }, {
    label: data_mapel[3].nama_asrama,
    data: [
      data_mapel[3].nilai_mata_pelajaran["Pertahanan Ilmu Hitam"],
      data_mapel[3].nilai_mata_pelajaran["Transfigurasi"],
      data_mapel[3].nilai_mata_pelajaran["Ramuan"],
      data_mapel[3].nilai_mata_pelajaran["Herbologi"],
      data_mapel[3].nilai_mata_pelajaran["Sejarah Sihir"],
      data_mapel[3].nilai_mata_pelajaran["Mantera"],
      data_mapel[3].nilai_mata_pelajaran["Astronomi"],
      data_mapel[3].nilai_mata_pelajaran["Penerbangan"]
    ],
    fill: true,
    backgroundColor: 'rgba(126, 235, 54, 0.2)',
    borderColor: 'rgb(69, 235, 54)',
    pointBackgroundColor: 'rgb(172, 235, 54)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 235, 123)'
  }]
};
new Chart(spider, {
  type: 'radar',
  data: data_spider,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
});

const poin = document.getElementById('poin')
const data_point = {
  labels: [
    data_poin[0].detail_poin[0].nama_asrama,
    data_poin[0].detail_poin[1].nama_asrama, 
    data_poin[0].detail_poin[2].nama_asrama, 
    data_poin[0].detail_poin[3].nama_asrama,
  ],
  datasets: [{
    axis: 'y',
    label: 'Peraihan Poin',
    data: [
      data_poin[0].detail_poin[0].total_poin, 
      data_poin[0].detail_poin[1].total_poin, 
      data_poin[0].detail_poin[2].total_poin, 
      data_poin[0].detail_poin[3].total_poin,
    ],
    fill: false,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(70, 255, 64, 0.2)',
      'rgba(89, 86, 255, 0.2)',
      'rgba(192, 184, 75, 0.2)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(80, 255, 64)',
      'rgb(86, 145, 255)',
      'rgb(192, 184, 75)',
    ],
    borderWidth: 1
  }]
};
new Chart(poin,  {
  type: 'bar',
  data : data_point,
  options: {
    indexAxis: 'y',
  }
});