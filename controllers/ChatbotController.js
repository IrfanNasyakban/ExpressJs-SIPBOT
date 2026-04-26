const axios = require("axios");

const chatWithAI = async (req, res) => {
  try {
    const { message, conversationHistory } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    let pegawaiContext = "";
    try {
      const pegawaiData = await getPegawaiData();
      pegawaiContext = formatPegawaiContext(pegawaiData);
    } catch (error) {
      console.log("Failed to fetch pegawai data:", error.message);
    }

    const systemPrompt = `Kamu adalah SIPBOT, asisten AI KHUSUS untuk Data Pegawai Kantor Imigrasi Lhokseumawe.

DATA PEGAWAI TERSEDIA:
${pegawaiContext}

═══════════════════════════════════════════════
ATURAN WAJIB — HARUS DIIKUTI TANPA PENGECUALIAN
═══════════════════════════════════════════════

1. HANYA jawab pertanyaan tentang data pegawai Kantor Imigrasi Lhokseumawe.
2. Jika pertanyaan TIDAK berkaitan, balas HANYA: "Mohon maaf, saya hanya dapat memberikan informasi tentang data pegawai Kantor Imigrasi Lhokseumawe"
3. Selalu gunakan Bahasa Indonesia yang profesional dan sopan.
4. JANGAN berasumsi — hanya gunakan data yang tersedia.
5. Jika data tidak ditemukan, sampaikan dengan sopan.

═══════════════════════════════════════════════
ATURAN FORMAT RESPONSE — SANGAT PENTING
═══════════════════════════════════════════════

TIPE A — JAWABAN TEKS BIASA (TANPA TABEL)
Gunakan format teks biasa jika pertanyaan adalah:
- Pertanyaan "siapa" → jawab nama saja dalam kalimat
- Pertanyaan "apa" → jawab dalam kalimat
- Pertanyaan "berapa" → jawab angka/nilai dalam kalimat
- Pertanyaan "dimana" → jawab lokasi dalam kalimat
- Pertanyaan "kapan" → jawab tanggal/waktu dalam kalimat
- Pertanyaan perbandingan singkat
- Pertanyaan ya/tidak
- Semua pertanyaan yang TIDAK secara eksplisit meminta "tabel", "data lengkap", "tampilkan", "berikan", "daftar", "list"

Contoh TIPE A:
- "siapa yang tempat lahirnya di Langsa?" → "Pegawai yang lahir di Langsa adalah **Prof. Rafli, S.T.** (NIP: 2342)."
- "berapa tinggi badan Irvan?" → "Tinggi badan **Drs. Irvan Nasyakban, S.Kom** adalah **170 cm**."
- "siapa yang beragama Hindu?" → "Pegawai yang beragama Hindu adalah **Prof. Rafli, S.T.** (NIP: 2342, Jabatan: Kepala Subtikkim)."
- "apa jabatan Irvan?" → "Jabatan **Drs. Irvan Nasyakban, S.Kom** adalah **KTU** di bagian Kepegawaian."
- "berapa jumlah pegawai?" → "Total pegawai Kantor Imigrasi Lhokseumawe saat ini adalah **2 orang**."
- "siapa saja pegawai yang aktif?" → "Pegawai yang berstatus aktif adalah:\n1. **Prof. Rafli, S.T.** (NIP: 2342)\n2. **Drs. Irvan Nasyakban, S.Kom** (NIP: 67321345465)"

TIPE B — TABEL TERSTRUKTUR (DENGAN CARD)
Gunakan format tabel HANYA jika:
- User secara eksplisit menyebut: "tabel", "tampilkan data", "berikan data", "data lengkap", "semua data", "detail", "informasi lengkap", "daftar"
- User menyebut kategori data spesifik: "kepegawaian", "pangkat", "rekening", "fisik", "identitas", "alamat", "pendidikan", "ukuran", "keluarga"

Contoh TIPE B:
- "tampilkan data pegawai" → gunakan tabel
- "berikan tabel pangkat semua pegawai" → gunakan tabel
- "data lengkap Irvan" → gunakan tabel
- "tampilkan rekening dan pangkat" → gunakan tabel
- "daftar semua pegawai beserta jabatan" → gunakan tabel

FORMAT TABEL (hanya digunakan untuk TIPE B):

Jika banyak pegawai, tampilkan ringkasan dulu:

### Ringkasan

| Field | Value |
|-------|-------|
| Total Pegawai | {n} |
| Data Ditampilkan | {kategori} |

Lalu untuk setiap pegawai:

### Pegawai {n}

#### Identitas Pegawai

| Field | Value |
|-------|-------|
| Nama | {nama lengkap dengan gelar} |
| NIP | {nip} |

#### {Kategori yang diminta}

| Field | Value |
|-------|-------|
| {field} | {value} |

ATURAN FORMAT TABEL:
- WAJIB selalu sertakan "#### Identitas Pegawai" (Nama + NIP) di setiap ### Pegawai
- HANYA tampilkan kategori yang diminta user
- Jika field kosong → tulis "-"
- DILARANG tabel multi-kolom
- DILARANG bullet points untuk data tabel

═══════════════════════════════════════════════
ATURAN TAMBAHAN FORMAT
═══════════════════════════════════════════════

- Jika user hanya minta kategori tertentu (misal hanya pangkat dan rekening):
  → Tampilkan WAJIB "#### Identitas Pegawai" (Nama + NIP)
  → Tampilkan HANYA kategori yang diminta
  → JANGAN tampilkan kategori lain yang tidak diminta

- Jika field kosong atau tidak ada datanya → tulis "-"
- DILARANG tabel multi-kolom: | NIP | Nama | Jabatan | ← DILARANG
- DILARANG bullet points untuk data pegawai
- DILARANG paragraf panjang untuk data pegawai

═══════════════════════════════════════════════
CONTOH RESPONSE BENAR
═══════════════════════════════════════════════

CONTOH 1 — User minta "berikan pangkat dan rekening semua pegawai":

### Ringkasan

| Field | Value |
|-------|-------|
| Total Pegawai | 2 |
| Data Ditampilkan | Pangkat, Rekening |

### Pegawai 1

#### Identitas Pegawai

| Field | Value |
|-------|-------|
| Nama | Prof. Rafli, S.T. |
| NIP | 2342 |

#### Pangkat

| Field | Value |
|-------|-------|
| Pangkat | Brigadir W |
| Golongan Ruang | II/A |
| Nomor SK Pangkat | 001/SK/2025 |
| TMT Pangkat | 2/4/2026 |

#### Rekening

| Field | Value |
|-------|-------|
| Nomor Rekening Gaji | 89688282 |
| Nama Bank | Bank BCA |
| Kantor Cabang | KCP Blang Pulo |

### Pegawai 2

#### Identitas Pegawai

| Field | Value |
|-------|-------|
| Nama | Drs. Irvan Nasyakban, S.Kom |
| NIP | 67321345465 |

#### Pangkat

| Field | Value |
|-------|-------|
| Pangkat | Pembina |
| Golongan Ruang | IV/A |
| Nomor SK Pangkat | 002/SK/2024 |
| TMT Pangkat | 1/1/2024 |

#### Rekening

| Field | Value |
|-------|-------|
| Nomor Rekening Gaji | 31421232232 |
| Nama Bank | Bank Mandiri |
| Kantor Cabang | KCP Lhokseumawe |

---

CONTOH 2 — User minta "data lengkap Irvan":

### Pegawai 1

#### Identitas Pegawai

| Field | Value |
|-------|-------|
| Nama | Drs. Irvan Nasyakban, S.Kom |
| NIP | 67321345465 |
| Tempat Lahir | Lhokseumawe |
| Tanggal Lahir | 1 Januari 1975 |
| Gender | Laki-laki |
| Agama | Islam |
| Email | irvan@imigrasi.go.id |
| No HP | 081234567890 |

#### Kepegawaian

| Field | Value |
|-------|-------|
| Status Pegawai | Aktif |
| Jabatan | KTU |
| Bagian Kerja | Kepegawaian |
| Eselon | Eselon II/b |
| TMT Jabatan | 5/4/2026 |
| TMT Pensiun | 30/4/2026 |

#### Pangkat

| Field | Value |
|-------|-------|
| Pangkat | Pembina |
| Golongan Ruang | IV/A |
| Nomor SK Pangkat | 002/SK/2024 |
| TMT Pangkat | 1/1/2024 |

#### Rekening

| Field | Value |
|-------|-------|
| Nomor Rekening Gaji | 31421232232 |
| Nama Bank | Bank Mandiri |
| Kantor Cabang | KCP Lhokseumawe |

---

CONTOH 3 — Pertanyaan tidak valid:
User: "Siapa presiden Indonesia?"
Response: "Mohon maaf, saya hanya dapat memberikan informasi tentang data pegawai Kantor Imigrasi Lhokseumawe"`;

    const messages = [
      { role: "system", content: systemPrompt },
      ...(conversationHistory || []),
      { role: "user", content: message },
    ];

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",
        messages,
        temperature: 0.1,
        max_tokens: 4096,
        top_p: 0.9,
        stream: false,
        stop: null,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
      }
    );

    let aiMessage = response.data.choices[0].message.content;

    const isPegawaiRelated = checkIfPegawaiRelated(message, aiMessage);
    if (!isPegawaiRelated) {
      aiMessage =
        "Mohon maaf, saya hanya dapat memberikan informasi tentang data pegawai Kantor Imigrasi Lhokseumawe";
    }

    return res.status(200).json({
      success: true,
      data: {
        message: aiMessage,
        conversationId: response.data.id,
        usage: response.data.usage,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Groq API Error:", error.response?.data || error.message);

    if (error.response?.status === 401) {
      return res.status(401).json({ success: false, message: "Invalid API key" });
    }
    if (error.response?.status === 429) {
      return res.status(429).json({ success: false, message: "Rate limit exceeded. Please try again later." });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to get AI response",
      error: error.message,
    });
  }
};

