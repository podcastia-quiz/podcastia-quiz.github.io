// script.js

const allQuestions = [
  {
    "question": "Hangisi Podcastia’nın ana karakterlerinden biri değildir?",
    "options": ["Wolfgang", "Kanye", "Fenriz", "Gülroth"],
    "correctAnswer": "Gülroth"
  },
  {
    "question": "Kahramanlar maddi aleme hangi şeytan efendiye hizmet etmek için gönderilmiştir?",
    "options": ["Beherit", "Lucifer", "Beelzebub", "Vecna"],
    "correctAnswer": "Beherit"
  },
  {
    "question": "Kanye’nin ilk yaptığı büyü nedir?",
    "options": ["Light", "Mage Hand", "Charm Person", "Mage Armor"],
    "correctAnswer": "Light"
  },
  {
    "question": "Kahramanların maddi aleme geldikten sonra ilk gittikleri, gönüllerinde büyük yer tutan kasabanın adı nedir?",
    "options": ["Tavşanlı", "Ayranlı", "Kaşarlı", "Yeni İkinciler"],
    "correctAnswer": "Tavşanlı"
  },
  {
    "question": "Gerçek Gülroth’un mesleği nedir?",
    "options": ["Zümküfül Taciri", "Büyücü Çırağı", "Katip", "Kolcu"],
    "correctAnswer": "Büyücü Çırağı"
  },
  {
    "question": "Hangisi Wolfgang’in diğer isimlerinden biri değildir?",
    "options": ["Raul", "Percival", "Zarek", "Dorian"],
    "correctAnswer": "Dorian"
  },
  {
    "question": "Gülroth’un Antik Zümküfül Tapınağındaki görevi için önceden belirlenen payı nedir?",
    "options": ["5te1", "4te1", "6da2", "8de3"],
    "correctAnswer": "5te1"
  },
  {
    "question": "Kahramanların uyandıkları bedenlerin sahip olduğu toplam altın ne kadardır?",
    "options": ["160", "170", "180", "190"],
    "correctAnswer": "180"
  },
  {
    "question": "Antik Zümküfül Tapınağı-Tavşanlı Kasabası arası yürüyerek kaç saat sürer?",
    "options": ["2", "3", "4", "5"],
    "correctAnswer": "3"
  },
  {
    "question": "Gülroth; İsmail, Bono ve Temiz ile nerede tanışmıştır?",
    "options": ["Yeni İkinciler", "Tavşanlı", "Kazıncıklar", "Kaşarlı"],
    "correctAnswer": "Yeni İkinciler"
  },
  {
    "question": "Tavşanlı Kasabasının Hancısının adı nedir?",
    "options": ["Yusuf", "Serdar", "Selim", "Yılmaz"],
    "correctAnswer": "Yusuf"
  },
  {
    "question": "Kahramanlar Yusuf’un Hanında kaç numaralı odada kalmaktadır?",
    "options": ["3", "9", "6", "7"],
    "correctAnswer": "3"
  },
  {
    "question": "Talihsiz bir kaza sonucu hikayenin başlarında hayatını kaybeden, Hancı Yusuf’un yerinde garsonluk yapan hanımefendinin ismi nedir?",
    "options": ["Seyhan", "Ceyhan", "Reyhan", "Nurhan"],
    "correctAnswer": "Reyhan"
  },
  {
    "question": "Beherit ile iletişim kurmak için yapılan şeytani ritüelde gereken temel bileşen nedir?",
    "options": ["Bakire Kanı", "Zümküfül", "Tavşan", "Marul"],
    "correctAnswer": "Bakire Kanı"
  },
  {
    "question": "Kertikler hangi dili konuşmaktadır?",
    "options": ["Draconic", "Infernal", "Abyssal", "Giant"],
    "correctAnswer": "Draconic"
  },
  {
    "question": "Tavşanlı Kasabasının büyü dükkanı işletmecisinin adı nedir?",
    "options": ["Wingardium leviosman", "Yusuf", "Serdar Dardark", "Balbaş"],
    "correctAnswer": "Wingardium leviosman"
  },
  {
    "question": "Tuhaf varlık, yaratık, Gülroth kod isimli cin hangi şeytan efendiye hizmet etmektedir?",
    "options": ["Beelzebub", "Beherit", "Lucifer", "Baphomet"],
    "correctAnswer": "Baphomet"
  },
  {
    "question": "Fenriz’in Eldritch Blast’ı hangi formda sirayet eder?",
    "options": ["At", "İnek", "Deve", "Katır"],
    "correctAnswer": "At"
  },
  {
    "question": "1. Kerkit Savaşı’na kaç kertik katılmıştır?",
    "options": ["10", "15", "20", "25"],
    "correctAnswer": "15"
  },
  {
    "question": "Podcastia Tarihi programının sunucusu kimdir?",
    "options": ["Sir Jonathan Clean", "Sir Alistair Vane", "Lord Sebastian Hale", "Sir Reginald Pryne"],
    "correctAnswer": "Sir Jonathan Clean"
  },
  {
    "question": "Eciyek Sülüğünün çıkardığı sesler arasında aşağıdakilerden hangisi yoktur?",
    "options": ["Viiiiiiğ", "Viğ Viğ", "Kisveeğ", "Yeğiyeğiyeği"],
    "correctAnswer": "Yeğiyeğiyeği"
  },
  {
    "question": "Eciyek Sülüğünün Katli Destanının kahramanı kimdir?",
    "options": ["Kanye", "Fenriz", "Wolfgang", "Gülroth"],
    "correctAnswer": "Kanye"
  },
  {
    "question": "Beherit’in 4. sekreteri olan muazzam varlık kimdir?",
    "options": ["Drock-rha", "Gruth", "Mehmet", "Ahmet"],
    "correctAnswer": "Drock-rha"
  },
  {
    "question": "Cevizli Sucuk kimin çantasından çıkmıştır?",
    "options": ["Can Temiz", "Can Bonomo", "Reyhan", "İsmail Türküsev"],
    "correctAnswer": "İsmail Türküsev"
  },
  {
    "question": "Wolfgang’in gözleri ne renktir?",
    "options": ["Siyah", "Mavi", "Yeşil", "Sarı"],
    "correctAnswer": "Mavi"
  },
  {
    "question": "Wolfgang’in Class değişim süreci nasıl gelişmiştir?",
    "options": ["Monk’tan Rogue’a", "Monk’tan Wizard’a", "Rogue’dan Monk’a", "Wizard’tan Monk’a"],
    "correctAnswer": "Monk’tan Rogue’a"
  },
  {
    "question": "Orgnaik Bakire Kanının bir tüpü kaç altındır?",
    "options": ["1", "2", "1,5", "2,5"],
    "correctAnswer": "1"
  },
  {
    "question": "Tavşanlı valisinin adı nedir?",
    "options": ["Toktamış Bey", "Balbaş Bey", "Derbaş Bey", "Yetkin D. İkinciler"],
    "correctAnswer": "Toktamış Bey"
  },
  {
    "question": "Tavşanlı Kasabasında hangi tanrının tapınağı yoktur?",
    "options": ["Apollo", "Artemis", "Odin", "Terkos"],
    "correctAnswer": "Terkos"
  },
  {
    "question": "Ömer Baba’nın taptığı tanrının ismi nedir?",
    "options": ["Apollo", "Artemis", "Odin", "Belenus"],
    "correctAnswer": "Belenus"
  },
  {
    "question": "Amores Perros’a bağlı Paladin Organizasyonunun ismi nedir?",
    "options": ["Pençe Birliği", "Güneş Birliği", "Kutsal Birlik", "Demir Bilek"],
    "correctAnswer": "Pençe Birliği"
  },
  {
    "question": "Pençe Birliği Baş Paladini kimdir?",
    "options": ["Taşkaya Has Sertkaya", "Haskaya Taş Sertkaya", "Tamkaya Has Sertkaya", "Taşkaya Ham Sertkaya"],
    "correctAnswer": "Taşkaya Has Sertkaya"
  },
  {
    "question": "Sokak jargonunda Gondik’in kalınına ne denir?",
    "options": ["Mariz", "Maraz", "Maruz", "Matiz"],
    "correctAnswer": "Mariz"
  },
  {
    "question": "Yusuf’un Hanında kişi başı konaklama ücreti ne kadardır?",
    "options": ["1,5 altın", "1 altın", "2 altın", "0,5 altın"],
    "correctAnswer": "0,5 altın"
  },
  {
    "question": "Fularlı Otelindeki kasaların en güvenlisi nerede saklanmaktadır?",
    "options": ["Ethereal Alem", "Astral Alem", "Elemental Alem", "Materyal Alem"],
    "correctAnswer": "Ethereal Alem"
  },
  {
    "question": "Fularlı Otelinde, müşterilere verilen Büyülü Oda Taşını kaybetmenin cezası ne kadardır?",
    "options": ["150 altın", "250 altın", "50 altın", "350 altın"],
    "correctAnswer": "150 altın"
  },
  {
    "question": "Sevilen Şaraplarının varisi olarak tanıtılan Wolfgang, hangi ismi kullanmıştır?",
    "options": ["Serdar Sevilen", "Sertaç Sevilen", "Aytaç Sevilen", "Sevtap Sevilen"],
    "correctAnswer": "Serdar Sevilen"
  },
  {
    "question": "Hangisi Wolfgang’in kimliğine büründüğü kişiliklerden birisi değildir?",
    "options": ["Serdar Sevilen", "Ian ScCobottom", "Tuzluk", "Dorian"],
    "correctAnswer": "Dorian"
  },
  {
    "question": "Hangisi dışarıda kalır?",
    "options": ["Nihan", "Sevil", "Şule", "Leman"],
    "correctAnswer": "Leman"
  },
  {
    "question": "Fenriz’in Kertik Kampını bulmak için çağırdığı, ‘’abi’’ çekmesi üzerine büyük gerginlik yaratan kuş hangi cinstir?",
    "options": ["İspinoz", "Martı", "Güvercin", "Serçe"],
    "correctAnswer": "İspinoz"
  },
  {
    "question": "Draconic dilinde, ortak dildeki hangi kelimenin karşılığı yoktur?",
    "options": ["Eyvallah", "Yaver", "Silah", "Tarz"],
    "correctAnswer": "Eyvallah"
  },
  {
    "question": "Kertiklerin de konuştuğu Draconic dilini hangi karakter bilmektedir?",
    "options": ["Kanye", "Fenriz", "Wolfgang", "Veriban"],
    "correctAnswer": "Kanye"
  },
  {
    "question": "Kertiklerin büyü ile haşır neşir olan, şaman bireylerinin pulları ne renktir?",
    "options": ["Mavi", "Yeşil", "Kırmızı", "Mor"],
    "correctAnswer": "Mavi"
  },
  {
    "question": "Kahramanları, insanlar arasında casus olarak işe alan Kertik liderinin adı nedir?",
    "options": ["Vankuyn'shiiq", "Shanku'elith", "Zhun'karith", "Moruq’shiin"],
    "correctAnswer": "Vankuyn'shiiq"
  },
  {
    "question": "Dandik İtişme karşılaşmasında kaç haydut yer almıştır?",
    "options": ["3", "4", "5", "2"],
    "correctAnswer": "3"
  },
  {
    "question": "Dandik İtişme sonrası hayatta kalan, kahramanların yanında ‘’hırt’’ olarak yer bulan haydutun ismi nedir?",
    "options": ["Adanır", "Yaganır", "Zaranır", "Kutanır"],
    "correctAnswer": "Adanır"
  },
  {
    "question": "Tavşanlı Belediye binasındaki en kilit isim kimdir?",
    "options": ["Sekrete", "Çaycı", "Vali", "Seyis"],
    "correctAnswer": "Çaycı"
  },
  {
    "question": "Podcastia Kıtasında, tapınaklardaki diriltme hizmetinden faydalanmak için ne kadar ödeme yapmanız gerekir?",
    "options": ["300 altın", "400 altın", "500 altın", "600 altın"],
    "correctAnswer": "500 altın"
  },
  {
    "question": "Beherit tarafından Wolfgang’in hangi organına, şekildeğiştiren Baphomet uşaklarını tespit etme gücü bahşedilmiştir?",
    "options": ["Göz", "Burun", "Dil", "Kulak"],
    "correctAnswer": "Göz"
  },
  {
    "question": "Canısı ailesinden Sertaç’ın, sokaklardaki namı nedir?",
    "options": ["Ustura", "Berber", "Katil", "Naturel"],
    "correctAnswer": "Ustura"
  }
]