// ─── HELPER: cek apakah pertanyaan/response berkaitan dengan pegawai ──────────
const checkIfPegawaiRelated = (question, response) => {
  const lq = question.toLowerCase();
  const lr = response.toLowerCase();

  if (lr.includes("mohon maaf, saya hanya dapat memberikan informasi tentang data pegawai")) {
    return true;
  }

  const pegawaiKeywords = [
    "pegawai", "nip", "nama", "jabatan", "kepegawaian", "pangkat", "golongan",
    "alamat", "identitas", "nik", "kk", "bpjs", "taspen", "pasangan", "anak",
    "keluarga", "pendidikan", "fisik", "tinggi", "berat", "ukuran", "rekening",
    "bank", "gaji", "kantor imigrasi", "lhokseumawe", "imigrasi", "eselon",
    "pppk", "pns", "asn", "gelar", "gender", "agama", "email", "kontak",
    "jumlah", "berapa", "siapa", "daftar", "data", "informasi", "cari",
    "aktif", "pensiun", "tmt", "golongan ruang", "sk pangkat",
  ];

  const nonPegawaiKeywords = [
    "cuaca", "resep", "ibukota", "negara lain", "presiden", "selebriti",
    "film", "lagu", "musik", "buku novel", "sejarah dunia", "matematika",
    "hitung", "kode program", "tutorial", "cara membuat paspor",
    "paspor", "visa", "prosedur imigrasi", "syarat imigrasi",
  ];

  if (nonPegawaiKeywords.some((k) => lq.includes(k))) return false;

  const hasPegawai = pegawaiKeywords.some((k) => lq.includes(k) || lr.includes(k));
  if (question.trim().split(" ").length <= 3 && !hasPegawai) return false;

  return hasPegawai;
};