// Kullanıcının tarayıcı belleğinden önceki soruları alma
let usedQuestions = JSON.parse(localStorage.getItem("usedQuestions")) || [];
let questions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let timerInterval;
let elapsedTime = 0;

function shuffleAndSelectQuestions() {
  const availableQuestions = allQuestions.filter(q => !usedQuestions.includes(q));
  const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());
  questions = shuffled.slice(0, 10);
  usedQuestions.push(...questions);
  localStorage.setItem("usedQuestions", JSON.stringify(usedQuestions));
}

function startQuiz() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  document.getElementById("results-screen")?.remove();
  currentQuestionIndex = 0;
  correctCount = 0;
  elapsedTime = 0;
  startTimer();
  showQuestion();
}

function startTimer() {
  stopTimer(); // Önceki timer'ı temizle
  const timerElement = document.getElementById("timer");
  timerElement.textContent = `Süre: ${elapsedTime} saniye`;
  timerInterval = setInterval(() => {
    elapsedTime++;
    timerElement.textContent = `Süre: ${elapsedTime} saniye`;
  }, 1000);
}


function stopTimer() {
  clearInterval(timerInterval);
}

function showQuestion() {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const current = questions[currentQuestionIndex];
  document.getElementById("question").textContent = current.question;

  const optionsList = document.getElementById("options");
  optionsList.innerHTML = "";
  const shuffledOptions = shuffleArray([...current.options]);
  shuffledOptions.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => selectOption(li, option));
    optionsList.appendChild(li);
  });

  document.getElementById("question-count").textContent = `Soru ${currentQuestionIndex + 1} / 10`;
  document.getElementById("final-answer-btn").style.display = "none";
  document.getElementById("next-question-btn").style.display = "none";
}