// ─── HELPER: fetch data pegawai dari API internal ─────────────────────────────
const getPegawaiData = async () => {
  let apiUrl = process.env.API_URL;

  if (!apiUrl) {
    const port = process.env.APP_PORT || 5000;
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    const host = process.env.API_HOST || "localhost";
    apiUrl = `${protocol}://${host}:${port}`;
    console.warn("API_URL not defined in .env, using default:", apiUrl);
  }

  if (!apiUrl.startsWith("http://") && !apiUrl.startsWith("https://")) {
    throw new Error(`Invalid API_URL format: ${apiUrl}`);
  }

  try {
    console.log("Fetching pegawai data from:", `${apiUrl}/all-pegawai`);
    const response = await axios.get(`${apiUrl}/all-pegawai`, { timeout: 10000 });
    return response.data;
  } catch (error) {
    console.error("Error fetching pegawai data:", error.message);
    if (error.code === "ECONNREFUSED") console.error("Connection refused.");
    if (error.code === "ENOTFOUND") console.error("Host not found. Check API_URL.");
    throw new Error(`Failed to fetch pegawai data: ${error.message}`);
  }
};

// ─── HELPER: format data pegawai menjadi context untuk AI ────────────────────
const formatPegawaiContext = (pegawaiData) => {
  if (!pegawaiData || pegawaiData.length === 0) {
    return "Tidak ada data pegawai yang tersedia.";
  }

  let context = `Total Pegawai: ${pegawaiData.length}\n\n`;

  pegawaiData.forEach((p, index) => {
    context += `=== PEGAWAI ${index + 1} ===\n`;
    context += `NIP              : ${p.nip || "-"}\n`;
    context += `Nama             : ${p.namaDenganGelar || p.nama || "-"}\n`;
    context += `Tempat Lahir     : ${p.tempatLahir || "-"}\n`;
    context += `Tanggal Lahir    : ${p.tanggalLahir ? new Date(p.tanggalLahir).toLocaleDateString("id-ID") : "-"}\n`;
    context += `Gender           : ${p.gender || "-"}\n`;
    context += `Agama            : ${p.agama || "-"}\n`;
    context += `Status Pegawai   : ${p.statusPegawai ? "Aktif" : "Tidak Aktif"}\n`;
    context += `Email Pribadi    : ${p.emailPribadi || "-"}\n`;
    context += `Email Dinas      : ${p.emailDinas || "-"}\n`;
    context += `No HP            : ${p.noHp || "-"}\n`;
    context += `Hobi             : ${p.hobi || "-"}\n`;

    if (p.alamats?.length > 0) {
      context += `\n[ALAMAT]\n`;
      p.alamats.forEach((a) => {
        context += `  Alamat KTP      : ${a.alamatKTP || "-"}\n`;
        context += `  Alamat Domisili : ${a.alamatDomisili || "-"}\n`;
      });
    }

    if (p.kepegawaians?.length > 0) {
      context += `\n[KEPEGAWAIAN]\n`;
      p.kepegawaians.forEach((k) => {
        context += `  Status          : ${k.statusKepegawaian || "-"}\n`;
        context += `  Jabatan         : ${k.jabatan || "-"}\n`;
        context += `  Bagian Kerja    : ${k.bagianKerja || "-"}\n`;
        context += `  Eselon          : ${k.eselon || "-"}\n`;
        context += `  TMT Jabatan     : ${k.tmtJabatan ? new Date(k.tmtJabatan).toLocaleDateString("id-ID") : "-"}\n`;
        context += `  TMT Pensiun     : ${k.tmtPensiun ? new Date(k.tmtPensiun).toLocaleDateString("id-ID") : "-"}\n`;
      });
    }

    if (p.pangkats?.length > 0) {
      context += `\n[PANGKAT]\n`;
      p.pangkats.forEach((pk) => {
        context += `  Pangkat         : ${pk.pangkat || "-"}\n`;
        context += `  Golongan Ruang  : ${pk.golonganRuang || "-"}\n`;
        context += `  Nomor SK        : ${pk.nomorSKPangkat || "-"}\n`;
        context += `  TMT Pangkat     : ${pk.tmtPangkat ? new Date(pk.tmtPangkat).toLocaleDateString("id-ID") : "-"}\n`;
      });
    }

    if (p.identitas?.length > 0) {
      context += `\n[IDENTITAS]\n`;
      p.identitas.forEach((id) => {
        context += `  NIK             : ${id.nik || "-"}\n`;
        context += `  Nomor KK        : ${id.nomorKK || "-"}\n`;
        context += `  Nomor BPJS      : ${id.nomorBPJS || "-"}\n`;
        context += `  Nomor Taspen    : ${id.nomorTaspen || "-"}\n`;
      });
    }

    if (p.pasangans?.length > 0) {
      context += `\n[PASANGAN]\n`;
      p.pasangans.forEach((ps) => {
        context += `  Nama Pasangan   : ${ps.namaPasangan || "-"}\n`;
      });
    }

    if (p.anaks?.length > 0) {
      context += `\n[ANAK]\n`;
      p.anaks.forEach((a, i) => {
        context += `  Anak ${i + 1}          : ${a.namaAnak || "-"}\n`;
      });
    }

    if (p.pendidikans?.length > 0) {
      context += `\n[PENDIDIKAN]\n`;
      p.pendidikans.forEach((pd) => {
        context += `  Pendidikan Terakhir : ${pd.pendidikanTerakhir || "-"}\n`;
      });
    }

    if (p.fisiks?.length > 0) {
      context += `\n[FISIK]\n`;
      p.fisiks.forEach((f) => {
        context += `  Tinggi Badan    : ${f.tinggiBadan || "-"} cm\n`;
        context += `  Berat Badan     : ${f.beratBadan || "-"} kg\n`;
        context += `  Jenis Rambut    : ${f.jenisRambut || "-"}\n`;
        context += `  Warna Rambut    : ${f.warnaRambut || "-"}\n`;
        context += `  Bentuk Wajah    : ${f.bentukWajah || "-"}\n`;
        context += `  Warna Kulit     : ${f.warnaKulit || "-"}\n`;
        context += `  Ciri Khusus     : ${f.ciriKhusus || "-"}\n`;
      });
    }

    if (p.ukurans?.length > 0) {
      context += `\n[UKURAN]\n`;
      p.ukurans.forEach((u) => {
        context += `  Ukuran PDL/Divamot : ${u.ukuranPadDivamot || "-"}\n`;
        context += `  Ukuran Sepatu      : ${u.ukuranSepatu || "-"}\n`;
        context += `  Ukuran Topi        : ${u.ukuranTopi || "-"}\n`;
      });
    }

    if (p.rekenings?.length > 0) {
      context += `\n[REKENING]\n`;
      p.rekenings.forEach((r) => {
        context += `  Nomor Rekening Gaji : ${r.nomorRekGaji || "-"}\n`;
        context += `  Nama Bank           : ${r.namaBank || "-"}\n`;
        context += `  Kantor Cabang       : ${r.kantorCabang || "-"}\n`;
      });
    }

    context += `\n`;
  });

  return context;
};

// ─── ENDPOINT: get raw pegawai context (untuk debugging) ─────────────────────
const getPegawaiContext = async (req, res) => {
  try {
    const pegawaiData = await getPegawaiData();
    return res.status(200).json({
      success: true,
      data: pegawaiData,
      formattedContext: formatPegawaiContext(pegawaiData),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to get pegawai context",
      error: error.message,
    });
  }
};

module.exports = { chatWithAI, getPegawaiContext };