function selectOption(li, selectedOption) {
  const current = questions[currentQuestionIndex];
  const allOptions = document.querySelectorAll("#options li");

  // Eğer kullanıcı cevap verdi ve "Sonraki Soru"ya tıkladıysa seçim yapılmasın
  if (li.classList.contains("confirmed-correct") || li.classList.contains("confirmed-wrong")) {
    return; // Seçim yapılmasını engelle
  }

  allOptions.forEach(el => el.classList.remove("pending"));
  li.classList.add("pending");

  document.getElementById("final-answer-btn").style.display = "block";
  document.getElementById("final-answer-btn").onclick = () => confirmAnswer(li, selectedOption);
}

function confirmAnswer(li, selectedOption) {
  stopTimer(); // Zamanı durdur

  const current = questions[currentQuestionIndex];
  const allOptions = document.querySelectorAll("#options li");

  allOptions.forEach(el => el.classList.remove("pending"));
  allOptions.forEach(el => el.style.pointerEvents = "none");

  if (selectedOption === current.correctAnswer) {
    li.classList.add("confirmed-correct");
    correctCount++;
  } else {
    li.classList.add("confirmed-wrong");
    allOptions.forEach(el => {
      if (el.textContent === current.correctAnswer) {
        el.classList.add("confirmed-correct");
      }
    });
  }

  document.getElementById("final-answer-btn").style.display = "none";

  if (currentQuestionIndex < 9) {
    document.getElementById("next-question-btn").style.display = "block";
    document.getElementById("next-question-btn").onclick = () => {
      currentQuestionIndex++;
      showQuestion();
      startTimer(); // Kaldığı yerden devam et
    };
  } else {
    setTimeout(() => {
      endQuiz();
    }, 1000);
  }
}


function endQuiz() {
  stopTimer();
  document.getElementById("quiz-box").style.display = "none";
  const container = document.getElementById("quiz-container");
  const resultDiv = document.createElement("div");
  resultDiv.id = "results-screen";
  resultDiv.innerHTML = `
  <h1>ŞE-FİİMM!
    <h2>Test Tamamlandı</h2>
    <p>Doğru Sayısı: ${correctCount} / 10</p>
    <p>Süre: ${elapsedTime} saniye</p>
    <button class="quiz-button" onclick="restartQuiz()">Tekrar Başla</button>
  `;
  container.appendChild(resultDiv);
}

function restartQuiz() {
  document.getElementById("results-screen").remove();
  document.getElementById("start-screen").style.display = "block";
  questions = [];
  usedQuestions = [];
  localStorage.removeItem("usedQuestions");
  currentQuestionIndex = 0;
  correctCount = 0;
  elapsedTime = 0;
  clearInterval(timerInterval);
}

document.getElementById("start-btn").addEventListener("click", () => {
  shuffleAndSelectQuestions();
  startQuiz();
});

